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

from MyDataTypes import histogram
from MyPerformanceTools import unpack
from MyMathTools import is_common_multiple, get_factors

def have_common_factors

def main():
    assert is_common_multiple(2520, xrange(1,11))
    n = 2521
    
    val_sets = unpack(*[list(get_factors(i, common=True)) for i in xrange(1,21)])
#    while not is_common_multiple(n,):
#        n += 1
##    print n
    vals = histogram().push_all(val_sets)
    for k,v in vals.items():
        if v == 1:
            print k

if __name__ == '__main__':
    main()