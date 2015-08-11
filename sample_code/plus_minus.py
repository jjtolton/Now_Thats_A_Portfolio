__author__ = 'jay'


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

main()