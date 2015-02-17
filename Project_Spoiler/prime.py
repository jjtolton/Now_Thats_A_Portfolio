from __builtin__ import enumerate
from scipy.cluster.hierarchy import num_obs_linkage

__author__ = 'Atom Mk. IX2'

import time
import sys

sys.path.append("C:\\Users\\Atom Mk. IX2\\Desktop\\Python Programs")

"""
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
"""

def largestPrimeOf(n):
    """
    Takes an integer and returns the largest prime factor of that number
    """

    n_L = n
    nFacs = primeFactorsOf(n_L)
    return nFacs[-1]


def isPrime(num):
    num_L = num
    if num_L == 2:
        return True
    if num_L == 3:
        return True
    if num_L == 5:
        return True
    if num_L % 3 == 0:
        return False
    if num_L % 5 == 0:
        return False
    if num_L % 2 == 0:
        return False
    # if num_L <= pow(65000, .5):
    #     pass
    #
    # if num_L > (pow(65000, .5)):
    #
    #     x = [x for x in lowPrimeGen if num_L % x == 0]
    #     if x != [1]:
    #         return True

    x = [x for x in range(1, (int(pow(num, .5)+1)),2) if num_L % x == 0]
    # print x


    if x == [1]:
        return True

    else:
        return False

    assert isPrime(2) == True
    assert isPrime(3) == True
    assert isPrime(5) == True
    assert isPrime(8) == False



# def betterIsPrime(num):
#     lowPrimeGen = (x for x in xrange(65000) if isPrime(x))
#     num_L = num
#     if num_L == 2:
#         return True
#     if num_L == 3:
#         return True
#     if num_L == 5:
#         return True
#     if num_L % 3 == 0:
#         return False
#     if num_L % 5 == 0:
#         return False
#     if num_L % 2 == 0:
#         return False
#     for _ in lowPrimeGen:
#         if num_L % _ == 0:
#             return False
#
#     primeListCheckGen = (x for x in range(int(pow(65000, .5)), int(pow(num, .5)),2))
#
#     genComparator = ((primeGuess, actualPrime) for primeGuess in primeListCheckGen for actualPrime in lowPrimeGen)
#
#     #
#     #
#     #
#     #
#     # if x == []:
#     #     return True
#     #
#     # else:
#     #     return False
#
#     return genComparator
# def primeFactorsOf(num):
#     """
#     Takes integer input and returns a list of the prime factors from least to greatest
#     """
#     num_L = num
#     primeDic = dict()
#     primeGen = (prime for prime in xrange(int(pow(num_L, .5))) if betterIsPrime(prime))

def primeGen():
    x = 3
    # yield 1
    yield 2
    while True:
        if isPrime(x):
            yield x
        x += 2

def findLargestPrimeFactor(num):
    num_L = num
    sqrtNum_L = pow(num_L,0.5)
    g = primeGen()

    while True:
        x = next(g)
        if num_L % x == 0:
            yield x
        if x >= sqrtNum_L:
            break




def main():
    # print largestPrimeOf(num)
    p = findLargestPrimeFactor(600851475143)
    print [x for x in p][-1]


if __name__=="__main__":
    main()