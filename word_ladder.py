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
    path --> dict
    previous --> dict
    frontier --> list
    successors --> dict
    
"""

import shelve
import itertools as it
import string

def main():
    dictionary = intializeDictionary() 
    ladder = convertWord(_from, to)
    
def convertWord(_from, to):
    initial_path = {
                    '':_from
    }
    
    frontier = [initial_path]
    previous = {}
    while frontier:
        path = frontier.pop(0)                
        path_stream = get_path_stream(path)
        for path in path_steam:
            for history, word in path:
                if word == to:
                    return history, word
            
            if not previous.get(word):
                previous[history] = word
                frontier.append(path)
        
def get_path_stream(path):
    history, word = None, None
    for k, v in path.items():
        history, word = k,v
    
    
        
    
    
    
    
    
    
    