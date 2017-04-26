# coding=utf-8
"""Find least common ancestor in tree for given nodes ‘a’ and ‘b’."""

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


def dmemo(f):
    cache = {}
    count = [0]

    def itemize(a):
        if isinstance(a, dict):
            return tuple([(k, itemize(v)) for k, v in a.items()])
        if isinstance(a, (list, tuple)):
            return tuple(map(itemize, a))
        return a

    def memo(*args, **kwargs):
        margs, mkwargs = itemize(args), itemize(kwargs)
        if (margs, mkwargs) in cache:
            return cache[(margs, mkwargs)]
        else:
            cache[(margs, mkwargs)] = res = f(*args, **kwargs)
            return res

    return memo

@dmemo
def has_child(t, a):
    if t is None:
        return False
    if t['val'] == a:
        return True
    if has_child(t['left'], a):
        return True
    if has_child(t['right'], a):
        return True
    return False




def lca(t, a, b):



    if has_child(t['left'], a) and has_child(t['left'], b):
        return lca(t['left'], a, b)

    if has_child(t['right'], a) and has_child(t['right'], b):
        return lca(t['right'], a, b)

    return t['val']


if __name__ == '__main__':
    print(lca(t, 4, 5))


