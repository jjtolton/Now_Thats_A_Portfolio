__author__ = 'jay'

def fizz(n):
    res = 'Fizz!'
    return res

def buzz(n):
    res = 'Buzz!'
    return res

def return_self(n):
    return n


def get_dictator():
    dispatches = (
        (lambda n: True, return_self),
        (lambda n: n % 3 == 0, fizz),
        (lambda n: n % 5 == 0, buzz),
    )
    return dispatches

def main():

    dictator = get_dictator()
    for i in range(20):
        for meets_condition, behavior in dictator:
            if meets_condition(i):
                print behavior(i),
        print ''

if __name__ == '__main__':
    main()
