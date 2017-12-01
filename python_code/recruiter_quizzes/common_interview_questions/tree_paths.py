"""Print all paths in trees ( not just root to nodes )"""
from __future__ import print_function

import pprint


def get_in(m, keys):
    if m is None:
        return None

    if len(keys) == 1:
        return m.get(keys[0])
    else:
        return get_in(m.get(keys[0]), keys[1:])


def dmemo(f):
    cache = {}
    def itemize(arg):
        if isinstance(arg, dict):
            return tuple(sorted([(itemize(k), itemize(v)) for k, v in arg.items()]))
        if isinstance(arg, (list, tuple)):
            return tuple(sorted(map(itemize, arg)))
        return arg

    def memo(*args):
        margs = itemize(args)
        if margs in cache:
            return cache[margs]
        else:
            cache[margs] = res = f(*args)
            return res
    return memo

@dmemo
def tpaths(t):
    def tp(f):
        path = f[-1]
        valids = [p + (d,) for d in ['right', 'left'] for p in path if get_in(t, p + (d,))]

        if len(valids) == 0:
            return f

        return tp(f + [valids])

    return ([()] +  # <-- root
            [p for x in tp([[('left',), ('right',)]]) for p in x])


def stab(x, *forms):
    if len(forms) == 0:
        return x
    form = forms[0]
    f = form[0]
    args = (x,) + form[1:]
    return stab(f(*args), *forms[1:])


def assoc(d, k, v):
    _d = d.copy()
    _d[k] = v
    return _d

def path_traverse(t):

    if t is None:
        return None
    if not (t['left'] or t['right']):
        return t

    left = path_traverse(t['left'])
    right = path_traverse(t['right'])
    paths = lambda d, t=t: [] if not t else t['paths'] if 'paths' in t else []
    lpaths = paths(t['left'])
    rpaths = paths(t['right'])
    return stab(t,
                (assoc, 'paths', tpaths(t) + lpaths + rpaths),
                (assoc, 'left', left),
                (assoc, 'right', right))


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
    print(paths)
    pprint.pprint(path_traverse(t))
    # vals = [get_in(t, ks + ('val',)) for ks in paths]

    # for v, path in zip(vals, paths):
    #     print('{:>10}: {}'.format(v, ((lambda val: val if val else 'root')('->'.join(path)))))
