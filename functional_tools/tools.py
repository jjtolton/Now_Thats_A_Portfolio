import itertools


def unpack(fn):
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
    return reduce(lambda d, x: unpack(lambda k, v:
                                      assoc(d, k, fn(d[k], v)) if k in d else
                                      assoc(d, k, v))(x),
                  itertools.chain(*itertools.imap(lambda _d: _d.items(), dicts)), {})


def merge_with_default(fn, default=None, *dicts):
    return merge_with(fn, {k: (default if default is not None else v) for k, v in
                           itertools.chain(*itertools.imap(lambda d: d.items(), dicts))}, *dicts)



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

    # print(merge_with_default(lambda x, y: x + [y], [], a, b, c))
    # print(merge_with_default(lambda x, y: x + y, 0, a, b, c))
    # print(itemmap(lambda x, y: (y, x), merge_with_default(lambda x, y: x + y, 0, a, b, c)))
    # print(dissoc(a, A))
    # print(a)

    # {3: {2: 1}}
    # {3: {A: B}}
    # {3: {2: 1. A: B}}

    print(assoc_in({3: {2: 1, 4: 5}}, 'B', 3, 'A', 5, 10))
    print(assoc_in({4: {5: {6: 7}}}, {3:'X'}, 4, 5))

    # print(merge_with_default(lambda a, b: merge(a, b) if isinstance(b, dict) else assoc(a, b, a[b]),
    #                          {}, {4: {5: {6: 7}}}, {4: {5: {3: 2}}}))
    # print(supassoc_in({4: {3: 5}}, 'A', 4, 3, 3, 1))
    print(assoc_in(a, 5, 4, 3))

if __name__ == '__main__':
    main()
