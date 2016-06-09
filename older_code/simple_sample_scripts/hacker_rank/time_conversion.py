# -*- coding: utf-8 -*-

__author__ = 'jay'


# Problem Statement
#
# You are given time in AM/PM format. Convert this into a 24 hour format.
#
# Note Midnight is 12:00:00AM or 00:00:00 and 12 Noon is 12:00:00PM.
#
# Input Format
#
# Input consists of time in the AM/PM format i.e. hh:mm:ssAM or hh:mm:ssPM
# where
# 01≤hh≤12
# 00≤mm≤59
# 00≤ss≤59
#
# Output Format
#
# You need to print the time in 24 hour format i.e. hh:mm:ss
# where
# 00≤hh≤23
# 00≤mm≤59
# 00≤ss≤59
#
# Sample Input
#
# 07:05:45PM
# Sample Output
#
# 19:05:45

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

def main():
    import time
    t = time.strptime(get_inputs().next(),  # time, in format hour:minute:second(am/pm)
                      '%I:%M:%S%p')  # this is the string parse formatter representation of the above)

    # reformat and reprint the output to 24-hour time
    print time.strftime('%H:%M:%S', t)

if __name__ == '__main__':
    main()
