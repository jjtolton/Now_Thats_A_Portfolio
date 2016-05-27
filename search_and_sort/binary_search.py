__author__ = 'jay'



def binary_search(n, items, hops=0):
    mid = len(items) / 2
    if len(items) == 1 and items[0] == n:
        return [n]
    elif len(items) == 1 and items[0] != n:
        return []
    elif len(items) > 1 and items[0] <= n <= items[-1]:
        return binary_search(n, items[:mid], hops=hops+1) + binary_search(n, items[mid:], hops=hops+1)
    else:
        return []


def binfilter(predicate, items):
    if len(items) == 1 and predicate(items[0]):
        return items
    elif len(items) in (0, 1):
        return []
    else:
        return binfilter(predicate, items[:len(items) / 2]) + binfilter(predicate, items[len(items) / 2:])


def main():
    x = range(1000)
    # y = binary_search(100, x)
    # print y, type(y)

    print(binfilter(lambda n: n % 3 == 0, x))

if __name__ == '__main__':
    main()