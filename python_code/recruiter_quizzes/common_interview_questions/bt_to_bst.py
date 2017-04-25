"""Convert a binary tree to BST"""
import pprint


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
    avg = sum(nodes) / float(len(nodes))
    mean = min(range(len(nodes)), key=lambda i: abs(nodes[i] - avg))

    print("Converting from: \n{}\n".format(pprint.pformat(t)))

    print("Converting to: \n{}\n".format(pprint.pformat(reduce(lambda t, v: bst(t, v), [None] + nodes[mean:] + nodes[:mean]))))


if __name__ == '__main__':
    main()
