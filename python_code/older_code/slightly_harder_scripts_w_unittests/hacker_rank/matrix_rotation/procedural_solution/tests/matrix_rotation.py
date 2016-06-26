import unittest

from python_code.older_code.slightly_harder_scripts_w_unittests.hacker_rank import matrix_rotation

__author__ = 'jay'


def get_formatted_output(expected_output_matrix):
    res = []
    for row in expected_output_matrix:
        res.append(' '.join(map(str, row)))
    return res


class AcceptanceTests(unittest.TestCase):
    def test_matrix_example_0(self):
        test_inputs = ['4',  # num rows
                       '5',  # num cols
                       '1',  # num rotations

                       # matrix
                       '1', '2', '3', '4',
                       '5', '6', '7', '8',
                       '9', '10', '11', '12',
                       '13', '14', '15', '16',
                       '17', '18', '19', '20'].__iter__()

        expected_output_matrix = [
            [2, 3, 4, 5, 10],
            [1, 8, 9, 14, 15],
            [6, 7, 12, 13, 20],
            [11, 16, 17, 18, 19]
        ]

        expected_res = get_formatted_output(expected_output_matrix)
        res = matrix_rotation.get_rotated_matrix(test_inputs)
        self.assertEqual(expected_res, res)

    def test_matrix_example_1(self):
        test_inputs = ['4',  # rows
                       '4',  # cols
                       '1',  # rotations

                       # matrix
                       '1', '2', '3', '4',
                       '5', '6', '7', '8',
                       '9', '10', '11', '12',
                       '13', '14', '15', '16'].__iter__()

        expected_output_matrix = [
            [2, 3, 4, 8],
            [1, 7, 11, 12],
            [5, 6, 10, 16],
            [9, 13, 14, 15]
        ]

        expected_res = get_formatted_output(expected_output_matrix)

        res = matrix_rotation.get_rotated_matrix(test_inputs)

        self.assertEqual(expected_res, res)


if __name__ == '__main__':
    unittest.main()
