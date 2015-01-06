# -*- coding: utf-8 -*-
"""
Created on Wed Dec 31 13:42:27 2014

@author: J

Project Euler Problem #4 (www.projecteuler.org)
    A palindromic number reads the same both ways. 
    The largest palindrome made from the product of 
    two 2-digit numbers is 9009 = 91 × 99.

    Find the largest palindrome made from the product 
    of two 3-digit numbers.
"""

from numpy import array,vectorize
from MyDevTools.MyPerformanceTools import memo
from MyDevTools.MyDebug import timeIt


def is_palindrome(s):
    """
    is_palindrome(str) -> bool 
    e.g. is_palindrome(9009) == True
    """
    return True if str(s) == str(s)[::-1] else False    
    
@memo
def get_largest_palindrome(n):
    arr = array(xrange(n))
    palindrome_mask = vectorize(is_palindrome)    
    palindrome_mask = palindrome_mask(arr)
    res = arr[palindrome_mask]
    return res
    
def test():
    assert(is_palindrome(9009))
    assert(not is_palindrome(1234))
    assert(is_palindrome(90909))
    assert(not is_palindrome(997))


@timeIt
@memo    
def main():
    test()
    print get_largest_palindrome(999**2)
    print get_largest_palindrome(999**3)

if __name__=="__main__":
    main()
