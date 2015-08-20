__author__ = 'jay'


# ------------------ decorators

def gen2list(f):
    """
    Accumulates a generator expression into a list
    :param f: generator expression
    :return list:
    """

    @wraps(f)
    def inner(*args, **kwargs):
        res = []
        for x in list(f(*args, **kwargs)):
            res.append(x)
        return res

    return inner


# ------------ general helper functions

def get_inputs(test_inputs=None):
    """
    Note: this will only work on the hackerrank website, no correlation to real life Python
    :return:
    """

    if not test_inputs:
        while True:
            try:
                x = raw_input().split()
                for y in x:
                    yield y
            except EOFError:
                break
    else:
        for test_input in test_inputs:
            yield test_input


# --------------- general matrix manipulation functions

@gen2list
def print_matrix(matrix, printer=False):
    for row in matrix:
        output = ' '.join(map(str, row))
        if printer:
            print output
        yield output


@gen2list
def get_matrix(rows, cols, inputs):
    for r in range(rows):
        row = []
        for c in range(cols):
            n = int(inputs.next())
            row.append(n)
        yield row


def transpose_matrix(matrix):
    if matrix:
        n_cols = len(matrix[0])
        n_rows = len(matrix)

        res = []
        for col in range(n_cols):
            new_row = []
            for row in range(n_rows):
                new_row.append(matrix[row][col])
            res.append(new_row)

        while matrix:
            matrix.pop()

        for row in res:
            matrix.append(row)


# --------- ring manipulation functions

def get_outer_ring(matrix):
    """

    Outer ring refers to outside of matrix
    Example (labels == side structures)
               top
          |  1  2  3 |
     left |  4  5  6 | right
          |  7  8  9 |
              bottom

    The outer ring is describe clockwise starting from top right.  In this example,
    the outer ring would be [1, 2, 3, 6, 9, 8, 7, 4, 1]

    For reasons of recreating the initial data structure and for simplicity of creating the ring
    data structure, the ring is kept in the form of side structures.  In this case

    top == [1, 2, 3]
    right == [6]
    bottom == [7, 9, 9]
    left == [4]

    Therefore
    Outer ring = [top, right, bottom[::-1], left[::-1]]

    Note that the bottom and left need to be reversed to maintain clockwise order.
    Depending on outer ring's number of rows,the resulting ring may have 4, 3, 2, or 1 "sides".
    :param matrix:
    :return ring:
    """
    ring = []

    # get top
    if matrix:
        top = matrix.pop(0)
        ring.append(top)

    # get bottom
    if matrix:
        bottom = matrix.pop()
        ring.append(bottom)

    # get right
    if matrix:
        # transpose matrix and get "top" (formerly right) row
        transpose_matrix(matrix)
        assert isinstance(matrix, list)
        right = matrix.pop()
        ring.append(right)

    # get left
    if matrix:
        # get "bottom" (formerly left) row
        left = matrix.pop(0)
        transpose_matrix(matrix)
        ring.append(left)
    else:
        transpose_matrix(matrix)

    return ring


def get_packed_ring(ordered_ring, unpacked_ring):
    c = 0
    for row in range(len(ordered_ring)):
        for n in range(len(ordered_ring[row])):
            ordered_ring[row][n] = unpacked_ring[c]
            c += 1
    packed_ring = [list(side) for side in ordered_ring]
    return packed_ring


def get_originally_ordered_ring(packed_ring):
    num_sides = len(packed_ring)

    if num_sides == 4:
        top, right, bottom, left = 0, 1, 2, 3
        original_order = top, bottom, right, left
    elif num_sides == 3:
        top, middle, bottom = 0, 1, 2
        original_order = top, bottom, middle
    elif num_sides == 2:
        top, bottom = 0, 1
        original_order = top, bottom
    else:
        original_order = 0

    ring = [packed_ring[i] for i in original_order]
    return ring


def get_rotated_ring(r, ring):
    # unpack into list -- should read like a spiral
    ordered_ring = get_ordered_ring(ring)
    unpacked_ring = get_unpacked_ring(ordered_ring)

    rotor = deque(unpacked_ring)
    rotor.rotate(-r)
    unpacked_ring = list(rotor)

    packed_ring = get_packed_ring(ordered_ring, unpacked_ring)
    return packed_ring


def get_unpacked_ring(ordered_ring):
    unpacked_ring = []
    for group in ordered_ring:
        for n in group:
            unpacked_ring.append(n)
    return unpacked_ring


def get_ordered_ring(ring):
    """

    sides refers to sides of matrix or ring ---

               top
          |  1  2  3 |
     left |  4  5  6 | right
          |  7  8  9 |
              bottom

    top == [1, 2, 3]
    right == [6]
    bottom == [9, 8, 7] < -- reversed to preserve clockwise readability
    left == [4] <--- also "reversed" but the reverse of a one element list is itself
    """
    num_sides = len([x for x in ring if x])
    if num_sides == 4:
        # ring order -- the way the outer ring algorithm
        # peels off the sides
        top, right, bottom, left = 0, 1, 2, 3
        ordered_ring = [ring[top],  # top
                        ring[bottom],  # right
                        ring[right][::-1],  # bottom
                        ring[left][::-1]]  # left

    elif num_sides == 3:

        # ring order -- the way the outer ring algorithm
        # peels off the sides
        top, bottom, middle = 0, 1, 2
        ordered_ring = [ring[top],  # top
                        ring[middle],  # middle
                        ring[bottom]]  # bottom,**

        # **Note: the only way I can imagine this happening is
        # three single element rows, in which case reversing the bottom row is
        # an unnecessary operation

    elif num_sides == 2:

        # ring order -- the way the outer ring algorithm
        # peels off the sides

        top, bottom = 0, 1
        ordered_ring = [ring[top],
                        ring[bottom][::-1]]

    else:
        # single row only
        ordered_ring = [ring]

    return ordered_ring


def get_rotated_rings(r, rings):
    rings = [get_rotated_ring(r, ring) for ring in rings]
    return rings


# ------------------------ scripts

@gen2list
def get_rings(matrix):
    while True:
        if not matrix:
            break
        outter_ring = get_outer_ring(matrix)
        yield outter_ring


def get_matrix_from_rings(rows, cols, rings):
    matrix_groups = []
    for ring in rings[::-1]:
        group_len = len(ring)

        if group_len == 4:
            top, right, bottom, left = 0, 1, 2, 3
            group_order = top, bottom, left, right

            matrix_group = [ring[i] if i < 2 else ring[i][::-1]
                            # bottom and left need to be reversed to maintain clockwise
                            # restructuring
                            for i in group_order]

            transpose_matrix(matrix_groups)

            matrix_groups.append(matrix_group.pop())  # get right
            matrix_groups.insert(0, matrix_group.pop())  # get left

            transpose_matrix(matrix_groups)
            matrix_groups.append(matrix_group.pop())  # get bottom
            matrix_groups.insert(0, matrix_group.pop())  # get top

        # TODO: does this ever happen?
        if group_len == 3:
            raise NotImplementedError

        if group_len == 2:
            top, bottom = 0, 1

            # bottom needs to be reversed to maintain clockwise restructuring
            matrix_group = [ring[top], ring[bottom][::-1]]

            # the only way a group length 2 would happen is if this is the "core" of the matrix,
            # so matrix_groups will be [] --> simply extend matrix_groups
            matrix_groups.extend(matrix_group)

    matrix_vals = []
    for matrix_group in matrix_groups:
        for n in matrix_group:
            matrix_vals.append(n)

    matrix = get_matrix(rows, cols, matrix_vals.__iter__())
    return matrix
