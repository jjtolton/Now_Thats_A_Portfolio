__author__ = 'jay'

# Problem Statement
# 
# Julius Caesar protected his confidential information from his enemies by encrypting it.
# Caesar rotated every letter in the string by a fixed number K. This made the string unreadable by the enemy.
# You are given a string S and the number K. Encrypt the string and print the encrypted string.
# 
# For example: 
# If the string is middle-Outz and K=2, the encoded string is okffng-Qwvb.
# Note that only the letters are encrypted while symbols like - are untouched.
# 'm' becomes 'o' when letters are rotated twice, 
# 'i' becomes 'k', 
# '-' remains the same because only letters are encoded, 
# 'z' becomes 'b' when rotated twice.
# 
# Input Format
# 
# Input consists of an integer N equal to the length of the string, followed by the string S and an integer K.
# 
# Constraints 
# 1<=N<=100 
# 0<=K<=100 
# S is a valid ASCII string and doesn't contain any spaces.
# 
# Output Format
# 
# For each test case, print the encoded string.
# 
# Sample Input
# 
# 11
# middle-Outz
# 2
# Sample Output
# 
# okffng-Qwvb
# Explanation
# 
# As explained in statement.

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

def get_shift(letters, rot):
    return letters[rot:] + letters[:rot]


def main():
    import string
    test_inputs = ['11', 'middle-Outz', '2']
    _, s, rot_str = list(get_inputs(test_inputs))

    lower = string.ascii_lowercase
    upper = string.ascii_uppercase

    rot = int(rot_str) % 26
    shift_lower = get_shift(string.ascii_lowercase, rot)
    shift_upper = get_shift(string.ascii_uppercase, rot)

    table = string.maketrans(lower + upper, shift_lower + shift_upper)

    cipher = string.translate(s, table)

    print cipher

if __name__ == '__main__':
    main()
