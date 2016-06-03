import itertools


def update(fn):
    def explode(args):
        return fn(*args)

    return explode


def merge(*ds):
    return {k: v for k, v in itertools.chain(*itertools.imap(lambda d: d.items(), ds))}


def assoc(d, k, v):
    return merge(d, {k: v})


def dissoc(d, *ks):
    return keyfilter(lambda x: x not in ks, d)


def merge_with(fn, *dicts):
    return reduce(lambda d, x: update(lambda k, v:
                                      assoc(d, k, fn(d[k], v)) if k in d else
                                      assoc(d, k, v))(x),
                  itertools.chain(*itertools.imap(lambda _d: _d.items(), dicts)), {})


def merge_with_default(fn, default=None, *dicts):
    return merge_with(fn, {k: (default if default is not None else v) for k, v in
                           itertools.chain(*itertools.imap(lambda d: d.items(), dicts))}, *dicts)


def assoc_in(d, val, k, *ks):
    return merge_with(lambda a, b: merge(a, b), d, reduce(lambda x, y: {y: x}, ([k] + list(ks) + [val])[::-1]))


def are_instances(items, types):
    return all(map(lambda x: isinstance(x, types), items))


def are_dicts(*ds):
    return are_instances(ds, dict)


def supassoc_in(d, val, k, *ks):
    return merge_with(lambda x, y: merge(x, y) if are_dicts(x.values() + y.values()) else x.values() + y.values(), d, reduce(lambda x, y: {y: x}, ([k] + list(ks) + [val])[::-1]))

def keyfilter(fn, d):
    return {k: v for k, v in d.iteritems() if fn(k)}


def valfilter(fn, d):
    return {k: v for k, v in d.iteritems() if fn(v)}


def itemfilter(fn, d):
    return {k: v for k, v in d.iteritems() if fn(k, v)}


def valmap(fn, d):
    return {k: fn(v) for k, v in d.iteritems()}


def keymap(fn, d):
    return {fn(k): v for k, v in d.iteritems()}


def itemmap(fn, d):
    return dict(fn(k, v) for k, v in d.iteritems())


def main():
    A, B = 'a', 'b'
    a = {A: 1, B: 2}
    b = {A: 1}
    c = {A: 2}

    print(merge_with_default(lambda x, y: x + [y], [], a, b, c))
    print(merge_with_default(lambda x, y: x + y, 0, a, b, c))
    print(itemmap(lambda x, y: (y, x), merge_with_default(lambda x, y: x + y, 0, a, b, c)))
    print(dissoc(a, A))
    print(a)

    # {3: {2: 1}}
    # {3: {A: B}}
    # {3: {2: 1. A: B}}

    print(assoc_in({3: {2: 1}}, 'B', 3, 'A'))
    print(supassoc_in({4: {3: 5}}, 'A', 4, 3, 3, 1))

if __name__ == '__main__':
    main()
