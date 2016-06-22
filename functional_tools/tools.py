import itertools


def rreduce(fn, seq, default=None):
    """'readable reduce' - More readable version of reduce with arrity-based dispatch; passes keyword arguments
    to functools.reduce"""
    if default is None:
        return reduce(fn, seq)
    return reduce(fn, seq, default)


def unpack(fn):
    def explode(args):
        return fn(*args)

    return explode


def explode(*ds):
    return itertools.chain(*itertools.imap(lambda d: d.items(), ds))


def merge(*ds):
    return dict(rreduce(fn=lambda l, _: unpack(lambda k, v: l + [(k, v)])(_),
                        seq=explode(*ds),
                        default=[]))


def assoc(d, k, v):
    return merge(d, {k: v})


def dissoc(d, *ks):
    return keyfilter(lambda x: x not in ks, d)


def merge_with(fn, *ds):
    return rreduce(fn=lambda d, x: unpack(lambda k, v:
                                          assoc(d, k, fn(d[k], v)) if k in d else
                                          assoc(d, k, v))(x),
                   seq=explode(*ds),
                   default={})


def merge_with_default(fn, default=None, *dicts):
    _fn, _default = fn, default
    return merge_with(_fn, rreduce(fn=lambda d, _: unpack(lambda k: assoc(d, k, _default)),
                                   seq=itertools.chain(*itertools.imap(lambda d: d.items(), dicts)),
                                   default={}),
                      *dicts)


def assoc_in(d, val, k, *ks):
    d1 = keys2dict(val, k, ks)
    return recursive_dict_merge(d, d1)


def terminal_dict(*ds):
    return are_dicts(ds) and all(map(lambda x: are_dicts(x.values()), ds))


def terminal_dicts(*ds):
    return all(map(terminal_dict, ds))


def recursive_dict_merge(*ds):
    return merge_with(lambda a, b: recursive_dict_merge(a, b) if not terminal_dicts(a, b) else merge(a, b), *ds)


def keys2dict(val, k, ks):
    v_in = reduce(lambda x, y: {y: x}, ([k] + list(ks) + [val])[::-1])
    return v_in


def are_instances(items, types):
    return all(map(lambda x: isinstance(x, types), items))


def are_dicts(*ds):
    return are_instances(ds, dict)


def supassoc_in(d, val, k, *ks):
    return merge_with(lambda x, y: merge(x, y) if are_dicts(x.values() + y.values()) else x.values() + y.values(), d,
                      reduce(lambda x, y: {y: x}, ([k] + list(ks) + [val])[::-1]))


def keyfilter(fn, d):
    return reduce(lambda d, _: unpack(lambda k, v: assoc(d, k, v) if fn(k) else d), d.iteritems(), {})


def valfilter(fn, d):
    return reduce(lambda d, _: unpack(lambda k, v: assoc(d, k, v) if fn(v) else d), d.iteritems(), {})


def itemfilter(fn, d):
    return reduce(lambda d, _: unpack(lambda k, v: assoc(d, k, v) if fn(k, v) else d), d.iteritems(), {})


def valmap(fn, d):
    return rreduce(fn=lambda d, _: unpack(lambda k, v: assoc(d, k, fn(v)))(_),
                   seq=d.iteritems(),
                   default={})


def keymap(fn, d):
    return rreduce(fn=lambda d, _: unpack(lambda k, v: assoc(d, fn(k), v))(_),
                   seq=d.iteritems(),
                   default={})


def itemmap(fn, d):
    return rreduce(fn=lambda d, _: unpack(lambda k, v: assoc(d, *fn(k, v)))(_),
                   seq=d.iteritems(),
                   default={})


def main():
    A, B = 'a', 'b'
    a = {A: 1, B: 2}
    b = {A: 1}
    c = {A: 2}

    # print(merge_with_default(lambda x, y: x + [y], [], a, b, c))
    # print(merge_with_default(lambda x, y: x + y, 0, a, b, c))
    # print(itemmap(lambda x, y: (y, x), merge_with_default(lambda x, y: x + y, 0, a, b, c)))
    # print(dissoc(a, A))
    # print(a)

    # {3: {2: 1}}
    # {3: {A: B}}
    # {3: {2: 1. A: B}}

    print(assoc_in({3: {2: 1, 4: 5}}, 'B', 3, 'A', 5, 10))
    print(assoc_in({4: {5: {6: 7}}}, {3: 'X'}, 4, 5))

    # print(merge_with_default(lambda a, b: merge(a, b) if isinstance(b, dict) else assoc(a, b, a[b]),
    #                          {}, {4: {5: {6: 7}}}, {4: {5: {3: 2}}}))
    # print(supassoc_in({4: {3: 5}}, 'A', 4, 3, 3, 1))
    print(assoc_in(a, 5, 4, 3))


if __name__ == '__main__':
    main()
