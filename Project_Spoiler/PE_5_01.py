# -*- coding: utf-8 -*-
"""
Created on Wed Jan 07 21:30:47 2015

@author: J
"""

from numpy import array, argmax, vectorize, amax
from MyDevTools.MyDebug import timeIt
from MyDevTools.MyMathTools import get_factors

@timeIt
def main():
    test()
#    print find_divisible(xrange(1,20,4))
#    vals = xrange(11,21)
#    print find_divisible(vals)    
#    assert is_divisible(19, xrange(11,15))
    
def test():
    assert is_divisible(2520,xrange(1,11))
    assert sorted(list(get_factors(20))),[1,2,4,5,10,20]

def find_divisible(divisors):
    start, stop = 2, 7  #to prevent infinite loop
#    test = vectorize(divisible(divisors))
    test = vectorize(lambda x: is_divisible(x, divisors))
    for i in range(start, stop):
        test_arr = array(xrange(10**i))
        res = test_arr[test(test_arr)]
        if res.any():
            return res
    return None


def eliminate_redundant_common_factors(nums):
    """
    Eliminating redundancies:
    
    We know that 6 is a common multiple of 2,3 so anything that is common
    to 6 is common to 2,3
    
    likewise anything that is common to 8 is also common to 2,4
    
    Therefore as we go through the list we can recursively eliminate any numbers
    already on the list
    """
    largest = max(x)
    
    
    

def divisible(divisors):
    div_all = vectorize(lambda x: amax(x % array(divisors)))
    is_0 = vectorize(lambda x: x == 0)
    return lambda x: is_0(div_all(x)).any()
    
def is_divisible(num, nums):
    return not amax(num % array(nums))
    

def test():
    pass
#    assert is_divisible(2520, xrange(10))
#    assert is_divisible((xrange(0,20,2)), 2)
#    assert is_divisible((xrange(0,1000,3)), 3)
#    def _is_divisible(dividends, *divisors):    
#        return True if not argmax(dividends % array(divisors)) else False

if __name__ == '__main__':
    main()
    