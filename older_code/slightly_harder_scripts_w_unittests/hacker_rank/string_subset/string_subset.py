# -*- coding: utf-8 -*-
from functools import wraps
import itertools

__author__ = 'jay'


# Problem Statement
#
# For two strings A and B, we define the similarity of the strings to be the length of the
# longest prefix common to both strings. For example, the similarity of strings "abc" and
# "abd" is 2, while the similarity of strings "aaa" and "aaab" is 3.
#
# Calculate the sum of similarities of a string S with each of it's suffixes.
#
# Input:
# The first line contains the number of test cases T. Each of the next T lines contains a string each.
#
# Output:
# Output T lines containing the answer for the corresponding test case.
#
# Constraints:
# 1 <= T <= 10
# The length of each string is at most 100000 and contains only lower case characters.
#
# Sample Input:
#
# 2
# ababaa
# aa
# Sample Output:
#
# 11
# 3
# Explanation:
# For the first case, the suffixes of the string are "ababaa", "babaa", "abaa", "baa", "aa" and "a".
# The similarities of these strings with the string "ababaa" are 6,0,3,0,1, & 1 respectively.
# Thus, the answer is 6 + 0 + 3 + 0 + 1 + 1 = 11.
#
# For the second case, the answer is 2 + 1 = 3.

# ------------ general helper functions

def get_inputs(test_inputs=None):
    """
    Note: this will only work on the hackerrank website, no correlation to real life Python
    :return:
    """

    if not test_inputs:
        while True:
            try:
                x = raw_input().split()
                for y in x:
                    yield y
            except EOFError:
                break
    else:
        for test_input in test_inputs:
            yield test_input


def get_num_test_cases(inputs):
    return int(inputs.next())


def get_strings(test_cases, inputs):
    for i in range(test_cases):
        yield inputs.next()


def get_suffixes(string):
    for i in range(len(string)):
        yield string[i:]


def get_index_of_longest_matching_initial_sequence(letter_pairs):
    c = 0
    for a, b in letter_pairs:
        if a != b:
            return c
        c += 1
    return c - 1


def get_score(string):
    suffixes = get_suffixes(string)
    paired_sequences = (itertools.izip(string, suffix) for suffix in suffixes)
    s = 0
    for seq in paired_sequences:
        s += get_index_of_longest_matching_initial_sequence(seq)
    return s


def get_index_of_matching_suffix_scores(test_inputs=None):
    inputs = get_inputs(test_inputs)
    num_test_cases = get_num_test_cases(inputs)
    strings = get_strings(num_test_cases, inputs)
    scores = (get_score(string) for string in strings)
    for score in scores:
        yield score


def main():
    f_in = 'test_inputs_04.txt'
    f_out = 'test_outputs_04.txt'

    with open(f_in) as test_inputs:
        scores = []
        for score in get_index_of_matching_suffix_scores(test_inputs):
            scores.append(score)
    with open(f_out) as test_outputs:
        for my_score, test_score in zip(scores, test_outputs):
            print my_score, test_score.strip()


if __name__ == '__main__':
    main()
