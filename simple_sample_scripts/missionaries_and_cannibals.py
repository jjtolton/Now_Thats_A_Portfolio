# -*- coding: utf-8 -*-
"""
Created on Tue Jan 27 21:13:50 2015

@author: J

TL;DR:  Djikstra's algorithm application

Cannibals and Missionaries

Diagram
         boat
MMM CCC [___]
-------~~~~~~~~~~~~~~~-----------
 land   ~ ~ ~   ~~ ~ ~   land
       ~~~~~~~~~~~~~~~
          river
          
M - Missionary
C - Cannibal

The goal of missionaries and cannibals is to get all the cannibals 
and all the missionaries to the other side of the river (without anyone
getting eaten!)

Rules:
    --Only one or two people can cross in the boat
    --If the cannibals ever outnumber the missionaries,
      the cannibals will eat the missionaries


Data Structures
---------------

Path
    Path = {
        'history' : tuple
        'current' : str
    }

"""

import numpy as np


def get_successors(p, initial_state):
    """Possible moves from current state to next state
    in missionarries and cannibals.

    Example state:
    state = (left side missionaries, #int
             left side cannibals,    #int
             right side missionaries,#int
             right side cannibals,   #int
             boat                    #boolean (True for left, False for right)
             )
    
    """
    start = initial_state['current']
    max_m, max_c = start[0] + start[2], start[1] + start[3]
    path = p
    state = path['current']
    history = path['history']
    moves = [0, 1, 2]
    new_states = []
    #    print "\t",path
    boat_left = not path['current'][4]
    #    print boat_left
    if boat_left:
        new_states = [list(state + np.array([-a, -b, a, b, 0]))[:-1] + [1]
                      for a in moves for b in moves
                      if 1 <= a + b <= 2]
    else:
        new_states = [list(state + np.array([a, b, -a, -b, 0]))[:-1] + [0]
                      for a in moves for b in moves
                      if 1 <= a + b <= 2]
    # print "\t\t", new_states
    new_states = [list(new_state) for new_state in new_states]
    new_states = [new_state for new_state in new_states
                  if 0 <= new_state[0] <= max_m
                  if 0 <= new_state[1] <= max_c
                  if 0 <= new_state[2] <= max_m
                  if 0 <= new_state[3] <= max_c
                  if new_state[0] == 0 or \
                  new_state[0] >= 1 and \
                  new_state[0] >= new_state[1]
                  if new_state[2] == 0 or \
                  new_state[2] >= 1 and \
                  new_state[2] >= new_state[3]]
    #    for new_state in new_states:
    #        print "Possible state:",new_state
    for new_state in new_states:
        new_state = tuple(new_state)
        new_path = {
            'history': history + (new_state,),
            'current': new_state
        }
        yield new_path


def shortest_path_search(initial_state, end_state):
    """Returns shortest path from initial_state to end_state via
    get_successor_func.    
    """
    initial_path = {

        'history': (initial_state,),
        'current': initial_state
    }
    frontier = [initial_path]
    previous = set([initial_state])
    with open(r'C:\Users\J\Desktop\ladders.csv', 'w'):
        pass
    while frontier:
        #        print frontier
        frontier = sorted(frontier,
                          key=lambda path: len(path['history']),
                          reverse=True
                          )

        path = frontier.pop()
        if path['current'] == end_state:
            return path
            break
        else:
            new_paths = get_successors(path, initial_path)
            for new_path in new_paths:
                if new_path['current'] not in previous:
                    previous.add(new_path['current'])
                    frontier.append(new_path)
    else:
        return False


def prettyPrint(p):
    """Print the path in a readable format"""
    if p == False:
        print "No solution."
        return None
    history = p['history']
    counter = 1
    for m1, c1, m2, c2, boat in history:
        print "\tMove:", counter
        print """\n\t\tLeft bank:                     Right bank:  
              Missionaries:  {}               Missionaries: {}  
              Cannibals:     {}               Cannibals:    {}  
              Boat:          {}               Boat:         {}\n\n""".format(
            m1,
            m2,
            c1,
            c2,
            True if boat == 0 else False,
            False if boat == 0 else True
        )
        counter += 1


def main():
    start_state = (3, 3, 0, 0, 0)
    end_state = (0, 0, 3, 3, 1)

    p = shortest_path_search(start_state, end_state)
    prettyPrint(p)


if __name__ == '__main__':
    main()
