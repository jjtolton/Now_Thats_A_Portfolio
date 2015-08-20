# __author__ = 'jay'
#
# Problem Statement
#
# Machines have again attacked the kingdom of Zions!
# The kingdom of Zions has N cities and N-1 bidirectional roads.
# There is a unique path between any pair of cities.
#
# Morpheus has found out that K Machines are planning to destroy the whole kingdom.
# These Machines are initially living in K different cities of the kingdom and they can launch an attack at anytime.
# Morpheus has asked Neo to destroy some of the roads in the kingdom to disrupt all
# connection among the Machines. After destroying the necessary roads there should be no path between any two Machines.
#
# Since the attack may happen at any moment,
# Neo has to do this task as fast as possible. Each road in the kingdom takes a certain amount
# of time to destroy and only one road can be destroyed at a time.
#
# You need to write a program that tells Neo the minimum amount of time he will require to destroy the necessary roads.
#
# Input Format
# The First line of the input contains two, space-separated integers, N and K. Cities are numbered 0 to N-1.
#
# N-1 lines follow, each containing three space-separated integers, x y z,
# which means there is a bidirectional road connecting city x and city y,
# and to destroy this road it takes z units of time.
#
# K lines follow, each containing an integer. The ith integer is the id of the city in which
# the ith Machine is currently located.
#
# Output Format
# Print in a single line the minimum time required to disrupt the connection among Machines.
#
# Constraints
#
# 2 <= N <= 100,000
#
# 2 <= K <= N
#
# 1 <= time to destroy a road <= 1000,000
#
# Sample Input
#
# 5 3
# 2 1 8
# 1 0 5
# 2 4 5
# 1 3 4
# 2
# 4
# 0
# Sample Output
#
# 10
# Explanation
# Neo can destroy the road connecting city 2 and city 4 of weight 5 ,
# and the road connecting city 0 and city 1 of weight 5. As only one road can be destroyed at a time,
# the total minimum time taken is 10 units of time. After destroying these roads none of the Machines
# can reach another Machine via any path.
import unittest
import mock
from functools import wraps


class TestWriter(object):

    def __init__(self, f_out=None):
        self.f_out = f_out
        self.f_obj = None

    def __enter__(self):
        if self.f_out:
            self.f_obj = open(self.f_out, 'w')
        else:
            raise ValueError("TestWriter output file not specified")


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


def get_one_int(inputs):
    return int(inputs.next())


def get_num_cities(inputs):
    return get_one_int(inputs)


def get_num_machines(inputs):
    return get_one_int(inputs)


def get_city_data(num_cities, inputs):
    for i in range(num_cities):
        yield list(yield_n_items(3, inputs))


def yield_n_items(n, items):
    for i in range(n):
        yield items.next()


def get_machine_locations(num_machines, inputs):
    return yield_n_items(num_machines, inputs)


def get_paths_to_destroy(city_data, machine_locations):
    pass


def main():
    inputs = get_inputs()
    num_cities = get_num_cities(inputs)
    num_machines = get_num_machines(inputs)
    city_data = get_city_data(num_cities, inputs)
    machine_locations = get_machine_locations(num_machines, inputs)
    paths_to_destroy = get_paths_to_destroy(city_data, machine_locations)
    path_destruction_sequences = get_path_destruction_sequences(paths_to_destroy)
    time_to_destroy = get_fastest_time_to_destroy_paths(path_destruction_sequences)


class TestZionUnderAttack(unittest.TestCase):

    def setUp(self):
        self.test_inputs = list('12345').__iter__()
        self.city_data = ['0', '1', '10',
                          '2', '3', '20',
                          '5', '7', '42',
                          '2', '1', '7'].__iter__()

        self.machine_data = ['0', '3', '7'].__iter__()

class TestUtilityFunctions(TestZionUnderAttack):

    def test_get_inputs_yields_inputs(self):
        expected_res = list('12345')
        res = list(get_inputs(self.test_inputs))
        self.assertEqual(expected_res, res)

    def test_get_one_int_returns_one_input(self):
        expected_res = 1
        res = get_one_int(self.test_inputs)
        self.assertEqual(expected_res, res)

    def test_get_num_machines_returns_one_input(self):
        expected_res = 1
        res = get_num_machines(self.test_inputs)
        self.assertEqual(expected_res, res)

    def test_get_num_cities_returns_one_int(self):
        expected_res = 1
        res = get_num_cities(self.test_inputs)
        self.assertEqual(expected_res, res)

    def test_get_city_data_yields_n_items(self):
        num_cities = 4

        expected_res = [['0', '1', '10'],
                        ['2', '3', '20'],
                        ['5', '7', '42'],
                        ['2', '1', '7']]

        res = list(get_city_data(num_cities, self.city_data))
        self.assertEqual(expected_res, res)

    def test_yield_n_items_yields_n_items(self):
        num_items = 4
        expected_res = map(str, range(1, 5))
        res = list(yield_n_items(num_items, self.test_inputs))
        self.assertEqual(expected_res, res)

    def test_get_machine_locations_yields_n_items(self):
        num_machines = 3
        expected_res = map(str, range(1, 4))
        res = list(get_machine_locations(num_machines, self.test_inputs))
        self.assertEqual(expected_res, res)

class TestGetPathsToDestroy(unittest.TestCase):

    '''    self.city_data = ['0', '1', '10',
                          '2', '3', '20',
                          '5', '7', '42',
                          '2', '1', '7'].__iter__()

        self.machine_data = ['0', '3', '7'].__iter__()
    '''
    def test_get_paths_to_destroy(self):

        expected_res = ['']
