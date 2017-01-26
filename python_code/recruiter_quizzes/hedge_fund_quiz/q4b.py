import pprint
import time

from toolz import assoc, valmap, memoize


def gen_next(sol_tree):
    res = []
    search_space = max(sol_tree.keys()) + 1
    for i in range(search_space / 2, search_space):
        res.extend(reduce(lambda l, x: l + [{search_space - i}|x] if {search_space - i}|x not in l + res else l,
                          filter(lambda y: search_space - i not in y, sol_tree[i]), []))
    res.extend([{search_space}])
    return assoc(sol_tree, search_space, res)

@memoize
def number_sets(n):
    if n == 1:
        return [1]
    else:
        return reduce(lambda l, x: l + [x] if (sorted(x) not in l and len(set(x)) == len(x)) else l,
                      reduce(lambda l, i: l + [(lambda x: sorted([n-i] + (x if isinstance(x, list) else [x])))(ns) for ns in number_sets(i)],
                      range(1, n), [[n]]), [])

def allowed_set(n):
    S = set(range(1, n+1))
    sets = number_sets(sum(range(1, (n + 1)))/2)
    try:
        return filter(lambda x: sum(S - set(x)) == sum(x), sets)
    except TypeError:
        return sets

def flatten(it):
    if not it:
        return []
    if not isinstance(it, (list, tuple)):
        return [it]
    return flatten(it[0]) + flatten(it[1:])

def tree_test():

    sol_tree = {
        1: [{1}],
        2: [{2}]
    }

    for i in range(60):
        sol_tree = gen_next(sol_tree)

    pprint.pprint(valmap(lambda x: len(x), sol_tree))

def main():
    a = []
    for i in range(1, 20):
        t0 = time.time()
        # a = (i, len(number_sets(i)), len(number_sets(i)) - len(number_sets(i - 1)), len(number_sets(i-1)) / float(len(number_sets(i))), time.time() - t0)
        if sum(range(1, i+1)) % 2 == 0:
            a = (i, len(allowed_set(i)))
        else:
            a = (i, None)

        print(a)


if __name__ == '__main__':
    main()