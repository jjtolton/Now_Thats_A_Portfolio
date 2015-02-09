# -*- coding: utf-8 -*-
"""
Created on Tue Jan 13 03:26:05 2015

@author: J
"""

#import datetime
#from itertools import imap

def convert_time(course_time):
    """Example format: '08:00AM-09:15AM' """
    t1,t2 = course_time.split('-')
    return map(_convert_time, (t1,t2))

def _convert_time(t):
    
    if 'AM' in t:
        t = t.replace('AM', '')
        t = map(int,t.split(':'))
        t1,t2 = t
        t = float(t1) + float(t2)/60.0
        return t
        
    if 'PM' in t:
        t = t.replace('PM', '')
        t = map(int,t.split(':'))
        t1, t2 = t
        t1, t2 = t1 + 12, t2
        t = float(t1) + float(t2)/60.0
        return t

def main():
    test()


def test():
    print convert_time('08:00AM-09:15AM')
    print convert_time('08:00AM-09:15PM')
    

    
if __name__ == '__main__':
    main()