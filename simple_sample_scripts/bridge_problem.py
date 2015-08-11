# -*- coding: utf-8 -*-
"""
Created on Mon Jan 19 21:18:57 2015

@author: J

TL;DR:  Djikstra's algorithm application


Bridge problem!

Diagram:

1 2 5 5 10
o o o o o
^ ^ ^ ^ ^ -~-~-~-~-~ 
--------- ==========------------
         |          |
         |          |
         ~~~~~~~~~~~~
         watery doom
         

The goal of the bridge problem is to get all of the explorers across the 
bridge in the fastest time possible so they can avoid being eaten
by cannibals who eat sub-optimal explorers.  

Rules:
   Each explorer can cross the bridge in a discrete amount of time.
   The bridge can only hold two people at a time.
   The group has one flashlight
   You need to have the flashlight to cross the bridge (it's dark)
   You can only traverse the bridge as fast as the slowest member of the pair
   
Datatypes:

   state_history = set()
   
   frontier = []
   
   state = (left_side,      #tuple of ints
            right_side,     #tuple of ints
            torch_position, #Boolean => True -> left; False -> right
            cum_time)       #int
   path = {
      
           'current state' : state
           'cumulative time': integer
           'history' : [list of states] <--functions like stack

          }

The main function below is updated so that instead of getting 
everyone accross, it causes the explorers on the left
to switch with the exploreres on the right, so if 
some explorers start on the right, the end up on the left.
If no explorers start on the right, all explorers cross
to the right.
"""

import itertools as it


def main():
    state_history = set()
    """state_format = (left_side,right_side, cumulative_time)"""

    """get inputs, format to frozenset"""
    """NOTE:  The program uses set notation for speed --
    so no repeated numbers, for now --> the only effect of 
    repeated numbers is to add number*repetition minutes to
    the final accumulated time"""
    left_side = 1, 2, 7, 10
    left_side = frozenset(left_side)
    right_side = 5
    right_side = frozenset(right_side)

    """set initial state"""
    initial_state = (left_side, right_side, True, 0)
    initial_path = {
        'current state': initial_state,
        'cumulative time': 0,
        'history': [initial_state]
    }

    """initialize frontier"""
    frontier = [initial_path]

    """set goal"""
    goal = (right_side, left_side,)

    """while loop with maximum loop depth"""
    counter = 0
    max_depth = 3000
    while frontier and counter < max_depth:

        """promote paths with shorted times to end of list
        to guarantee getting shorted time"""
        frontier = sorted(
            frontier,
            key=lambda path: path['cumulative time'],
            reverse=True
        )

        """get path with shortest time"""
        path = frontier.pop()
        for new_path in get_successors(path):
            if new_path['current state'][:2] == goal:
                print "Success! {} paths explored.".format(counter)
                return new_path
            elif str(new_path['current state'][:3]) not in state_history:
                frontier.append(new_path)
                state_history.add(str(new_path['current state'][:3]))
                counter += 1
    return None


def get_successors(p):
    """Generates an iterator of successive paths from given path p"""
    assert isinstance(p, dict)

    """instance variables"""
    cur, c_time, hist = 'current state', 'cumulative time', 'history'
    left, right, torch, time = p[cur]
    crossers = None

    """what side torch is on determines which side crosses;
    creates iterator of all possible combinations of crossings"""
    if torch:
        crossers = it.chain(
            it.combinations(left, 2),
            it.combinations(left, 1)
        )
    else:
        crossers = it.chain(
            it.combinations(right, 2),
            it.combinations(right, 1)
        )

    while crossers:
        cr = frozenset(crossers.next())

        """general function using set notation to have crossers
        cross sides -- 
        if a side doesn't have the crossers (side-cr==side), add them (side^cr);
        if it has the crossers, make them cross (side-cr)"""
        adjust = lambda side: (side ^ cr if side - cr == side
                               else side - cr)

        """adjust sides"""
        new_left, new_right = adjust(left), adjust(right)

        """causes torch to change sides"""
        new_torch = not torch

        """time of slowest person"""
        new_time = time + max(cr)

        """format updated data into new state/path"""
        new_state = (new_left, new_right, new_torch, new_time)
        new_path = {
            cur: new_state,
            c_time: new_time,
            hist: p[hist] + [new_state]
        }
        yield new_path


def test():
    cur, c_time, hist = 'current state', 'cumulative time', 'history'
    test_state = ({1, 2}, frozenset(), True, 0)
    test_path_1 = {
        cur: test_state,
        c_time: 0,
        hist: [test_state]
    }
    res_state_1 = ({2}, {1}, False, 1)
    res_state_2 = ({1}, {2}, False, 2)
    res_state_3 = (frozenset(), {1, 2}, False, 2)
    res_path_1 = {
        cur: res_state_1,
        c_time: 1,
        hist: [test_state, res_state_1]
    }
    res_path_2 = {
        cur: res_state_2,
        c_time: 2,
        hist: [test_state, res_state_2]

    }
    res_path_3 = {
        cur: res_state_3,
        c_time: 2,
        hist: [test_state, res_state_3]

    }

    test_frontier = [test_path_1]
    res_successors = [res_path_3, res_path_2, res_path_1]

    test = sorted(
        list((x for x in get_successors(test_path_1))),
        key=lambda path: path['cumulative time'],
        reverse=True
    )
    res = res_successors

    try:
        assert test == res
        print "get_successors test pass"
    except AssertionError:
        print "get_successors test FAIL"


def print_pretty(path):
    print "History:"
    for item in path['history']:
        left, right, torch, minutes = item
        left = "Left: {:<15}".format(','.join(map(str, sorted(list(left)))))
        right = "Right: {:<15}".format(','.join(map(str, sorted(list(right)))))
        torch = "Torch: {:<7}".format("Left" if torch
                                      else "Right")
        minutes = "Time: {}".format(minutes)
        print "    {:>15}{:>15}{:^9}{:<15}".format(
            left,
            right,
            torch,
            minutes

        )
    print "---------"
    print "Final State:"
    left, right, torch, minutes = path['current state']
    left = "Left: {:<15}".format(','.join(map(str, sorted(list(left)))))
    right = "Right: {:<15}".format(','.join(map(str, sorted(list(right)))))
    torch = "Torch: {:<7}".format("Left" if torch
                                  else "Right")
    minutes = "Time: {}".format(minutes)
    print "    {:>15}{:>15}{:^9}{:<15}".format(
        left,
        right,
        torch,
        minutes

    )
    print "Total time:"
    print "   {:<2} minutes".format(path['cumulative time'])


if __name__ == '__main__':
    test()
    x = main()
    if x:
        print_pretty(x)
