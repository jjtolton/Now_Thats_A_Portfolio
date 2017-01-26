import BeautifulSoup
import argparse
import os
import re
import subprocess
import time
from collections import deque
from functools import reduce

import naga
import requests
from concurrent.futures import ThreadPoolExecutor
from naga import compose, partial
from requests import ConnectionError


def compose(fns, x=None):
    """Takes a set of functions and returns a fn that is the composition
of those fns.  The returned fn takes a variable number of args,
applies the rightmost of fns to the args, the next
fn (right-to-left) to the result, etc.  If no value is supplied, returns a
stateful transducer"""
    if x is None:
        return partial(compose, fns)

    return reduce(lambda a, b: b(a), fns, x)


def relative_url(path):
    def check_in_path(path, fname):
        cmd = '{{ find {} 3>&2 2>&1 1>&3 | grep -v \'Permission denied\' >&3; }} 3>&2 2>&1 | egrep "{}$"'
        _path = compose([
            lambda s: s.replace(r'/', r'[/]'),
            lambda s: s.replace(r'.', r'[.]')],
            fname)
        try:
            cmd_format = cmd.format(path, _path)
            p = subprocess.Popen(cmd_format, shell=True, stdout=subprocess.PIPE)
            c, e = p.communicate()
            if c:
                return c.split('\n')[0].strip()
            else:
                return False
        except StopIteration as e:
            return False

    fname = path
    path = os.getcwd()
    while path:
        res = check_in_path(path, fname)
        if res:
            return res
        path = os.path.split(path)[0]
    return False


def main():
    parser = argparse.ArgumentParser()

    parser.add_argument('--manga', '-m', action='store', dest='manga')
    parser.add_argument('--issue', '-i', action='store', dest='issue_no')
    parser.add_argument('--range', '-r', action='store', dest='range', default=1)
    parser.add_argument('--timeout', '-to', action='store', dest='timeout', default=60)
    parser.add_argument('--threads', '-ts', action='store', dest='threads', default=50)
    parser.add_argument('--url', '-u', action='store', dest='url', default='http://www.mangareader.net')
    parser.add_argument('--jobs', '-j', action='store', dest='jobs', default=1)


    args = parser.parse_args()

    manga_of_choice = str(args.manga)
    issue_no = int(args.issue_no)
    issue_range = max(issue_no + 1, int(args.range) + 1)
    timeout = int(args.timeout)
    threads = int(args.threads)
    url = str(args.url)
    jobs = int(args.jobs)

    baseurl = '{}/{}/'.format(url, manga_of_choice)
    # os.mkdir(relative_url('/Downloads') + '/manga')
    # downloaddir = relative_url('Downloads/manga')
    downloads = relative_url('/Downloads')
    if downloads is None:
        raise Exception("Make a Downloads folder, dummy!")
    mangas = os.path.join(downloads, 'mangas')
    try:
        os.mkdir(mangas)
    except OSError:
        print("Download directory {} already exists.  Probably.".format(mangas))

    basedldir = os.path.join(mangas, manga_of_choice)
    try:
        os.mkdir(basedldir)
    except OSError:
        print("Issue directory {} already exists.  Probably.".format(basedldir))

    issues = list(naga.windows(jobs, range(issue_no, issue_range)))

    errors = deque()
    successes = 0

    with ThreadPoolExecutor(threads) as pool:
        for issue_gp in issues:
            issue_gp = filter(lambda x: x, issue_gp)
            fs = deque()

            def callback(f):
                if f.exception():
                    if (time.time() - f.start) > f.maxtime:
                        print("Job for issue {} has exceeded max time, aborting!".format(f.issue))
                        errors.append(f.issue)
                        return None
                    print("Something went wrong downloading issue {}, resubmitting!".format(f.issue))

                    newjob = f.job
                    newissue = f.issue
                    nf = pool.submit(newjob, newissue)
                    runtime = time.time() - f.start
                    nf.maxtime = 10 + f.maxtime - runtime
                    nf.job = newjob
                    nf.issue = newissue
                    nf.start = time.time()
                    nf.callbackdone = False
                    f.callbackdone = True
                    fs.appendleft(nf)
                else:
                    f.callbackdone = True

            for issue in issue_gp:
                job = partial(download_manga, pool, manga_of_choice, basedldir, baseurl)
                f = pool.submit(job, issue)
                f.start = time.time()
                f.maxtime = timeout
                f.job = job
                f.issue = issue
                f.callbackdone = False
                f.add_done_callback(callback)
                fs.append(f)

            while fs:
                job = fs.pop()

                if (time.time() - job.start) > job.maxtime:
                    print("Job for issue {} has exceeded timeout threshold, aborting!".format(job.issue))
                    errors.append(job.issue)
                    continue

                elif job.done() and job.callbackdone is True:
                    print("Done processing issue {} in {:.3f} seconds!".format(job.issue, time.time() - job.start))
                    successes += 1
                    continue
                else:
                    fs.appendleft(job)

    errpath = os.path.join(basedldir, 'errors.txt')
    with open(errpath, 'w') as f:
        f.write('{}\n'.format(manga_of_choice))
        for error in sorted(set(e for e in errors)):
            f.write('{}\n'.format(error))

    print("Download of {} complete, {} downloaded, {} errors.".format(manga_of_choice, successes, len(errors)))
    if len(errors) > 0:
        error_report = open(errpath).read()
        print("Error report: \n{}".format(error_report))


def halfsplit(pred, low=0, hi=1000, maxtries=20):
    cur = low + ((hi - low) / 2)

    if maxtries < 1:
        raise Exception("Unable to find page!")

    if low == hi:
        return low
    r = pred(cur)
    if r == 0:
        return cur

    if r == 1:
        hi = hi - (hi - low) / 2
        return halfsplit(pred, low, hi, maxtries - 1)
    else:
        adj = (hi - low) / 2
        low = low + adj
        return halfsplit(pred, low, hi, maxtries - 1)


def page_find_pred(baseurl, cval):
    r1 = requests.get('{}/{}'.format(baseurl, cval)).status_code
    r2 = requests.get('{}/{}'.format(baseurl, cval + 1)).status_code

    low = True if r1 == 200 else False
    hi = True if r2 == 200 else False

    if not (low or hi):
        return 1

    if low and hi:
        return -1

    if low and not hi:
        return 0


def download_manga(pool, manga, basedldir, baseurl, issue_no):
    dldir = os.path.join(basedldir, str(issue_no))
    try:
        os.mkdir(dldir)
    except OSError:
        pass

    issue_url = '{}{}'.format(baseurl, issue_no)

    imgtype = compose([
        lambda c: BeautifulSoup.BeautifulSoup(c),
        lambda soup: soup.findAll('img')[0]['src'],
        lambda imgurl: re.findall('[.][a-z]{2,5}$', imgurl)[0]
    ], requests.get(issue_url).content)

    compose([
        lambda c: BeautifulSoup.BeautifulSoup(c),
        lambda soup: soup.findAll('img')[0]['src'],
        lambda imgurl: re.findall('[.][a-z]{2,5}$', imgurl)[0]
    ], requests.get(issue_url).content)

    print("Downloading {} types!".format(imgtype))

    def do_download(page_no):
        print('downloading page {}'.format(page_no))

        dlurl = '{}{}/{}'.format(baseurl, issue_no, page_no)

        if page_no == 0:
            dlurl = issue_url

        print('executing download {}'.format(dlurl))
        page = requests.get(dlurl)

        soup = BeautifulSoup.BeautifulSoup(page.content)
        imgurl = soup.findAll('img')[0]['src']

        print('download {}'.format(imgurl))
        imgtype = re.findall('[.][a-z]{2,5}$', imgurl)[-1]

        img = requests.get(imgurl)
        imgpath = '{}/{}{}'.format(dldir, page_no, imgtype)
        print('writing img to {}'.format(imgpath))
        with open(imgpath, 'w') as f:
            f.write(img.content)

    page_search_fn = partial(page_find_pred, issue_url)
    print("Finding highest page of {}".format(issue_url))

    def find_highest_page(page_search_fn, retries=10):
        try:
            highest_page = halfsplit(page_search_fn)
            return highest_page
        except ConnectionError as e:
            if retries > 0:
                return find_highest_page(page_search_fn, retries=retries - 1)
            else:
                raise e

    highest_page = find_highest_page(page_search_fn)
    print('Beginning mass download of {} pages for issue {}!'.format(highest_page, issue_url))

    fs = deque()

    def callback(f):
        if f.exception():
            print("Page {} had an error, resubmitting!".format(f.pg))
            nf = pool.submit(f.job, f.pg)
            nf.job = f.job
            nf.pg = f.pg
            nf.callbackdone = False
            nf.add_done_callback(callback)
            pool.submit(nf)
            fs.append(nf)
            f.callbackdone = True
        else:
            f.callbackdone = True

    for i in range(1, highest_page + 1):
        f = pool.submit(do_download, i)
        f.job = do_download
        f.pg = i
        f.callbackdone = False
        f.add_done_callback(callback)
        fs.append(f)

    while fs:
        f = fs.pop()
        if f.done() and f.callbackdone is True:
            continue
        else:
            fs.appendleft(f)

    # fs = [pool.submit(do_download, i) for i in range(highest_page + 1)]
    # pool.shutdown()
    print("Done downloading!")

    files2pdf(issue_no, imgtype, manga)
    print("all done with {} issue {}!".format(manga, issue_no))


def files2pdf(issue_no, imgtype, manga):
    try:
        url = relative_url('mangas/{}/{}'.format(manga, issue_no))

        subprocess.call('cd {dldir} && rm -rf {n}.pdf && rm -rf *.{imgtype}'.format(
            dldir=url,
            n=issue_no,
            imgtype=imgtype
        ), shell=True)

        if len(filter(lambda x: imgtype in x, os.listdir(url))) > 0:
            cmd = 'cd {dldir} && convert `ls | sort -n | grep {imgtype}` {n}.pdf && rm -rf *{imgtype}'.format(
                **dict(dldir=url, imgtype='.jpg', n=issue_no))
            print("Executing {}".format(cmd))
            subprocess.call(cmd, shell=True)
        else:
            print("No files to convert to pdf!")
    except Exception as e:
        print("Unable to convert files to pdf :(")


if __name__ == '__main__':
    main()
