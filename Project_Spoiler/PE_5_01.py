# -*- coding: utf-8 -*-
"""
Created on Wed Jan 07 21:30:47 2015

@author: J
"""

from numpy import array, argmax, vectorize
from MyDevTools.MyMathTools import get_factors, prime_cut
from MyDevTools.MyDebug import timeIt


@timeIt
def main():
    test()
    accum = []
    for i in range(1,21):
        print i, prime_cut(i)
        accum.append(prime_cut(i))

    nums = {}    
    res = []    
    for lst in accum:
        for item in lst:
            try:
                nums[item]
                if lst.count(item) > nums[item]:
                    nums[item] = lst.count(item)
            except:
                nums[item] = lst.count(item)
    for k,v in nums.items():
        res += [k**v]
    print res
    print reduce(lambda x,y: x*y, res)
    

def find_divisible(divisors):
    divisors = eliminate_redundant(divisors)
    interval = max(divisors)
    def get_max_possible(div): return reduce(lambda x,y: x*y, div)
    max_possible = get_max_possible(divisors)    
#    start, stop = 3, 6  #to prevent infinite loop
#    test = vectorize(lambda x: divisible(divisors))
    test = vectorize(lambda x: is_divisible(x,divisors))
#    for i in range(start, stop):
#        test_arr = array(xrange(10,10**i,interval))
#        res = test(test_arr)
#        if res.any():
#            return test_arr[res]
    
    limit = 10**6 if max_possible > 10**6 else max_possible
    for i in range(200):
        test_arr = array(
                         xrange(
                                interval+1000*i, 
                                interval+1000*(i+1), 
                                interval
            )
        )
        res = test(test_arr)
        if res.any():
            return test_arr[res]
#        print interval+1000*i, interval+1000*(i+1)
    return None

def divisible(divisors):
    div_all = vectorize(lambda x: argmax(x % array(divisors)))
    is_0 = vectorize(lambda x: x == 0)
    return lambda x: is_0(div_all(x)).any()

def is_divisible(x, divisors):
    v = divides_evenly = vectorize(lambda y: x % y != 0)
    res = v(array(divisors))
#    print res, array(divisors)
    return not v(array(divisors)).any()
    
#def is_divisible(x, divisors):
#    div_all =  vectorize(lambda x: argmax(x % array(divisors)))
#    is_0 = vectorize(lambda x: x == 0)
#    return div_all(x)[is_0].any()
    
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
#    pass
    assert is_divisible(2520, xrange(1,11))
#    assert is_divisible((xrange(0,20,2)), 2)
#    assert is_divisible((xrange(0,1000,3)), 3)
#    def _is_divisible(dividends, *divisors):    
#        return True if not argmax(dividends % array(divisors)) else False

if __name__ == '__main__':
    main()
    