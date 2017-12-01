"""Convert a binary tree to BST"""
import pprint
from functools import reduce


def xconj(t=None, v=None):
    def ts(v, l=None, r=None):
        return {'val': v,
                'left': l,
                'right': r}

    if t is None:
        return ts(v)

    if v == t['val']:
        return ts(t['val'], t['left'], t['right'])

    if v < t['val']:
        return ts(t['val'], xconj(t['left'], v), t['right'])

    return ts(t['val'], t['left'], xconj(t['right'], v))


class Traverse(object):
    @staticmethod
    def inorder(t):
        def io(t):
            if t is None:
                return []
            return io(t['left']) + [t['val']] + io(t['right'])

        return io(t)


def bst(vals):
    if len(vals) == 0:
        return None

    nodes = sorted(vals)
    avg = sum(nodes) / float(len(nodes))
    meanidx = min(range(len(nodes)), key=lambda i: abs(nodes[i] - avg))

    mnode = nodes[meanidx]
    left = nodes[:meanidx]
    right = nodes[meanidx + 1:]

    if len(vals) < 3:
        return reduce(lambda t, v: xconj(t, v), [None, mnode] + left + right)

    else:
        return {'val': mnode,
                'left': bst(left),
                'right': bst(right)}


def right(x):
    return x.right()


def left(x):
    return x.left()


def val(x):
    return x.val()


def parent(x):
    return x.parent()


class Node:
    __slots__ = ['_left', '_right', '_root', '_val']

    def __init__(self, left=None, right=None, parent=None, val=None):
        self._val = val
        self._root = parent
        self._right = right
        self._left = left

    def right(self):
        return self._right

    def left(self):
        return self._left

    def root(self):
        return self._root

    def val(self):
        return self._val


def main():
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

    nodes = Traverse.inorder(t)
    tout = bst(nodes)
    print(nodes)
    pprint.pprint(tout)

    # === output ===
    # {'left': {'left': None,
    #           'right': {'left': None, 'right': None, 'val': 2},
    #           'val': 1},
    #  'right': {'left': None,
    #            'right': {'left': None, 'right': None, 'val': 5},
    #            'val': 4},
    #  'val': 3}


if __name__ == '__main__':
    main()
