# -*- coding: utf-8 -*-
"""
Created on Mon Jan 12 19:49:32 2015

@author: J

This program implements a word ladder.

A word ladder finds the shortest way to transform one word into another of 
equal length using certain rules.

Rule 1:  Only one letter can be changed at a time
Rule 2:  The word can only be changed to another valid word.  

Valid Example:
cat to lad
cat --> cad --> lad

Invalid Example:
cat to dog
cat -x-> cag -x-> dag --> dog


Concepts:

    word --> string
    previous --> dict
    frontier --> list
    successors --> dict
    
path data structure
    
    example path = {
                'history' : list # previous words
                'current word' : str  #previous words
    }
"""

from Queue import Queue
import multiprocessing as mp
import numpy as np
import shelve
import itertools as it
import string
import time
import cPickle
import csv
import datetime
from MyDevTools.FileTools import get_file
from MyDevTools.MyDebug import timeIt


fin = r'C:\Users\J\Documents\Python Scripts\english_words.db'
print fin

en_words = None
en_ = shelve.open(fin, flag='r')
try:
    en_words = en_['all_words']
finally:
    en_.close()
    
sorted_words = sorted(list(en_words))
alphabet = string.ascii_uppercase
sorted_dic = {}

for i in range(1,27):
    sorted_dic[i] = []

#print sorted_dic

for word in sorted_words:
    len_word = len(word) 
    try:
        sorted_dic[len_word].append(word)
    except KeyError:
        sorted_dic[len_word] = [word]

def one_letter_different(s1,s2):
        differences = 0
        for a,b in zip(s1, s2):
            if a != b:
                differences += 1
        return True if differences == 1 else False
    
def produce_successors(p, q):
    path = p
    history = path['history']
    word = path['current']
    len_word = len(word)
    word_bank = sorted_dic[len_word]
    one_different = one_letter_different
    new_words = [w for w in word_bank if one_different(w,word)]
    for word in new_words:
        new_history = history + (word,)
        current = word
        print new_history
        new_path = {
                    'history' : new_history,
                    'current' : current
        }
        q.put(new_path)    

def consumer(q, p):
    _q = q
    _p_out = p
    while True:
        item = _q.get()
        _p_out.send(item)
        _q.task_done()
    
def main():
    q = mp.JoinableQueue()
    p_in, p_out = mp.Pipe()
    frontier = []
    mp.freeze_support()
    goal = 'CAT'
    start_word = 'DOG'
    initial_state = {
                        'history': (start_word,),
                        'current' : start_word
                    }
    previous = set()
    frontier.append(initial_state)
    
    c1 = mp.Process(target=consumer, args=(q,p_out))            
    c1.daemon = True
    c1.start()
    
#    with open(r'C:\Users\J\Desktop\ladders.csv', 'w'):
#        pass
    g = None
    while frontier and not g:
        frontier = sorted(frontier, 
                         key=lambda path: len(path['history']),
                          reverse=True
                          )
        processes = []

        for i in xrange(mp.cpu_count()):
            if frontier:
                path = frontier.pop()
                if path['current'] == goal:
                    g = goal
                if path['current'] not in previous:
                    previous.add(path['current'])
                    processes.append(
                                    mp.Process(
                                                target=produce_successors,
                                                args=(path, q)
                                                )
                                    )
#        else:
#            if g:
#                print g
#                break
            
        for p in processes:
            p.start()
            
        while processes:
            p = processes.pop()
            p.join()
        
        while p_in.poll():
            new_path = p_in.recv()
#            print new_path
            frontier.append(new_path)
        if g:
            print g
    else:
        print None

#    pool.join()
       



    
if __name__ == '__main__':
    main()



    
    
    
    
    