# -*- coding: utf-8 -*-
"""
Created on Thu Jan 01 21:23:53 2015

@author: J
"""

from MyDevTools.MyDebug import *
from MyDevTools.MyPerformanceTools import memo

@trace
@memo
@callcounts
def A(m,n):
    if m == 0:
        return n + 1
    if m > 0 and n == 0:
        return A(m-1,1)
    if m > 0 and n > 0:
        return A(m-1,A(m,n-1))
        
if __name__ == '__main__':
    s = A(3,4)
    with open('ackerman', 'w') as f:
        f.write(str(s))
        