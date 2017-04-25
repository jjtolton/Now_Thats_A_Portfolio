"""Given a BST, delete a node in BST. """
import pprint


def delnode(t, v):
    if t is None:
        return None

    if t['val'] == v:
        if t['right'] is not None:
            return {'val': t['right']['val'],
                    'right': delnode(t['right'], t['right']['val']),
                    'left': t['left']}
        elif t['left'] is not None:
            return {'val': t['left']['val'],
                    'right': t['right'],
                    'left': delnode(t['left'], t['left']['val'])}
        else:
            return None

    if v < t['val']:
        return {'val': t['val'],
                'left': delnode(t['left'], v),
                'right': t['right']}

    return {'val': t['val'],
            'left': t['left'],
            'right': delnode(t['right'], v)}


def main():
    t = {'left': {'left': {'left': None, 'right': None, 'val': 1},
                  'right': None,
                  'val': 2},
         'right': {'left': None,
                   'right': {'left': None, 'right': None, 'val': 5},
                   'val': 4},
         'val': 3}

    pprint.pprint(delnode(t, 3))


if __name__ == '__main__':
    main()
