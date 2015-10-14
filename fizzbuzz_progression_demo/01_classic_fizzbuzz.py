__author__ = 'jay'


def fizzbuzz(n):
    if n % 3 == 0 and n % 5 == 0:
        print 'Fizz! Buzz!'
    elif n % 5 == 0:
        print 'Buzz!'
    elif n % 3 == 0:
        print 'Fizz!'
    else:
        print n

def main():
    for i in range(20):
        fizzbuzz(i)


if __name__ == '__main__':
    main()
