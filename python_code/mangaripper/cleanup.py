import argparse
import os
import subprocess

from rip import relative_url


def main():

    parser = argparse.ArgumentParser()
    parser.add_argument('--manga', '-m', action='store', dest='manga')
    args = parser.parse_args()
    manga = str(args.manga)
    path = relative_url('/Downloads/mangas/{}'.format(manga))
    anthem = os.path.join(path, 'anthology')

    print("Cleaning up individual issues...")
    subprocess.call('cd {path} && ls | egrep \'^[0-9]+\' | xargs -I{{}} rm -rf {{}}'.format(path=path),
                    shell=True)

    print("Cleaning up anthology files issues...")
    subprocess.call('cd {path} && ls | egrep \'^[0-9]+\' | xargs -I{{}} rm -rf {{}}'.format(path=anthem),
                    shell=True)

    print("All clean!")

if __name__ == '__main__':
    main()

