import argparse
import multiprocessing
import os
import re
import shutil
import subprocess
import time

import naga
from concurrent.futures import ProcessPoolExecutor
from concurrent.futures import as_completed
from naga import compose
from soc.lib.utils import relative_url


def combine_pdfs(anthem, range_):
    # anthem = relative_url('/Downloads/mangas/{}/anthology')
    anthology = os.path.join(anthem, 'anthology.pdf')
    subprocess.call('rm -rf {}'.format(anthology), shell=True)

    def getpdfnums():
        url = anthem
        ds = compose([
            lambda fs: map(lambda f: re.sub('[.]pdf$', '', f), fs),
            lambda fs: map(lambda f: int(f), fs),
            lambda i: sorted(i)
        ], os.listdir(url))

        return ds

    ds = getpdfnums()

    # subprocess.call("cd {anthem} && cp 1.pdf anthology.pdf".format(anthem=anthem), shell=True)
    # print("creating anthology...")
    # print("Adding {}.pdf to anthology...".format(1))
    #
    with ProcessPoolExecutor(multiprocessing.cpu_count()) as pool:
        fs = {pool.submit(make_sub_anthology, anthem, gp, n) for n, gp in enumerate(
            naga.itertools.imap(lambda x: x, naga.windows(range_, ds)))}
        for f in as_completed(fs):
            f.result()

    print("Work complete!")


    # try:
    #     url = relative_url('/Downloads/mangas/{}/anthology'.format(manga))
    #
    #     subprocess.call('cd {dldir} && rm -rf anthology.pdf'.format(
    #         dldir=url,
    #     ), shell=True)
    #
    #     cmd = ('cd {dldir} && convert `ls | '
    #            'sort -n | '
    #            'grep .pdf` anthology.pdf && egrep \'[0-9]+?[.]pdf\' | '
    #            'xargs -I{{}} rm -rf {{}}').format(
    #         **dict(dldir=url))
    #     print("Executing {}".format(cmd))
    #     subprocess.call(cmd, shell=True)
    # except Exception as e:
    #     print("Unable to convert files to pdf :(")


def make_sub_anthology(anthem, gp, n):
    print("Adding {}.pdf - {}.pdf to anthology...".format(min(gp), max(gp)))
    cmd = "cd {anthem} && convert {pdfs} anthology-{n}.pdf".format(
        anthem=anthem,
        pdfs=' '.join(
            map(lambda i: '{}.pdf'.format(i) if i else '', gp)),
        n=n)
    print('Running command {}'.format(cmd))
    t0 = time.time()
    subprocess.call(cmd, shell=True)
    print("Issues added to anthology in {:.3f} seconds!".format(time.time() - t0))


def main():
    parser = argparse.ArgumentParser()

    parser.add_argument('--manga', '-m', action='store', dest='manga')
    parser.add_argument('--range', '-r', action='store', dest='range', default=10)

    args = parser.parse_args()
    manga = str(args.manga)
    mangadir = relative_url('/Downloads/mangas/{}'.format(manga))
    range_ = int(args.range)
    anthem = os.path.join(mangadir, 'anthology')

    try:
        os.mkdir(anthem)
    except OSError:
        print("Anthology directory already exists, I think, skipping")

    for path, ds, fs in os.walk(mangadir):
        for f in fs:
            try:
                if f.endswith('pdf'):
                    shutil.copy(os.path.join(path, f), os.path.join(anthem, f))
            except shutil.Error:
                print("{} already exists, skipping".format(os.path.join(anthem, f)))

    combine_pdfs(anthem, range_)


if __name__ == '__main__':
    main()
