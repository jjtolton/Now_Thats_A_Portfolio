__author__ = 'jay'


# Problem Statement
#
# Your teacher has given you the task to draw the structure of a staircase. Being an expert programmer,
# you decided to make a program for the same. You are given the height of the staircase.
# You need to print a staircase as shown in the example.
#
# Input Format
#
# You are given an integer N depicting the height of the staircase.
#
# Constraints
# 1 <= N <= 100
# Output Format
#
# Draw a staircase of height N in the format given below.
#
# For example:
#
#      #
#     ##
#    ###
#   ####
#  #####
# ######
# Staircase of height 6, note that last line has 0 spaces before it.
#
# Sample Input
#
# 6
# Sample Output
#
#      #
#     ##
#    ###
#   ####
#  #####
# ######

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
    height = int(get_inputs().next())
    space = ' '
    step = '#'
    for i in range(height):
        spaces = height - 1 - i
        steps = height - spaces
        print space * spaces + step * steps 
        
if __name__ == '__main__':
    main()