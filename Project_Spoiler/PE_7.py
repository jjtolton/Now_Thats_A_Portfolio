__author__ = 'Atom Mk. IX2'

import sys
import prime
import itertools
from MyDebug import timeIt

@timeIt()
def main():

    isPrime = prime.isPrime
    primeGen = prime.primeGen
    g = primeGen()
    print list(itertools.islice(g,10000,10001))[0]
    

if __name__=="__main__":
    main()