# -*- coding: utf-8 -*-
"""
Created on Tue Feb 17 08:14:43 2015

@author: jay
"""

sum_squares = sum([x**2 for x in xrange(1,101)])
sum_squared = sum([x for x in xrange(1,101)])**2
print sum_squared - sum_squares
