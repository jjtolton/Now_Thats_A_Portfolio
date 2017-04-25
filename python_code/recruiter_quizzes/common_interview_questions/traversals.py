
class Traverse(object):

    @staticmethod
    def level_order(t):
        def _bfs(frontier=None, res=None):
            frontier = frontier or []
            res = res or []

            if len(frontier[-1:]) == 0:
                return res

            path = frontier[-1]
            next_paths = [path[x] for x in ['right', 'left'] if isinstance(path[x], dict)]

            return _bfs(next_paths + frontier[:-1],
                        res + [path['val']])

        return _bfs([t], [])

    @staticmethod
    def depth_first(t):
        def df(t):
            if t is None:
                return []
            return df(t['left']) + df(t['right']) + [t['val']]
        return df(t)



    @staticmethod
    def preorder(t):
        def pre(t):
            if t is None:
                return []
            v = t['val']
            return [v] + pre(t['left']) + pre(t['right'])
        return pre(t)

    @staticmethod
    def postorder(t):
        def post(t):
            if t is None:
                return []
            return post(t['left']) + post(t['right']) + [t['val']]

        return post(t)

    @staticmethod
    def inorder(t):
        def io(t):
            if t is None:
                return []
            return io(t['left']) + [t['val']] + io(t['right'])
        return io(t)



def tests():

    # for visual reference:
    # http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
    t = {'val': 1,
         'left': {'val': 2,
                  'left': {'val': 4,
                           'left': None,
                           'right': None},
                  'right': {'val': 5,
                            'left': None,
                            'right': None}},
         'right': {'val': 3,
                   'left': None,
                   'right': None}}


    fmt = lambda s, v: '{:>30}{}'.format(s, v)

    print(fmt('Level Order Traversal: ', Traverse.level_order(t)))
    # [1, 2, 1, 4, 5]

    print(fmt('Preorder Traversal: ', Traverse.preorder(t)))
    # [1, 2, 4, 5, 1]

    print(fmt('Postorder Traversal: ', Traverse.postorder(t)))
    # [4, 5, 2, 3, 1]

    print(fmt('Inorder Traversal: ', Traverse.inorder(t)))
    # [4, 2, 5, 1, 3]

    print(fmt('Depth-first Traversal: ', Traverse.depth_first(t)))
    # [4, 5, 2, 3, 1]


if __name__ == '__main__':
    tests()
