# -*- coding: utf-8 -*-

__author__ = 'jay'


# Problem Statement
#
# You are given a square matrix of size N×N. Calculate the absolute difference
# of the sums across the two main diagonals.
#
# Input Format
#
# The first line contains a single integer N. The next N lines contain N integers (each) describing the matrix.
#
# Constraints
# 1≤N≤100
# −100≤A[i]≤100
# Output Format
#
# Output a single integer equal to the absolute difference in the sums across the diagonals.
#
# Sample Input
#
# 3
# 11 2 4
# 4 5 6
# 10 8 -12
# Sample Output
#
# 15
# Explanation
#
# The first diagonal of the matrix is:
#
# 11
#     5
#         -12
# Sum across the first diagonal = 11+5-12= 4
#
# The second diagonal of the matrix is:
#
#         4
#     5
# 10
# Sum across the second diagonal = 4+5+10 = 19
# Difference: |4-19| =15


def get_inputs():
    """
    Note: this will only work on the hackerrank website, no correlation to real life Python
    :return:
    """
    _inputs = []
    while True:
        try:
            x = raw_input().split()
            for y in x:
                _inputs.append(y)
        except EOFError:
            break
    return _inputs


# get inputs, pop header
inputs = get_inputs()
matrix_size = int(inputs.pop(0))


def get_sanitized_input_items(inputs):
    for _input in inputs:
        yield int(_input)


def get_diagonals(matrix_size, matrix_rows):
    # left diagonal
    l_diagonal = []
    for i in range(matrix_size):
        diagonal_val = matrix_rows[i][i]
        l_diagonal.append(diagonal_val)
    yield l_diagonal

    # right diagonal
    r_diagonal = []
    matrix_end_index = matrix_size - 1
    for i in range(matrix_size):
        diagonal_val = matrix_rows[matrix_end_index - i][i]
        r_diagonal.append(diagonal_val)
    yield r_diagonal


def get_matrix_rows(matrix_size, ints):
    matrix_row = []
    for n in ints:
        matrix_row.append(n)
        if len(matrix_row) == matrix_size:
            yield matrix_row
            matrix_row = []


def main():
    import itertools as it

    # convert strings to ints; generator
    sanitized_inputs = list(get_sanitized_input_items(inputs))

    # convert stream of ints to matrix
    matrix_rows = get_matrix_rows(matrix_size, sanitized_inputs)

    # get matrix diagonals
    diagonals = get_diagonals(matrix_size, list(matrix_rows))

    # get diagonal sums
    diagonal_sums = it.imap(sum, diagonals)

    # get abs difference
    diagonal_diff = abs(diagonal_sums.next() - diagonal_sums.next())

    print diagonal_diff

if __name__ == '__main__':
    main()
