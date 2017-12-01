def empty(x):
    return len(x) == 0


def flatten(xs):
    return [a for b in xs for a in b]


def remove(s, e):
    return [x for x in s if x != e]


def cons(a, b):
    return [a] + b


def permutations(s):
    if empty(s):
        return [[]]
    return flatten(map(lambda a: map(lambda b: cons(a, b), permutations(remove(s, a))), s))


if __name__ == '__main__':
    print(permutations(set('abc')))
