"""Convert a binary tree to BST"""
import pprint


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
