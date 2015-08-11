# -*- coding: utf-8 -*-

__author__ = 'jay'


# Problem Statement
#
# The Head Librarian at a library wants you to make a program that calculates the fine for returning the book after
# the return date. You are given the actual and the expected return dates. Calculate the fine as follows:
#
# If the book is returned on or before the expected return date, no fine will be charged, in other words fine is 0.
# If the book is returned in the same month as the expected return date, Fine = 15 Hackos * Number of late days
# If the book is not returned in the same month but in the same year as the expected return date,
# Fine = 500 Hackos * Number of late months
# If the book is not returned in the same year, the fine is fixed at 10000 Hackos.
# Input Format
#
# You are given the actual and the expected return dates in D M Y format respectively.
# There are two lines of input. The first line contains the D M Y values for the actual
# return date and the next line contains the D M Y values for the expected return date.
#
# Constraints
# 1 <= D <= 31
# 1 <= M <= 12
# 1 <= Y <= 3000
# Output Format
#
# Output a single value equal to the fine.
#
# Sample Input
#
# 9 6 2015
# 6 6 2015
# Sample Output
#
# 45
# Explanation
#
# Since the actual date is 3 days late than expected, fine is calculated as 15*3=45 Hackos.

def get_input(test_input=None):
    return test_input if test_input and not isinstance(test_input, int) else raw_input()

def get_late_fee(test_inputs=None):
    import datetime as dt
    inputs = [get_input(t) for t in (test_inputs if test_inputs else range(2))]
    d_actual, d_expected = [dt.datetime.strptime(date, '%d %m %Y') for date in inputs]

    days_late = d_actual.day - d_expected.day
    months_late = d_actual.month - d_expected.month
    years_late = d_actual.year - d_expected.year

    if years_late > 0:
        return 10000
    elif months_late > 0 and years_late >= 0:
        return 500 * months_late
    elif days_late > 0 and months_late >= 0 and years_late >= 0:
        return 15 * days_late
    else:
        return 0


def main():
    test_cases = """28 2 2015
15 4 2015""".strip().split('\n')
    late_fee = get_late_fee(test_cases)
    print late_fee


if __name__ == '__main__':
    main()
