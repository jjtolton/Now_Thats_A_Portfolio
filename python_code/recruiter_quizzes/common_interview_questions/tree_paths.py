"""Print all paths in trees"""
from __future__ import print_function


def get_in(m, keys):
    if m is None:
        return None

    if len(keys) == 1:
        return m.get(keys[0])
    else:
        return get_in(m.get(keys[0]), keys[1:])


def tpaths(t):
    def tp(f):
        path = f[-1]
        valids = [p + (d,) for d in ['right', 'left'] for p in path if get_in(t, p + (d,))]

        if len(valids) == 0:
            return f

        return tp(f + [valids])

    return ([()] +  # <-- root
            [p for x in tp([[('left',), ('right',)]]) for p in x])


if __name__ == '__main__':
    t = {'val': 1,
         'left': {'val': 2,
                  'left': {'val': 4,
                           'left': None,
                           'right': None},
                  'right': {'val': 5,
                            'left': None,
                            'right': None}},
         'right': {'val': 3,
                   'left': None,
                   'right': None}}

    paths = tpaths(t)
    vals = [get_in(t, ks + ('val',)) for ks in paths]

    for v, path in zip(vals, paths):
        print('{:>10}: {}'.format(v, ((lambda val: val if val else 'root')('->'.join(path)))))
