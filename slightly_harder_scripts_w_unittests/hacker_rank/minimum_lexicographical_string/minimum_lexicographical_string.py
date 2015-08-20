# coding: utf-8
__author__ = 'jay'
#
# Problem Statement
#
# Russian | Chinese
#
# Jack and Daniel are friends. Both of them like letters, especially upper-case ones.
# They are cutting upper-case letters from newspapers, and each one of them has their collection of
# letters stored in separate stacks.

# One beautiful day, Morgan visited Jack and Daniel. He saw their collections.
# Morgan wondered what is the lexicographically minimal string, made of that two collections. He can take a letter from a collection when it is on the top of the stack.
# Also, Morgan wants to use all the letters in the boys' collections.
#
# Input Format
#
# The first line contains the number of test cases, T.
# Every next two lines have such format: the first line contains string A, and the second line contains string B.
#
# Constraints
# 1≤T≤5
# 1≤|A|≤105
# 1≤|B|≤105
# A and B contain upper-case letters only.
#
# Output Format
#
# Output the lexicographically minimal string S for each test case in new line.
#
# Sample Input
#
# 2
# JACK
# DANIEL
# ABACABA
# ABACABA
# Sample Output
#
# DAJACKNIEL
# AABABACABACABA


from collections import deque


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


def get_minimally_lexicographical_string(s):
    d = deque(s)
    for i in range(len(s)):
        d.rotate()
        word = ''.join(d)
        if word < s:
            s = word
    return s


def get_min_lex_of_two_catenated_strings(s1, s2):
    s = s1 + s2
    return get_minimally_lexicographical_string(s)


def main():
    test_inputs = ['JACK', 'DANIEL', 'ABACABA', 'ABACABA']
    inputs = get_inputs(test_inputs)
    s1, s2 = inputs.next(), inputs.next()
    print get_min_lex_of_two_catenated_strings(s1, s2)

    s3, s4 = inputs.next(), inputs.next()
    print get_min_lex_of_two_catenated_strings(s3, s4)


if __name__ == '__main__':
    main()
