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
    
#print sorted_dic[3], len(sorted_dic[3])

#print sorted_dic[14]  

@timeIt()
def main():
    frontier = []
    word_bank = set()
    word_found = False
    goal = 'MAN'
    start_word = 'APE'
    initial_state = {
                        'history': (start_word,),
                        'current' : start_word
                    }
    previous = set([start_word])
    frontier.append(initial_state)
    with open(r'C:\Users\J\Desktop\ladders.csv', 'w'):
        pass
    while frontier:
        frontier = sorted(frontier, 
                         key=lambda path: len(path['history']),
                          reverse=True
                          )

        path = frontier.pop()

        print path['history']
        if path['current'] == goal:
            print path
            break
        else:
            new_paths = get_successors(path)
            for new_path in new_paths:
                if new_path['current'] not in previous:
                    with open(r'C:\Users\J\Desktop\ladders.csv', 'a') as f:
                        csv_writer = csv.writer(f)
                        csv_writer.writerow(new_path['history'])
                    previous.add(new_path['current'])                                
                    frontier.append(new_path)
#        print time.clock()-t0, datetime.datetime.now()-dt
    else:
        print None


def one_letter_different(s1,s2):
    differences = 0
    for a,b in zip(s1, s2):
        if a != b:
            differences += 1
    return True if differences == 1 else False

def get_successors(p):
    path = p
    history = path['history']
    word = path['current']
    w_0 = word[0]
    len_word = len(word)
    rest_of_word = word[1:]
    _alphabet = alphabet
    word_bank = sorted_dic[len_word]
    one_different = one_letter_different
    prev = set()
    new_words = \
        sorted([w for w in word_bank if one_different(w,word)])

    for word in new_words:
        new_history = history + (word,)
        current = word
        new_path = {
                    'history' : new_history,
                    'current' : current
        }
        yield new_path
#        


    



#def get_similar_words(main_word, word, s_words):
#    first_letter = word[0]
#    length_word = len(word)
#    s_en_words = s_words
#    prev = set()
#    one_different = one_letter_different
#    for w in s_en_words:
#        if w[0] == first_letter and \
#                   w not in prev and \
#                   one_different(w, word):
#                       
#            prev.add(word)
#            yield w
#                                        

#def get_successor_words(word, s_dic):
#    _alphabet = alphabet
#    len_word = len(word)
##    print len_word
#    sorted_dic = s_dic
#    en_words = sorted(sorted_dic[len_word], reverse=True)
#    new_words = [letter + word[1:] for letter in _alphabet]
#    new_words = [w for w in new_words if w in en_words]
#    new_words = [[_ for _ in get_similar_words(word, 
#                                               w, 
#                                               en_words)]
#                                               for w in new_words]
##    print new_words
#    return list(set(list(it.chain(*new_words))))
#    
#def word_combos:
    
        
def test():
    test_path = {
            'history' : ('CAT',),
            'current' : 'CAT'    
    }
#    res_list = [{'current': 'CAT', 'history': ('CAT', 'CAT')}, {'current': 'EAT', 'history': ('CAT', 'EAT')}, {'current': 'FAT', 'history': ('CAT', 'FAT')}, {'current': 'GAT', 'history': ('CAT', 'GAT')}, {'current': 'HAT', 'history': ('CAT', 'HAT')}, {'current': 'MAT', 'history': ('CAT', 'MAT')}, {'current': 'OAT', 'history': ('CAT', 'OAT')}, {'current': 'PAT', 'history': ('CAT', 'PAT')}, {'current': 'RAT', 'history': ('CAT', 'RAT')}, {'current': 'SAT', 'history': ('CAT', 'SAT')}, {'current': 'TAT', 'history': ('CAT', 'TAT')}, {'current': 'VAT', 'history': ('CAT', 'VAT')}, {'current': 'BAT', 'history': ('CAT', 'BAT')}, {'current': 'EAT', 'history': ('CAT', 'EAT')}, {'current': 'FAT', 'history': ('CAT', 'FAT')}, {'current': 'GAT', 'history': ('CAT', 'GAT')}, {'current': 'HAT', 'history': ('CAT', 'HAT')}, {'current': 'MAT', 'history': ('CAT', 'MAT')}, {'current': 'OAT', 'history': ('CAT', 'OAT')}, {'current': 'PAT', 'history': ('CAT', 'PAT')}, {'current': 'RAT', 'history': ('CAT', 'RAT')}, {'current': 'SAT', 'history': ('CAT', 'SAT')}, {'current': 'TAT', 'history': ('CAT', 'TAT')}, {'current': 'VAT', 'history': ('CAT', 'VAT')}, {'current': 'BAT', 'history': ('CAT', 'BAT')}, {'current': 'CAT', 'history': ('CAT', 'CAT')}, {'current': 'FAT', 'history': ('CAT', 'FAT')}, {'current': 'GAT', 'history': ('CAT', 'GAT')}, {'current': 'HAT', 'history': ('CAT', 'HAT')}, {'current': 'MAT', 'history': ('CAT', 'MAT')}, {'current': 'OAT', 'history': ('CAT', 'OAT')}, {'current': 'PAT', 'history': ('CAT', 'PAT')}, {'current': 'RAT', 'history': ('CAT', 'RAT')}, {'current': 'SAT', 'history': ('CAT', 'SAT')}, {'current': 'TAT', 'history': ('CAT', 'TAT')}, {'current': 'VAT', 'history': ('CAT', 'VAT')}, {'current': 'BAT', 'history': ('CAT', 'BAT')}, {'current': 'CAT', 'history': ('CAT', 'CAT')}, {'current': 'EAT', 'history': ('CAT', 'EAT')}, {'current': 'GAT', 'history': ('CAT', 'GAT')}, {'current': 'HAT', 'history': ('CAT', 'HAT')}, {'current': 'MAT', 'history': ('CAT', 'MAT')}, {'current': 'OAT', 'history': ('CAT', 'OAT')}, {'current': 'PAT', 'history': ('CAT', 'PAT')}, {'current': 'RAT', 'history': ('CAT', 'RAT')}, {'current': 'SAT', 'history': ('CAT', 'SAT')}, {'current': 'TAT', 'history': ('CAT', 'TAT')}, {'current': 'VAT', 'history': ('CAT', 'VAT')}, {'current': 'BAT', 'history': ('CAT', 'BAT')}, {'current': 'CAT', 'history': ('CAT', 'CAT')}, {'current': 'EAT', 'history': ('CAT', 'EAT')}, {'current': 'FAT', 'history': ('CAT', 'FAT')}, {'current': 'HAT', 'history': ('CAT', 'HAT')}, {'current': 'MAT', 'history': ('CAT', 'MAT')}, {'current': 'OAT', 'history': ('CAT', 'OAT')}, {'current': 'PAT', 'history': ('CAT', 'PAT')}, {'current': 'RAT', 'history': ('CAT', 'RAT')}, {'current': 'SAT', 'history': ('CAT', 'SAT')}, {'current': 'TAT', 'history': ('CAT', 'TAT')}, {'current': 'VAT', 'history': ('CAT', 'VAT')}, {'current': 'BAT', 'history': ('CAT', 'BAT')}, {'current': 'CAT', 'history': ('CAT', 'CAT')}, {'current': 'EAT', 'history': ('CAT', 'EAT')}, {'current': 'FAT', 'history': ('CAT', 'FAT')}, {'current': 'GAT', 'history': ('CAT', 'GAT')}, {'current': 'MAT', 'history': ('CAT', 'MAT')}, {'current': 'OAT', 'history': ('CAT', 'OAT')}, {'current': 'PAT', 'history': ('CAT', 'PAT')}, {'current': 'RAT', 'history': ('CAT', 'RAT')}, {'current': 'SAT', 'history': ('CAT', 'SAT')}, {'current': 'TAT', 'history': ('CAT', 'TAT')}, {'current': 'VAT', 'history': ('CAT', 'VAT')}, {'current': 'BAT', 'history': ('CAT', 'BAT')}, {'current': 'CAT', 'history': ('CAT', 'CAT')}, {'current': 'EAT', 'history': ('CAT', 'EAT')}, {'current': 'FAT', 'history': ('CAT', 'FAT')}, {'current': 'GAT', 'history': ('CAT', 'GAT')}, {'current': 'HAT', 'history': ('CAT', 'HAT')}, {'current': 'OAT', 'history': ('CAT', 'OAT')}, {'current': 'PAT', 'history': ('CAT', 'PAT')}, {'current': 'RAT', 'history': ('CAT', 'RAT')}, {'current': 'SAT', 'history': ('CAT', 'SAT')}, {'current': 'TAT', 'history': ('CAT', 'TAT')}, {'current': 'VAT', 'history': ('CAT', 'VAT')}, {'current': 'BAT', 'history': ('CAT', 'BAT')}, {'current': 'CAT', 'history': ('CAT', 'CAT')}, {'current': 'EAT', 'history': ('CAT', 'EAT')}, {'current': 'FAT', 'history': ('CAT', 'FAT')}, {'current': 'GAT', 'history': ('CAT', 'GAT')}, {'current': 'HAT', 'history': ('CAT', 'HAT')}, {'current': 'MAT', 'history': ('CAT', 'MAT')}, {'current': 'PAT', 'history': ('CAT', 'PAT')}, {'current': 'RAT', 'history': ('CAT', 'RAT')}, {'current': 'SAT', 'history': ('CAT', 'SAT')}, {'current': 'TAT', 'history': ('CAT', 'TAT')}, {'current': 'VAT', 'history': ('CAT', 'VAT')}, {'current': 'BAT', 'history': ('CAT', 'BAT')}, {'current': 'CAT', 'history': ('CAT', 'CAT')}, {'current': 'EAT', 'history': ('CAT', 'EAT')}, {'current': 'FAT', 'history': ('CAT', 'FAT')}, {'current': 'GAT', 'history': ('CAT', 'GAT')}, {'current': 'HAT', 'history': ('CAT', 'HAT')}, {'current': 'MAT', 'history': ('CAT', 'MAT')}, {'current': 'OAT', 'history': ('CAT', 'OAT')}, {'current': 'RAT', 'history': ('CAT', 'RAT')}, {'current': 'SAT', 'history': ('CAT', 'SAT')}, {'current': 'TAT', 'history': ('CAT', 'TAT')}, {'current': 'VAT', 'history': ('CAT', 'VAT')}, {'current': 'BAT', 'history': ('CAT', 'BAT')}, {'current': 'CAT', 'history': ('CAT', 'CAT')}, {'current': 'EAT', 'history': ('CAT', 'EAT')}, {'current': 'FAT', 'history': ('CAT', 'FAT')}, {'current': 'GAT', 'history': ('CAT', 'GAT')}, {'current': 'HAT', 'history': ('CAT', 'HAT')}, {'current': 'MAT', 'history': ('CAT', 'MAT')}, {'current': 'OAT', 'history': ('CAT', 'OAT')}, {'current': 'PAT', 'history': ('CAT', 'PAT')}, {'current': 'SAT', 'history': ('CAT', 'SAT')}, {'current': 'TAT', 'history': ('CAT', 'TAT')}, {'current': 'VAT', 'history': ('CAT', 'VAT')}, {'current': 'BAT', 'history': ('CAT', 'BAT')}, {'current': 'CAT', 'history': ('CAT', 'CAT')}, {'current': 'EAT', 'history': ('CAT', 'EAT')}, {'current': 'FAT', 'history': ('CAT', 'FAT')}, {'current': 'GAT', 'history': ('CAT', 'GAT')}, {'current': 'HAT', 'history': ('CAT', 'HAT')}, {'current': 'MAT', 'history': ('CAT', 'MAT')}, {'current': 'OAT', 'history': ('CAT', 'OAT')}, {'current': 'PAT', 'history': ('CAT', 'PAT')}, {'current': 'RAT', 'history': ('CAT', 'RAT')}, {'current': 'TAT', 'history': ('CAT', 'TAT')}, {'current': 'VAT', 'history': ('CAT', 'VAT')}, {'current': 'BAT', 'history': ('CAT', 'BAT')}, {'current': 'CAT', 'history': ('CAT', 'CAT')}, {'current': 'EAT', 'history': ('CAT', 'EAT')}, {'current': 'FAT', 'history': ('CAT', 'FAT')}, {'current': 'GAT', 'history': ('CAT', 'GAT')}, {'current': 'HAT', 'history': ('CAT', 'HAT')}, {'current': 'MAT', 'history': ('CAT', 'MAT')}, {'current': 'OAT', 'history': ('CAT', 'OAT')}, {'current': 'PAT', 'history': ('CAT', 'PAT')}, {'current': 'RAT', 'history': ('CAT', 'RAT')}, {'current': 'SAT', 'history': ('CAT', 'SAT')}, {'current': 'VAT', 'history': ('CAT', 'VAT')}, {'current': 'BAT', 'history': ('CAT', 'BAT')}, {'current': 'CAT', 'history': ('CAT', 'CAT')}, {'current': 'EAT', 'history': ('CAT', 'EAT')}, {'current': 'FAT', 'history': ('CAT', 'FAT')}, {'current': 'GAT', 'history': ('CAT', 'GAT')}, {'current': 'HAT', 'history': ('CAT', 'HAT')}, {'current': 'MAT', 'history': ('CAT', 'MAT')}, {'current': 'OAT', 'history': ('CAT', 'OAT')}, {'current': 'PAT', 'history': ('CAT', 'PAT')}, {'current': 'RAT', 'history': ('CAT', 'RAT')}, {'current': 'SAT', 'history': ('CAT', 'SAT')}, {'current': 'TAT', 'history': ('CAT', 'TAT')}]
    for _ in get_successors(test_path):
        print _

    
if __name__ == '__main__':
#    pass
#    pass
#    test()
    main()
#    pass
    
#    successors =  get_successor_words('BOG', sorted_dic)
#    for _ in successors:
#        print _
#    print list(successors)
#    print list(get_similar_words('BOG', 'COG', sorted_dic, set()))
    
    
    
    