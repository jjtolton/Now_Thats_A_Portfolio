
# -*- coding: utf-8 -*-
"""
Created on Sat Feb  7 09:14:00 2015

@author: jay

Pig

"""

import unittest

class Test_Suite(unittest.TestCase):
        def test_near_goal(self):
            goal = 40
            test_state = (0,36,39,0,0)
            res_1 = [
             (0, 36, 39, 1, 0.16666666666666666), 
             (0, 36, 39, 2, 0.16666666666666666), 
             (0, 36, 39, 3, 0.16666666666666666), 
             (0, 36, 39, 4, 0.16666666666666666), 
             (0, 36, 39, 5, 0.16666666666666666), 
             (0, 36, 39, 6, 0.16666666666666666), 
             (1, 37, 39, 0, 0.16666666666666666), 
             (1, 38, 39, 0, 0.16666666666666666), 
             (1, 39, 39, 0, 0.16666666666666666), 
             (1, 40, 39, 0, 0.16666666666666666), 
             (1, 41, 39, 0, 0.16666666666666666), 
             (1, 42, 39, 0, 0.16666666666666666), 
             (1, 37, 39, 0, 0.16666666666666666)
            ]
            
            res = get_successors(test_state, goal)
            self.assertEqual(res, res_1)
    
def get_successors(state, goal):
    turn, me, you, pending, probability = state
    new_states = []    
    probability = 1.0/6 if not probability else probability / 6.0
    player_1 = not turn
    player_2 = turn
    rolls = []
    holds = []  
    
    """assuming player pigs out"""
    roll_1 = (0 if player_2 else 1, 
              me+1 if player_1 else me, 
              you+1 if player_2 else you,
              0, 
              probability)


    for i in xrange(2,7):
        """assuming player rolls again"""
        new_state_roll = (
                          turn, #keep player
                          me,               #my score
                          you,              #your score
                          pending+i,        #pending points
                          probability       #probability
                          )
        """assuming player rolls and holds"""
        new_state_hold = (
                          1 if not turn else 0, #change player
                          me+i if not turn else me, 
                          you+i if turn else you, 
                          0, 
                          probability
                          )
        if (me+pending <= goal + 6 and you <= goal-1 or
            you+pending <= goal+6 and me <= goal-1):
            rolls.append(new_state_roll)
            holds.append(new_state_hold)
    new_states.extend(rolls)
    new_states.extend(holds)
    new_states.append(roll_1)
    return new_states

#for state in get_successors((1,36,39,0,0)):
#    print (1,36,39,2,0),"---->", state    

def P(state, goal, player):
    winning = []
    prev = set()
    frontier = [state]
    opponent = 0 if player else 1
    while frontier:
        state = frontier.pop()
#        print state
        turn, me, you, pending, probability = state
        if me == you == 39:
            print state
        player_score = state[1+turn] + pending
        opponent_score = state[2-turn]
        if turn == player and player_score >= goal and opponent_score < goal:
        
            winner = state
            winning.append(winner)
#            print winner
            
                
#        elif turn == opponent and 
        else:
            for new_state in get_successors(state, goal):
                if new_state not in prev and opponent_score < goal:
                    frontier.append(new_state)
                    prev.add(new_state)
#    for winner in winning:
#        print winner
    return sum(p for _,_,_,_,p in winning)
#    
#def P_recursive(i_state, i_player, cur_state, goal, player):
#    if 

def test():
    test_state_1 = (0,36,39,0,0)
    res_1 = [(0, 36, 39, 2, 0.16666666666666666), 
             (0, 36, 39, 3, 0.16666666666666666), 
             (0, 36, 39, 4, 0.16666666666666666), 
             (0, 36, 39, 5, 0.16666666666666666), 
             (0, 36, 39, 6, 0.16666666666666666), 
             (1, 38, 39, 0, 0.16666666666666666), 
             (1, 39, 39, 0, 0.16666666666666666), 
             (1, 40, 39, 0, 0.16666666666666666), 
             (1, 41, 39, 0, 0.16666666666666666), 
             (1, 42, 39, 0, 0.16666666666666666), 
             (1, 37, 39, 0, 0.16666666666666666)]
    goal = 40
    assert get_successors(test_state_1, goal) == res_1
    print "tests pass"
#    print get_succesors(test_state_1)
    
def main():
#    unittest.main()
    test()
#    for state in get_successors((0,0,0,0,0), 40):
#        turn, me, you, pending, probability = state
#        print state
#        output = (
#    "Player: {}\n".format("Player 1" if not turn else "Player 2") +
#    "Player 1 Points: {}\tPlayer 2 Points: {}\n".format(me,you) +
#    "Pending Points for Player {}: {}\n".format(1 if not turn else 2, pending) +
#    "Odds of this happening: {}\n".format(probability)
#    )
#        print output
    test_state = (0,36,39,2,0)
    test_state_2 = (0,32,10,0,0)
#    initial_state = (0,0,0,0,0)
#    test_goal = 20
    goal = 40
    player = 0
#    print P(test_state, goal, player)
#    print P(initial_state, test_goal, player)
    print P(test_state_2, goal, player)
    
        
    pass

def action_code(n):
    if n == 0:
        return "Initial State"
    if n == 1:
        return "Pig out!"
    if n >= 2:
        return "Player rolls a {}".format(n)
            
#    print P(initial_state, 40, 0)       
if __name__ == '__main__':
    main()