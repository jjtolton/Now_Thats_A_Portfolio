import math

from naga import inc, dec, take, partition, get


class Coord:
    def __init__(self, i, j, v):
        self.v = v
        self.j = j
        self.i = i

    def __next__(self):
        if self.corner():
            return UpCoord(inc(self.i), self.j, inc(self.v))

    def __repr__(self):
        n = complex(self.i, self.j)
        return f'{n}'

    def __format__(self, format_spec):
        return str((self.i, self.j)).__format__(format_spec)

    def corner(self):
        return abs(self.i) == abs(self.j)


class RightCoord(Coord):
    def __next__(self):
        if not self.corner():
            return RightCoord(inc(self.i), self.j, inc(self.v))
        return UpCoord(inc(self.i), self.j, inc(self.v))


class DownCoord(Coord):
    def __next__(self):
        if not self.corner():
            return DownCoord(self.i, dec(self.j), inc(self.v))
        return RightCoord(inc(self.i), self.j, inc(self.v))


class LeftCoord(Coord):
    def __next__(self):
        if not self.corner():
            return LeftCoord(dec(self.i), self.j, inc(self.v))
        return DownCoord(self.i, dec(self.j), inc(self.v))


class UpCoord(Coord):
    def __next__(self):
        if abs(self.i) != abs(self.j):
            return UpCoord(self.i, inc(self.j), inc(self.v))
        else:
            return LeftCoord(dec(self.i), self.j, inc(self.v))


class Grid:
    def __init__(self):
        self.c = Coord(0, 0, 1)

    def __iter__(self):
        c = self.c
        while True:
            yield c
            c = next(c)

    @staticmethod
    def get(self, v, not_found=None):
        if isinstance(v, int):
            for c in self:
                if c.v == v:
                    return c
        if isinstance(v, (list, tuple)):
            i, j = v
            for c in self:
                if i == c.i and j == c.j:
                    return c


class shortest_path:
    def __init__(self, v):
        self.dirs = [0, 1, -1]
        self.deltas = [[1, 0], [0, 1], [-1, 0], [0, -1]]
        self.frontier = [(1, (0, 0))]
        self.seen = set()
        self._res = self(v)

    def successors(self, p):
        x, (i, j) = p
        res = [(inc(x), (i + di, j + dj)) for di, dj in self.deltas if (i + di, j + dj) not in self.seen]
        for di, dj in self.deltas:
            self.seen.add((i + di, j + dj))
        return res

    def __call__(self, v):

        res = []

        end = get(Grid(), v)

        def goal(lp):
            x, (i, j) = lp
            if (i, j) == (end.i, end.j):
                return True
            return False

        if v == 1:
            return [(1, (0, 0))]

        while self.frontier:
            self.frontier.sort(key=lambda x: x[0], reverse=True)

            p = self.frontier.pop()
            for np in self.successors(p):
                if goal(np):
                    res.append(np)
                else:
                    self.frontier.append(np)
            if res:
                return sorted(res, key=len)

    def __repr__(self):
        return f'{self._res}'

    def res(self):

        return min(self._res, key=lambda x: x[0])[0] - 1


def res(x):
    return x.res()


def tests():
    """Data from square 1 is carried 0 steps, since it's at the access port.
    Data from square 12 is carried 3 steps, such as: down, left, left.
    Data from square 23 is carried only 2 steps: up twice.
    Data from square 1024 must be carried 31 steps.
"""
    assert res(shortest_path(1)) == 0
    assert res(shortest_path(12)) == 3
    assert res(shortest_path(23)) == 2
    assert res(shortest_path(1024)) == 31


if __name__ == '__main__':
    tests()


#############
# debugging #
#############


def value2grid(v):
    return list(take(v, Grid()))


def closest_square(n):
    g = value2grid(n)
    if math.sqrt(len(g)) % 2:
        return closest_square(inc(n))
    return g


def sort_grid(g):
    g = sorted(g, key=lambda c: c.j)
    g = sorted(g, key=lambda c: c.i, reverse=True)
    return g


def pgrid(g):
    g = closest_square(len(g))
    vals = list(partition(int(math.sqrt(len(g))), sort_grid(g)))
    fvals = '\n'.join(''.join([f'{c:>10}' for c in r]) for r in vals)
    return fvals
