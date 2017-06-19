"""Find median in BST."""
from __future__ import print_function


def assoc(d, k, v):
    _d = d.copy()
    _d[k] = v
    return _d


def stab(x, *forms):
    if not forms:
        return x
    form = forms[0]
    f = form[0]
    args = (x,) + form[1:]
    return stab(f(*args), *forms[1:])


def count_nodes(t):
    if t is None:
        return None
    if not (t['left'] or t['right']):
        return stab(t,
                    (assoc, 'count-left', 0),
                    (assoc, 'count-right', 0),
                    (assoc, 'count', 1))

    else:
        count = lambda d, t: 0 if not t else t['count']

        left = count_nodes(t['left'])
        right = count_nodes(t['right'])
        lcount = count('left', left)
        rcount = count('right', right)
        return stab(t,
                    (assoc, 'count-left', lcount),
                    (assoc, 'count-right', rcount),
                    (assoc, 'count', lcount + rcount + 1),
                    (assoc, 'left', left),
                    (assoc, 'right', right))


def traverse_counts(t):
    if t is None:
        return []
    return traverse_counts(t['left']) + traverse_counts(t['right']) + [(t['val'],
                                                                        t['count'],
                                                                        t['count-right'] if 'count-right' in t else 0,
                                                                        t['count-left'] if 'count-left' in t else 0)]


def compose(fns, x):
    return reduce(lambda a, b: b(a), fns, x)


def printer(x):
    return (x, print(x))[0]


def median(t):
    return compose([
        count_nodes,
        traverse_counts,

        # only want values that split the group evenly
        # this assumes valid but not necessarily balanced bst
        lambda counts: filter(
            lambda x: (
                lambda val, _, left, right: (
                    # splits left right branches
                    ((left == (right + 1)) or (left == right)) and
                    # contains all branches
                    ((left + right) == len(counts) - 1)))(*x), counts),
        # in case of tie, take the one with most splits
        lambda cs: sorted(cs, key=lambda x: x[2] + x[3])[-1],

        lambda med_vals: med_vals[0]
    ], t)



def main():
    t = {'left': {'left': {'left': None, 'right': None, 'val': 0},
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

    print(median(t))


if __name__ == '__main__':
    main()
