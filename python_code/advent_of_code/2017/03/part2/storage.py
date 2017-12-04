from naga import inc, dec, get


class Coord:
    deltas = [(0, 1), (1, 0), (1, 1), (0, -1), (-1, 0), (-1, -1), (1, -1), (-1, 1)]

    def __init__(self, i, j, v):
        self.j = j
        self.i = i

        self.v = self.update_score()

    def __next__(self):
        if self.corner():
            return UpCoord(inc(self.i), self.j, inc(self.v))

    def score(self):

        if (self.i, self.j) in Grid.cells:
            return Grid.cells[(self.i, self.j)]

        if (self.i, self.j) == (0, 0):
            return 1

        s = 0

        for di, dj in Coord.deltas:
            if (self.i + di, self.j + dj) in Grid.cells:
                s += Grid.cells[(self.i + di, self.j + dj)]
        return s

    def update_score(self):
        score = self.score()
        Grid.cells[(self.i, self.j)] = score
        return score

    def __repr__(self):
        return f'{(self.i, self.j, self.v)}'

    def __format__(self, format_spec):
        return str((self.i, self.j, self.v)).__format__(format_spec)

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
    cells = {}
    added = set()

    def __init__(self):
        self.c = Coord(0, 0, 1)

    def __iter__(self):
        c = self.c
        while True:
            yield c
            cell = (c.i, c.j)
            Grid.cells[cell] = c.v
            c = next(c)

    @staticmethod
    def get(self, v, not_found=None):
        if isinstance(v, int):
            for c in self:
                if c.v >= v:
                    return c
        if isinstance(v, (list, tuple)):
            i, j = v
            for c in self:
                if i == c.i and j == c.j:
                    return c

def tests():
    assert get(Grid(), [0, 0]).v == 1
    assert get(Grid(), [1, 0]).v == 1
    assert get(Grid(), [1, 1]).v == 2
    assert get(Grid(), [0, 1]).v == 4
    assert get(Grid(), [-1, 0]).v == 10
    assert get(Grid(), [-1, -1]).v == 11
    assert get(Grid(), [0, -1]).v == 23
    assert get(Grid(), [1, -1]).v == 25
    assert get(Grid(), [2, -1]).v == 26


def main():
    print(get(Grid(), 312051))


if __name__ == '__main__':
    tests()
    main()
