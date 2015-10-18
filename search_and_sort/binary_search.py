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


x = range(1000)
y = binary_search(100, x)
print y, type(y)
