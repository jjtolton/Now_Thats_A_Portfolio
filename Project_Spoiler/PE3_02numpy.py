# -*- coding: utf-8 -*-
"""
Created on Tue Dec 30 23:50:21 2014

@author: J


Question #3 (www.projecteuler.org):

    "The prime factors of 13195 are 5, 7, 13 and 29.
     What is the largest prime factor of the number 600851475143?"


"""

from numpy import array
import math
import time

def main():
    """The value to solve for in Problem 3
    is 600851475143"""
    n = 600851475143
    t0 = time.clock()
    p = get_largest_prime(n)
    t1 = time.clock()
    print p
    print "Total time: {}".format(t1-t0)

def get_largest_prime(n):
    """get_largest_prime(int or long) -> int or long
    
    Returns largest prime number of n using
    the "sieve of erastosthenes" technique.  
    
    Checks every odd integer divisor up to sqrt(n) for
    primality."""    
    
    assert(isinstance(n, int) or isinstance(n, long))
    root_n = int(math.sqrt(n))+1
    divisors = array(range(1,root_n,2))
    quotients = n % divisors == 0
    factors = divisors[quotients]
    prime_mask = array(map(is_prime,factors), dtype='bool')
    prime_factors = factors[prime_mask]
    largest_prime = (max(prime_factors) if len(prime_mask) > 1
                                                    else prime_mask[0])
    prime_exists = largest_prime
    return largest_prime if prime_exists else None


def is_prime(n):
    """is_prime(int) -> bool
    
    Tests to see if n is prime"""
        
    if n % 2 == 0: 
        return False
    root_n = int(math.sqrt(n))+1
    up_to_root_n = root_n
    quotients = map(lambda divisor: n % divisor, 
                    range(3, up_to_root_n))
    n_is_evenly_divisible = 0 in quotients
    return False if n_is_evenly_divisible else True



#for candidate in candidates:
#    candidate = map(lambda x: 9 % x, range(1,int(math.sqrt(candidate)))
#    candidate = reduce(lambda x,y: x*y, candidate)

def test():
    assert(is_prime(13))
    assert(is_prime(7))
    assert(is_prime(17))
    assert(is_prime(14)==False)
    assert(not is_prime(25))
    assert(is_prime(6857))
    print "All tests pass"
    
if __name__ == '__main__':
    test()
    main()
    