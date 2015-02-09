# -*- coding: utf-8 -*-
"""
Created on Wed Dec 31 13:42:27 2014
Python 2.7.8
@author: J

Project Euler Problem #4 (www.projecteuler.org)
    A palindromic number reads the same both ways. 
    The largest palindrome made from the product of 
    two 2-digit numbers is 9009 = 91 × 99.

    Find the largest palindrome made from the product 
    of two 3-digit numbers.
"""

from MyDevTools.MyMathTools import root_
from MyDevTools.MyDebug import *
from MyDevTools.MyPerformanceTools import *
import sys

printInputs = disabled
suppressErrors = disabled
trace = disabled


def is_palindrome(s):
    """
    is_palindrome(str) -> bool 
    e.g. is_palindrome(9009) == True
    """
    s_has_palindrome = str(s) == str(s)[::-1]
    return True if s_has_palindrome else False

@printInputs    
@suppressErrors
@trace
def get_largest_palindrome(n, low_factor=None, high_factor=None):
    test_factors(n, low_factor, high_factor)    
    nums = xrange(n-2)
    pals = (n-i for i in nums if is_palindrome(n-i))
    while pals:
        try:
            max_pal = pals.next()
            if has_factors(max_pal, low_factor, high_factor):
                return max_pal
        except StopIteration:
            return None

@printInputs
@trace
def test_factors(n, low_factor=None, high_factor=None):
    if not low_factor: low_factor = 0
    if not high_factor: high_factor = -1 #n + 10
    n_is_too_small = n <= 2
    if n_is_too_small: 
        raise UnintendedUseError(n, "Not intended for n < 3")
    we_have_a_factor_range = low_factor and high_factor
    root_n_not_in_range = not low_factor <= root_(n) <= high_factor
    if we_have_a_factor_range and root_n_not_in_range:
        sys.exit(UnintendedUseError(n, "Sqrt(n) not in range of factors!"))

@printInputs    
def has_factors(n, low=None, high=None):
    """has_factors(int, int, int) -> bool 
    
    Returns True if n is factorable in the specified range."""
    if n == 1: 
        raise MyDevTools.UnintendedUseError(n, "1 is prime")
    if not high: high = n+1
    if low < 2: low = 2    
    search_range = xrange(low, high)
    for num in search_range:
        if n % num == 0 and low < n/num < high:
            return True
    return False
    
def test(low=None, high=None):
    """unit tests"""
    
    

    """is_palindrome test"""
    assert(is_palindrome(9009))
    assert(not is_palindrome(1234))
    assert(is_palindrome(90909))
    assert(not is_palindrome(997))
    
    """has_factors test"""
    assert(not has_factors(13))
    assert(not has_factors(5))


@timeIt
@memo    
def main():
    test()
    print get_largest_palindrome(999**2,100,1000)
#    print get_largest_palindrome(1000)
    


if __name__=="__main__":
    main()
