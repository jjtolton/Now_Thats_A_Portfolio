# -*- coding: utf-8 -*-
"""
Created on Thu Jan 22 11:07:13 2015

@author: J

Gil's Interview Question #2

Implement the function 

def common_words(fname, n):


This function gets as input a text file name (fname) and a count of words (n). It will then go over all the text within the file and print the most common n words and the amount of times each word appears.

Notes:
- A word is defined as any combination of characters other than the space (" ") character.
- If you are not sure about any part of the question, feel free to assume whatever makes your implementation the simplest. No need to overcomplicate.


For example:

let's say we have a file called "./test.txt" which contains the following text:

  this is a test file
  a test is good
  a test is required to test
  
  [EOF]

Running common_words("./test.txt", 3) will print to the screen:

test: 4
is: 3
a: 3

"""


import itertools as it


def common_words(fname, n):
    """Print the top n most frequently occuring words in file fname"""
    contents = []
    with open(fname) as f:
        for line in f:
            contents += line.strip().split(' ')
    
    """create histogram of contents"""
    content_histogram = {}
    for word in contents:
        try:
            content_histogram[word] += 1
        except KeyError:
            content_histogram[word] = 1            
    
    """normally wouldn't copy -- only copying for 'legacy' code block"""
    contents = content_histogram
    
    """process contents"""
    print "Top {} most frequently occuring words in {}:".format(n, fname)
    for word, occurence in it.islice(sorted(contents.iteritems(),
                                  key=lambda item: item[1],
                                  reverse=True
                                  ),n):
        print "\t{:.<10}: {:<10}".format(word, occurence)



def main():
    fname = 'test.txt'
    common_words(fname, 4)


if __name__ == '__main__':
    import doctest
    class Test:""">>> fname = 'test.txt'
>>> common_words(fname, 4)
Top 4 most frequently occuring words in test.txt:
    test......: 4         
    a.........: 3         
    is........: 3         
    good......: 1       
 """
    print doctest.testmod()
    main()
























