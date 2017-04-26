"""Find any two elements in BST such that sum of those two nodes = K."""
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
    t = bst(range(10))

    # produces:
    #
    # {'left': {'left': {'left': None, 'right': None, 'val': 0},
    #           'right': {'left': None,
    #                     'right': {'left': None, 'right': None, 'val': 3},
    #                     'val': 2},
    #           'val': 1},
    #  'right': {'left': {'left': None,
    #                     'right': {'left': None, 'right': None, 'val': 6},
    #                     'val': 5},
    #            'right': {'left': None,
    #                      'right': {'left': None, 'right': None, 'val': 9},
    #                      'val': 8},
    #            'val': 7},
    #  'val': 4}
    pprint.pprint(t)

    fmt = lambda s, v: '{:>30}{}'.format(s, v)

    print(fmt('Inorder Traversal Left: ', Traverse.inorder(t['left'])))
    # Inorder Traversal Left: [0, 1, 2, 3]

    print(fmt('Inorder Traversal Right: ', Traverse.inorder(t['right'])))
    # Inorder Traversal Right: [5, 6, 7, 8, 9]

    k = 11

    ans = next(((a, b) for a in Traverse.inorder(t['left']) for b in Traverse.inorder(t['right']) if a + b == k))

    print('{}+{}={}'.format(k, *ans))
    # 11+2=9


if __name__ == '__main__':
    main()
