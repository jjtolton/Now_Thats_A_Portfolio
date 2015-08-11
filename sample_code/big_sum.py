__author__ = 'jay'


def get_inputs():
    """
    Note: this will only work on the hackerrank website, no correlation to real life Python
    :return:
    """
    inputs = []
    while True:
        try:
            x = raw_input().split()
            for y in x:
                inputs.append(y)
        except EOFError:
            break
    return inputs

# get input
inputs = get_inputs()

# remove header
inputs.pop(0)

# map/reduce ftw
big_sum = sum(map(int, inputs))
print big_sum