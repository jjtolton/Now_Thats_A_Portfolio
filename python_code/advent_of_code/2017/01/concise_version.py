import itertools
from functools import reduce


def captcha(ints):
    return reduce(lambda x, y: x + (lambda a, b: b if a == b else 0)(*y),
                  itertools.chain(((int(a), int(b)) for a, b in zip(str(ints)[:-1], str(ints)[1:])),
                                  [(int(str(ints)[-1]), int(str(ints)[0]))]), 0)
