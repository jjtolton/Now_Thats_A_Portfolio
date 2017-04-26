"""Implement a function which returns list of all nodes in a binary tree having a given number
of leaves, say k """
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

def assoc(d, k, v):
    _d = {_k: _v for _k, _v in d.items()}
    _d[k] = v
    return _d

def label(t):

    def _label(t):
        if t is None:
            return None

        if t['left'] is None and t['right'] is None:
            return {'val': 1,
                    'left': None,
                    'right': None}

        else:
            left = _label(t['left'])
            right = _label(t['right'])
            return {'val': (left['val'] if left else 0) + (right['val'] if right else 0),
                    'left': left,
                    'right': right}

    return _label(t)


def traverse(t):
    if t is None:
        return []
    return traverse(t['left']) + traverse(t['right']) + [t['val']]

def kleaves(t, k):
    n = traverse(label(t)).count(k)
    return n

def main():
    t = bst(range(10))

    pprint.pprint(t)

    pprint.pprint(label(t))
    print(kleaves(t, 2))




if __name__ == '__main__':
    main()