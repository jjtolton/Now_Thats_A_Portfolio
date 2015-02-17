
# -*- coding: utf-8 -*-
"""
Created on Sat Feb  7 09:14:00 2015

@author: jay

Pig


state = {

        'current state' : <state>,
        'current action' : action,
        'history' : <history>

}

"""

import unittest
from MyPerformanceTools import memo

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
    
def get_successors(path, goal):
    turn, p1_score, p2_score, p1_pending, p2_pending = path['state']
    if p1_score + p1_pending >= goal or p2_score + p2_pending > goal:
        print "DING"
        return None
    history = path['history']
    action = path['action']
    new_states = []    
#    probability = 1.0/6 if not probability else probability / 6.0
    player_1 = not turn
    player_2 = turn
    rolls = []
    holds = []  
    
    """assuming player pigs out"""
    roll_1 = (0 if player_2 else 1, 
              p1_score+1 if player_1 else p1_score, 
              p2_score+1 if player_2 else p2_score,
              0,
              0)
#              probability)
    new_action = '{} pigs out'.format("P1" if player_1 else "P2")
    roll_1_path = {
    
            'state' : roll_1,
            'action' : new_action,
            'history': (history) + (new_action,)
    
    }
#    print roll_1
    for i in xrange(2,7):
        """assuming player rolls again"""
        new_state_roll = (
                          turn, #keep player
                          p1_score,
                          p2_score,
                          p1_pending + i if player_1 else 0,               #my score
                          p2_pending + i if player_2 else 0,              #your score
                                                                  #pending points
#                          probability       #probability
                          )
        new_action = '{} rolls {}'.format("P1" if player_1 else "P2", i)                          
        new_path_roll = {
                'state': new_state_roll,
                'action': new_action,
                'history': (history,) + (new_action,)
        
        }
        """assuming player rolls and holds"""
        new_state_hold = (
                          0 if player_2 else 1, #change player
                          p1_score+i+p1_pending if player_1 else p1_score, 
                          p2_score+i+p2_pending if player_2 else p2_score,
                          0,
                          0
#                          probability
                          )
        new_action = '{} holds at {}'.format("P1" if player_1 else "P2",
                                            p1_score+i+p1_pending if player_1 else 
                                            p2_score+i+p2_pending)
        new_path_hold = {
                            'state' : new_state_hold,
                            'action' : new_action,
                            'history' : (history,) + (new_action,)
        }
#        print new_state_hold
            
        rolls.append(new_path_roll)
        holds.append(new_path_hold)
        
    
    new_states = [roll_1_path,]
    new_states.extend(rolls)
#    new_states.extend(holds)
    return new_states

#for state in get_successors((1,36,39,0,0)):
#    print (1,36,39,2,0),"---->", state    

@memo
def P(path, goal, player, previous):
    winners = []
    losers = []
    debug = []
    prev = set()
    frontier = [path]
    player_1 = 0
    player_2 = 1
    counter = 50
    while frontier and counter:
        counter -= 1
        path = frontier.pop()
        if not path:
            continue
        state = path['state']
        turn, p1_score, p2_score, p1_pending, p2_pending = state
        p1_turn = not turn
        p2_turn = turn 
        print path
        if p1_score + p1_pending >= goal:
            winners.append(path)
        elif p2_score + p2_pending >= goal:
            losers.append(path)
        else:
            for new_path in get_successors(path, goal):
                debug.append(path)
                if new_path['history'] not in previous:
                        previous.add(new_path['history'])
                        frontier.append(new_path)
    num_winners = len(winners)
    num_losers = len(losers)
    
    p_p1 = 0
    for winner in winners:
        path_length = len(winner['history'])
        p_path = (1.0/6)**path_length
        p_p1 += p_path
    
    with open('/home/jay/probability.txt', 'wb') as f:
        for winner in winners:
            f.write("{},{}\n".format(winner['state'],winner['action']))
        
        for loser in losers:
            f.write("\t{},{}\n".format(loser['state'], loser['action']))
            
        for bug in debug:
            f.write("\t\t\t"+str(bug)+"\n")
        
        f.write("Number winners: " + str(len(winners))+"\n")
        f.write("Number losers: " + str(len(losers))+"\n")
        f.write("Winning ratio: " + str(float(len(winners))/(len(winners) + len(losers))))
    return 1 - p_p1

        
#    
#def P_recursive(i_state, i_player, cur_state, goal, player):
#    if 

def test():
    test_state_1 = (0,36,39, 2, 0)
    test_path_1 = {
            
                    'state' : test_state_1,
                    'action' : 'start',
                    'history' : ('start',)
    
    }
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
#    assert get_successors(test_state_1, goal) == res_1
#    print "tests pass"
#    for _ in get_successors(test_path_1, goal):
#        print _['state'], _['action']
    previous = set()
    print P(test_path_1, goal, 0, previous)
    
def main():
    test()

        
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