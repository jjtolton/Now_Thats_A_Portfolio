from collections import defaultdict, OrderedDict

__author__ = 'jay'

def fizz(n):
    res = 'Fizz!'
    return res

def buzz(n):
    res = 'Buzz!'
    return res

def return_self(n):
    return n


def get_dispatches():
    dispatches = (
        (lambda n: True, return_self),
        (lambda n: n % 3 == 0, fizz),
        (lambda n: n % 5 == 0, buzz),
    )
    return dispatches

def main():

    dispatches = get_dispatches()
    for i in range(20):
        for meets_condition, behavior in dispatches:
            if meets_condition(i):
                print behavior(i),
        print ''

if __name__ == '__main__':
    main()
