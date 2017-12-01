from naga import mapv


def count():
    c = 0
    while True:
        yield c
        c += 1


def enumerate_bitstrings(n):
    c = count()
    for i in range(2 ** n):
        yield next(c)


def rule1(z, x, y):
    """Satisfies (S1 | S2 == S)"""
    return x | y == z


def rule2(x, y):
    """Satisfies (S1 & S2 == set())"""
    # TODO:  Unnecessary with 2s complement technique later,
    # left in for demo purposes
    return x & y == 0


def rule3(n, x, y):
    """Satisfies (sum(s1) == sum(s2))

    About sumbits:

    Sumbits takes the subset represent by the bitstring and converts it
    back into the set literal.  There are other ways to do this but this
    seemed expedient.

    => means therefore in this case (my notation)

    so if S = {1, 2, 3} and S1 = {1,2} => 0b110 => [1, 1, 0] => [1, 2, 0]
    => sum([1, 2, 0]) == 3"""

    npadding = lambda b: padding(n, b)
    sumbits = lambda b: sum(
        map(unpack(lambda val, truth: val if truth else 0),
            enumerate(npadding(b) + map(int, bitlist(b)), start=1))
    )

    return sumbits(x) == sumbits(y)


def padding(n, b):
    return [0] * (n - len(bitlist(b)))


def unpack(fn):
    def inner(args):
        return fn(*args)

    return inner


def rule(z, x, y, n):
    rules = [
        lambda x, y: rule1(z, x, y),
        rule2,
        lambda x, y: rule3(n, x, y)
    ]
    res = map(lambda r: r(x, y), rules)
    return all(res)


def itercomplements(bitstrings, n):
    for i in range((2 ** n - 1) // 2):
        bs = next(bitstrings)
        yield bs, (2 ** n) - 1 - bs


def bitlist(b):
    return bin(b)[2:]


def bitlist_representation(bl, n):
    """Purely for rendering purposes"""
    return filter(lambda x: x, mapv(unpack(lambda val, truth: val if truth else None),
                                   enumerate(padding(n, bl) + mapv(int, bitlist(bl)), start=1)))


def main():
    n = 11
    items = lambda n: itercomplements(enumerate_bitstrings(n), n)
    house_rule = lambda i: rule(2 ** n - 1, i[0], i[1], n)

    for item in items(n):
        if house_rule(item):
            print(map(lambda x: set(bitlist_representation(x, n)), item))


def test():
    n = 20
    items = lambda b: itercomplements(enumerate_bitstrings(n), n)
    for item in items(n):
        print(mapv(lambda x: set(bitlist_representation(x, n)), item))


if __name__ == '__main__':
    test()
