"""Determine if a tree is a valid BST with no duplicated values. """
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


def lazy_traverse(t):
    if t is None:
        return []
    else:
        return itertools.chain(lazy_traverse(t['left']), lazy_traverse(t['right']), [t['val']])


def valid(t):
    seen = set()
    for x in lazy_traverse(t):
        if x in seen:
            return False
        seen.add(x)
    return True


def main():
    valid_tree = {'left': {'left': {'left': None, 'right': None, 'val': 0},
                           'right': {'left': None,
                                     'right': {'left': None, 'right': None, 'val': 3},
                                     'val': 2},
                           'val': 1},
                  'right': {'left': {'left': None,
                                     'right': {'left': None, 'right': None, 'val': 6},
                                     'val': 5},
                            'right': {'left': None,
                                      'right': {'left': None, 'right': None, 'val': 9},
                                      'val': 8},
                            'val': 7},
                  'val': 4}

    invalid_tree = {'left': {'left': {'left': None, 'right': None, 'val': 0},
                             'right': {'left': None,
                                       'right': {'left': None, 'right': None, 'val': 3},
                                       'val': 2},
                             'val': 1},
                    'right': {'left': {'left': None,
                                       'right': {'left': None, 'right': None, 'val': 1},
                                       'val': 5},
                              'right': {'left': None,
                                        'right': {'left': None, 'right': None, 'val': 9},
                                        'val': 8},
                              'val': 7},
                    'val': 4}

    validity = {True: 'valid', False: 'invalid'}
    print('valid_tree is {}'.format(validity[valid(valid_tree)]))
    # valid_tree is valid

    print('invalid_tree is {}'.format(validity[valid(invalid_tree)]))
    # invalid_tree is invalid


if __name__ == '__main__':
    main()
