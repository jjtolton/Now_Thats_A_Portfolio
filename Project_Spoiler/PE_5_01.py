# -*- coding: utf-8 -*-
"""
Created on Wed Jan 07 21:30:47 2015

@author: J
"""

from numpy import array, argmax, vectorize
from MyDevTools.MyMathTools import get_factors

def main():
#    test()
#    assert numpy.any(find_divisible(xrange(11)))
#    print find_divisible(xrange(1,11))
#    print set(get_factors(20))
    print eliminate_redundant(xrange(1,21))
    

def find_divisible(divisors):
    start, stop = 5, 7  #to prevent infinite loop
    test = vectorize(lambda x: is_divisible(x,divisors))
    for i in range(start, stop):
        test_arr = array(xrange(10**i))
        res = test_arr[test(test_arr)]
        if res.any():
            return res
    return None

def divisible(divisors):
    div_all = vectorize(lambda x: argmax(x % array(divisors)))
    is_0 = vectorize(lambda x: x == 0)
    return lambda x: is_0(div_all(x)).any()
    
def eliminate_redundant(nums):
    largest_factor = max(nums)
    factors = sorted(nums)
    nonredundant = []
    get_set = lambda x: set(get_factors(x))
    def subset(x,y): 
        return get_set(x).issubset(get_set(y))        
    res = []
    while factors:
        test = factors.pop()
        res += [test]
        good_2_go = [factor for factor in factors if not subset(factor,test)]
        factors = good_2_go        
    return res


def test():
    pass
#    assert is_divisible(2520, xrange(10))
#    assert is_divisible((xrange(0,20,2)), 2)
#    assert is_divisible((xrange(0,1000,3)), 3)
#    def _is_divisible(dividends, *divisors):    
#        return True if not argmax(dividends % array(divisors)) else False

if __name__ == '__main__':
    main()
    