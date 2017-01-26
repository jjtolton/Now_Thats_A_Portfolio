import unittest

# this function is shaped like a space ship
def compose(*fns):
    def _compose(fn):
        def inner(arg):
            return reduce(lambda x, y: y(x), fns + (fn,), arg)
        return inner
    return _compose

def foo(x):
    return x + 1


def bar(x):
    return x + 2


def baz(x):
    return str(x)


@compose(foo, bar, baz)
def double(x):
    return x + x + '!'

class TestStuff(unittest.TestCase):

    def test_double_doesit(self):
        expected_res = '33!'
        res = double(0)
        self.assertEqual(expected_res, res)

if __name__ == '__main__':
    unittest.main()
