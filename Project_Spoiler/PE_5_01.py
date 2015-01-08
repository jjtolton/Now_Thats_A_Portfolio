# -*- coding: utf-8 -*-
"""
Created on Wed Jan 07 21:30:47 2015

@author: J
"""

from numpy import array, argmax

def main():
    assert is_divisible(2520, xrange(10))



def is_divisible(dividends, *divisors):
    return True if not argmax(dividends % array(divisors)) else False

if __name__ == '__main__':
    main()
    