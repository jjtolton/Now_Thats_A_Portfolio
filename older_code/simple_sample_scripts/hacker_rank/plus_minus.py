# -*- coding: utf-8 -*-

__author__ = 'jay'

# Problem Statement
#
# You're given an array containing integer values. You need to print the fraction of count of positive numbers,
# negative numbers and zeroes to the total numbers. Print the value of the fractions correct to 3 decimal places.
#
# Input Format
#
# First line contains N, which is the size of the array.
# Next line contains N integers A1,A2,A3,⋯,AN, separated by space.
#
# Constraints
# 1≤N≤100
# −100≤Ai≤100
# Output Format
#
# Output three values on different lines equal to the fraction of count of positive numbers, negative numbers
# and zeroes to the total numbers respectively correct to 3 decimal places.
#
# Sample Input
#
# 6
# -4 3 -9 0 4 1
# Sample Output
#
# 0.500
# 0.333
# 0.167
# Explanation
#
# There are 3 positive numbers, 2 negative numbers and 1 zero in the array.
# Fraction of the positive numbers, negative numbers and zeroes are 36=0.500, 26=0.333 and 16=0.167 respectively.
#
# Note This challenge introduces precision problems. You can even print output to 4 decimal places and above but
# only the difference at 3rd decimal digit is noted. That is the reason you'll notice testcases have much higher
# precision (more decimal places) than required.
# Answers with absolute error upto 10−4 will be accepted.


def get_inputs():
    """
    Note: this will only work on the hackerrank website, no correlation to real life Python
    :return:
    """
    while True:
        try:
            x = raw_input().split()
            for y in x:
                yield y
        except EOFError:
            break


def sanitize_inputs(inputs):
    # pop head (unneeded information)
    inputs.next()
    
    # type-cast as ints
    for n in inputs:
        yield int(n)


def main():
    inputs = get_inputs()
    nums = sanitize_inputs(inputs)
    num_types = ['pos', 'neg', 'zeros']
    num_groups = {num_type: 0 for num_type in num_types + ['total']}
    for n in nums:
        if n > 0:
            num_groups['pos'] += 1
        elif n == 0:
            num_groups['zeros'] += 1
        elif n < 0:
            num_groups['neg'] += 1
        else:
            error_msg = "What is {} doing here?".format(n)
            raise Exception(error_msg)
        num_groups['total'] += 1

    for num_group in num_types:
        print float(num_groups[num_group]) / num_groups['total']

if __name__ == '__main__':
    main()