import random


def merge(merged, a, b):
    if a and b:
        return merge(merged + [min(a[0], b[0])],
                     a[1:] if min(a[0], b[0]) == a[0] else a,
                     b[1:] if min(a[0], b[0]) == b[0] and not a[0] == b[0] else b
                     )

    elif a and not b:
        return merged + mergesort(a)
    elif b and not a:
        return merged + mergesort(b)
    else:
        return merged


def mergesort(lst):
    if not lst:
        return []
    elif len(lst) == 2:
        return [min(lst), max(lst)]
    elif len(lst) == 1:
        return lst
    else:
        return merge([], mergesort(lst[:len(lst) / 2]), mergesort(lst[len(lst) / 2:]))


if __name__ == '__main__':
    random_lst = [random.choice(range(100)) for i in range(10)]
    print(random_lst)
    sorted_lst = mergesort(random_lst)
    print(sorted_lst)
    print(sorted_lst == sorted(random_lst))
