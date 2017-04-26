"""Find the inorder successor of BST in O(logN)"""
import itertools


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


def iotraverse(t):
    if t is None:
        return []
    else:
        return itertools.chain(iotraverse(t['left']), iotraverse(t['right']), [t['val']])


def successor(t, v):
    if v < t['val']:
        return successor(t['left'], v)

    if v > t['val']:
        return successor(t['right'], v)

    else:
        return next(iotraverse(t))


def main():
    t = bst(range(10))

    print(successor(t, 2))


if __name__ == '__main__':
    main()
