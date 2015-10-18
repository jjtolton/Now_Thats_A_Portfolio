__author__ = 'jay'


def quicksort(x, p=None):

    if p is None:
        p = 2 * len(x) / 3

    if len(x) in (1, 0) or 1 > p:
        return x

    if p + 1 >= len(x):
        pivot_val = x[-1]
    else:
        pivot_val = x[p]

    partitioned_x_lo = [n for n in x if n <= pivot_val]
    partitioned_x_hi = [n for n in x if n > pivot_val]
    return quicksort(partitioned_x_lo, p - 1) + quicksort(partitioned_x_hi, p + 1)


l = [3, 6, 4, 5, 9, 2, 90, 214, 234, 234512, 3412, 4312341]
print quicksort(l)
