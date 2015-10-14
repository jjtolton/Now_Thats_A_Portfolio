__author__ = 'jay'


def fizzbuzz(n):

    divisible_by_5 = n % 5 == 0
    divisible_by_3 = n % 3 == 0
    res = []

    fizz = 'Fizz!'
    buzz = 'Buzz!'

    res.append(n)

    if divisible_by_3:
        res.append(fizz)
    if divisible_by_5:
        res.append(buzz)

    res = ' '.join(res)
    return res

def main():
    for i in range(20):
        print fizzbuzz(i)
