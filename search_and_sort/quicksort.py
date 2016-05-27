__author__ = 'jay'


def traditional_quicksort(x, p=None):
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
    return traditional_quicksort(partitioned_x_lo, p - 1) + traditional_quicksort(partitioned_x_hi, p + 1)


def functional_quicksort(seq):
    if len(seq) in (0, 1):
        return seq

    def partition(_seq):
        p = _seq[-1]
        return filter(lambda x: x <= p, _seq), filter(lambda x: x > p, _seq)

    lo, hi = partition(seq)

    return functional_quicksort(lo[:-1]) + [lo[-1]] + functional_quicksort(hi)


def quickkeysort(seq, key=lambda x: x):
    if len(seq) in (0, 1):
        return seq

    def partition(_seq):
        p = key(_seq[-1])
        return filter(lambda x: key(x) <= p, _seq), filter(lambda x: key(x) > p, _seq)

    lo, hi = partition(seq)

    return functional_quicksort(lo[:-1]) + [lo[-1]] + functional_quicksort(hi)


def main():
    l = [3, 6, 4, 5, 9, 2, 90, 214, 234, 234512, 3412, 4312341]
    print(l)
    print(sorted(l))
    print(traditional_quicksort(l))
    print(functional_quicksort(l))
    print(quickkeysort(map(lambda x: chr((x % 26) + ord('a')), l), key=ord))


if __name__ == '__main__':
    main()
