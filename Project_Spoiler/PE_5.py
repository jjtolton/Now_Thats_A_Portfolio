# -*- coding: utf-8 -*-
"""
Created on Tue Jan 06 17:26:01 2015

@author: J

:Project Euler
    :Smallest multiple
    Problem 5
    ::2520 is the smallest number that can be divided 
      by each of the numbers from 1 to 10 without any remainder.

      What is the smallest positive number that is evenly 
      divisible by all of the numbers from 1 to 20?::
      
"""

from numpy import *
from MyDevTools.MyDataTypes import histogram
from MyDevTools.MyPerformanceTools import unpack, memo
from MyDevTools.MyMathTools import (is_common_multiple, get_factors,
                                    get_multiples, have_common_factors
                                    )
from MyDevTools.MyDebug import timeIt
import sys




#    while searchables != list(get_factors(n)) and counter <= max_iter:
#        counter, n = counter + 1, n + 20
#    print n, counter
    
fast_get_factors = memo(get_factors)

def test():
    for i in range(10):
        if i == 5:
            if True:
                continue
            print i
        print i
        
factor = get_factors

@timeIt
def main():
#    test()
#    sys.exit()
    assert is_common_multiple(2520, xrange(1,11))
    start, max_iter, counter = 2520, 5000, 0
    n = 2520    
    while counter < max_iter:
        p = array(xrange(1,21),n)
        h = vectorize(have_common_factors)
        if p == p[h(p)]:
            print n            
            break
        n, counter = n+20, counter+1
        
    sys.exit()
#    searchables = set(have_common_factors(*list(xrange(3,21)))
    multiples = get_multiples(p, common=True)
    n = multiples.next()    
    while n < start:
        print n
        n = multiples.next()
    sys.exit()
    search_list = []
    while counter < max_iter:
        n, counter = multiples.next(), counter + 1        
        search_list = set(get_factors(n, common=True))
        if searchables.issubset(search_list):
            break
        
        
    print searchables, search_list
    print n, counter
    
                
#    while searchables != list(fast_get_factors(n)) and counter <= max_iter:
#        counter, n = counter + 1, n + 20
#    print n, counter

    
if __name__ == '__main__':
    main()