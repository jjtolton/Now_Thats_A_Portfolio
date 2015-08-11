# Problem Statement
# 
# You are given an integer N. Print the factorial of this number.
# 
# N!=N×(N−1)×(N−2)×⋯×3×2×1
# Note: Factorials of N>20 can't be stored even in a 64−bit long long variable. 
# Big integers must be used for such calculations. Languages like Java, Python, Ruby etc. 
# can handle big integers but we need to write additional code in C/C++ to handle such large values.
# 
# We recommend solving this challenge using BigIntegers.
# 
# Input Format 
# Input consists of a single integer N.
# 
# Constraints 
# 1≤N≤100
# 
# Output Format 
# Output the factorial of N.
# 
# Sample Input
# 
# 25
# Sample Output
# 
# 15511210043330985984000000
# 

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

def get_factorial(n):
    import math
    return math.factorial(n)
    
def main():
    n = int(get_inputs().next())
    res = get_factorial(n)
    
    if 'L' in str(res):
        res = str(res).replace('L', '')
    
    print res
    
main()