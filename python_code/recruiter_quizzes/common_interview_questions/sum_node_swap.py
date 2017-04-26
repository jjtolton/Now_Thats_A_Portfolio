"""Replace each node with the sum of all greater nodes in a given BST"""
import pprint


def xconj(t=None, v=None):
    def ts(v, l=None, r=None):
        return {'val': v,
                'left': l,
                'right': r}

    if t is None:
        return ts(v)

    if v == t['val']:
        return ts(t['val'], t['left'], t['right'])

    if v < t['val']:
        return ts(t['val'], xconj(t['left'], v), t['right'])

    return ts(t['val'], t['left'], xconj(t['right'], v))


def bst(vals):
    if len(vals) == 0:
        return None

    nodes = sorted(vals)
    avg = sum(nodes) / float(len(nodes))
    meanidx = min(range(len(nodes)), key=lambda i: abs(nodes[i] - avg))

    mnode = nodes[meanidx]
    left = nodes[:meanidx]
    right = nodes[meanidx + 1:]

    if len(vals) < 3:
        return reduce(lambda t, v: xconj(t, v), [None, mnode] + left + right)

    else:
        return {'val': mnode,
                'left': bst(left),
                'right': bst(right)}

def sumnodeswap(t):

    if t is None:
        return None

    if t['left'] is None and t['right'] is None:
        return {'val': t['val'],
                'vals': {t['val']}}

    left = sumnodeswap(t['left'])
    right = sumnodeswap(t['right'])

    vals = (left['vals'] if left else set()) | (right['vals'] if right else set()) | {t['val']}
    return {'val': sum(v for v in vals if v > t['val']),
            'vals': vals,
            'right': right,
            'left': left}

def main():
    t = bst(range(10))
    pprint.pprint(sumnodeswap(t))

if __name__ == '__main__':
    main()

