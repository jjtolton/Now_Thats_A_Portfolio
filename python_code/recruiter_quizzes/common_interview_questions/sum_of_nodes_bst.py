"""Find any two elements in BST such that sum of those two nodes = K."""


def bst(t=None, v=None):
    def ts(v, l=None, r=None):
        return {'val': v,
                'left': l,
                'right': r}

    if t is None:
        return ts(v)

    if v == t['val']:
        return ts(t['val'], t['left'], t['right'])

    if v < t['val']:
        return ts(t['val'], bst(t['left'], v), t['right'])

    return ts(t['val'], t['left'], bst(t['right'], v))


class Traverse(object):
    @staticmethod
    def inorder(t):
        def io(t):
            if t is None:
                return []
            return io(t['left']) + [t['val']] + io(t['right'])

        return io(t)


def main():
    t = reduce(lambda t, v: bst(t, v), [None, 5] + range(10))

    fmt = lambda s, v: '{:>30}{}'.format(s, v)

    print(fmt('Inorder Traversal Left: ', Traverse.inorder(t['left'])))
    print(fmt('Inorder Traversal Right: ', Traverse.inorder(t['right'])))

    k = 11

    ans = next(((a, b) for a in Traverse.inorder(t['left']) for b in Traverse.inorder(t['right']) if a + b == k))

    print('{}+{}={}'.format(k, *ans))


if __name__ == '__main__':
    main()
