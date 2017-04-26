"""Given a BST, and a node in BST, make that node, as new root of the tree. But still maintain
the tree as BST after making this node as root."""
import pprint


def traverse(t):
    if t is None:
        return []

    return traverse(t['left']) + traverse(t['right']) + [t['val']]


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


def bst(vals, initial=None):
    if len(vals) == 0:
        return None

    nodes = sorted(vals)

    if initial is None:
        avg = sum(nodes) / float(len(nodes))
    else:
        avg = initial

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


def new_root(t, v):
    return bst(traverse(t), v)


if __name__ == '__main__':
    t = bst(range(10))
    # print(lot(t))

    pprint.pprint(t)

    fr = new_root(t, 6)

    pprint.pprint(fr)
