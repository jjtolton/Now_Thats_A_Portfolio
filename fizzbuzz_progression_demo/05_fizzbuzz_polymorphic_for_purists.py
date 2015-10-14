__author__ = 'jay'


class Duck(object):
    def quack(self):
        raise NotImplementedError

    def if_condition(self):
        raise NotImplementedError

def return_self(self, n):
    return n

def fizz(self, n):
    return 'Fizz!'

def buzz(self, n):
    return 'Buzz!'

def isint(self, n):
    return isinstance(n, int)

def divis_by_3(self, n):
    return n % 3 == 0

def divis_by_5(self, n):
    return n % 5 == 0

def main():
    behavior_data = [('n', isint, return_self),
                     ('fizz', divis_by_3, fizz),
                     ('buzz', divis_by_5, buzz)
                     ]
    silly_ducks = [
        type((name[0].upper() + ''.join(name[1:]) + 'Duck'), (Duck,), {'quack': behavior,
                                                                       'if_condition': condition})
        for name, condition, behavior in behavior_data]

    for i in range(20):
        for silly_duck in map(lambda c: c(), silly_ducks):
            if silly_duck.if_condition(i):
                print silly_duck.quack(i),
        print ''


if __name__ == '__main__':
    main()
