# -*- coding: utf-8 -*-
"""
Created on Sun Jan 11 16:03:40 2015

@author: J

Combinatorial Optimization

    9 gallon jug, 6 gallon jug.  How to get 5 gallons of water in 
    9 gallon jug.
    
    Allowed moves:  
        Pour from 9 to 6
        Pour from 6 to 9
        Fill 6
        Fill 9
        Dump 6
        Dump 9
"""
from MyDevTools.MyDebug import trace, disabled, timeIt

trace = disabled


def water_pouring_problem(big_start, little_start, big_vol, little_vol, solution):
    
    start_vol = {
            'big' : big_start,
            'little' : little_start
    }
    
    
    def little_pour(vol):
#        print vol
        assert isinstance(vol, dict)
        assert len(vol) == 2
        vol = dict(vol.items())
        old_vol = vol['big']
        vol['big'] += vol['little']
        vol['big'] = vol['big'] if vol['big'] <= big_vol else big_vol
        vol['little'] -=  big_vol-old_vol
        vol['little'] = vol['little'] if vol['little'] > 0 else 0
        return vol

    def big_pour(vol):
        vol = dict(vol.items())
        old_vol = vol['little']
        vol['little'] += vol['big']
        vol['little'] = (vol['little'] if vol['little'] <= 
                                    little_vol else little_vol)
        vol['big'] -=  little_vol-old_vol
        vol['big'] = vol['big'] if vol['big'] > 0 else 0
        return vol
    
#    @trace    
    def dump_big(vol):
        vol = dict(vol.items())
        vol['big'] = 0
        return vol
    
#    @trace
    def dump_little(vol):
        vol = dict(vol.items())
        vol['little'] = 0
        return vol

    def fill_big(vol):
        vol = dict(vol.items())
        vol['big'] = big_vol
        return vol
        
    def fill_little(vol):
        vol = dict(vol.items())
        vol['little'] = little_vol
        return vol

    @trace
    def successors(successor):
        successor = dict(successor.items())
        assert isinstance(successor, dict)
#        assert len(successor) == 1
#        assert len(successor.keys()) == 1
#        assert len(successor.values()) == 1
        
        """Successor data type is dictionary.  
        
                Key is "history", value is "current volume"
                
        Successor performs action on each succssor and appends "action"
        to history.
        
        """
        
        _successors = {}
        
        actions = [ 
                        little_pour, 
                        big_pour,
                        dump_big,
                        dump_little,
                        fill_big,
                        fill_little,
        ]
        
        history, vol = None, None
        for k,v in successor.items():
            history, vol = k,v
#            print history, vol
        
#        history = list(history)
        for action in actions:
#            print history, vol
#            print type([history])
#            print type(history), type((action.__name__,))
            new_history = history + (action.__name__,)
#            new_history = tuple([history]+[action.__name__])
            _successors[new_history] = action(vol)
        """
        example_successor = {
        
            "history" :  {
                                "big" : '<some_vol>',
                                "little" : '<some_other_vol>'
            
            }
        }
        """
        assert isinstance(_successors, dict)
        return _successors

    def test():
        test_vol = {
                        "big" : 5,
                        "little" : 5
        }        
        
        
        little_pour_result = {       
        
                    "big" : 9,
                    "little" : 1
        }
        
        try:
            assert little_pour(test_vol) == little_pour_result        
            print "little pour test okay"
        except:
            print little_pour(test_vol).items()
            return False
                
        big_pour_test_vol = {
        
                    "big" : 5,
                    "little" : 5
        }        
        
        try:
            assert big_pour(test_vol) == big_pour_test_vol
            print "big_pour test okay"
        except:
            print big_pour(test_vol).items()
            return False
            
        dump_big_test_vol = {
        
                    "big" : 0,
                    "little" : 5
    
        
        }
        
        try:
            
            assert dump_big(test_vol) == dump_big_test_vol
            print "dump_big test okay"
        except:
            print dump_big(test_vol).items()
            return False
        
        dump_little_test_vol = {
         
                     "big" : 5,
                    "little" : 0
        }
        
        try:
            assert dump_little(test_vol) == dump_little_test_vol
            print "dump_little test okay"
        except:
            print "trace: ", test_vol            
            print dump_little(test_vol).items()
            return False
            
        
        test_successor =  {
        
            ("history",) :{
            
                            "big" : 5,
                            "little" : 5
            }
        }  

        
        result_vol = {

            ("history", "little_pour") : {
                                "big" : 9,
                                "little" : 1
            },
            ("history", "big_pour") : {
                                "big" : 5,
                                "little" : 5
            },   
            ("history", "dump_big") : {
                                "big" : 0,
                                "little" : 5
            },   
            ("history", "dump_little") : {
                                "big" : 5,
                                "little" : 0
            },    
            ("history", "fill_big") : {
                                "big" : 9,
                                "little" : 5
            },
            ("history", "fill_little") : {
                                "big" : 5,
                                "little" : 5
            }    
        
        }

        try:
            assert successors(test_successor) == result_vol
        except AssertionError:
            for k,v in successors(test_successor).items():
                print k,v
            print '==================='
            for k,v in result_vol.items():
                print k,v
            return False
        print "all tests okay"
        return True

#    if not test():
#        return False
    previous = {}
    paths = [successors({('start',):start_vol})]
#    print paths
#    print 'PATHS', paths
    
    def new_round(paths):
#        """ path --> (history) : {volumes : values} """
#                                """keys off length of history"""
#                                """start with shortest path first"""
        paths = sorted(
                                    [path for path in paths],
                                    key = lambda path: len(path.keys()[0]),
                                    reverse = True
                                )
#        print "EXEC ORDER:", execution_order
        _new_paths = []
        for i in range(len(paths)):
            path = paths.pop()
#            print path
            assert isinstance(path, dict)
            new_paths = successors(path)
#            for new_path in new_paths:
#                print new_path
            """new_path --> (history) : {sizes : volumes} """
            for history, vol in new_paths.items():
#                if solution in vol:
#                    return history, vol
                if not previous.get(tuple(vol.values())):
                    previous[tuple(vol.values())] = history
                    _new_paths.append({history:vol})
    
#            for path in paths:
#                """
#                   Example path: { "history" : "value" }     
#                """                        
        return _new_paths
    

    def find_path(paths, max_steps):
        steps = 0
        while paths and steps < max_steps:
            steps += 1            
            paths = new_round(paths)
            for path in paths:
                """path --> (history) : {volumes : values}"""
                for history, vol in path.items():
                    if solution in vol.values():
              
                        return history, vol
        return False
    
    return find_path(paths, 1000)
    
def prettify_output(shortest_):
    if shortest_ == False:
        print "No path found.  For more information," + \
                "visit www.failblog.org"

    else:
        """shortest path --> (history) : {volumes : values}"""
        path = list(shortest_[0])
        while path:      
            if path:
                for i in range(4):
                    if path:
#                        print path
                        print path.pop(0) + '-->',
                    else:
                        print "------>",
                print ""
                print "                                                      \\"
                print "                                                       |"
                print "______________________________________________________/"
                print "/"
                print "|"
                print "V"
        print shortest_[1]
    

        
            
        
    
#@trace
#@timeIt
def main():
#    water_pouring_problem(0,0,14,5,6)
    start_vol_1, start_cap_1 = 0,9
    start_vol_2, start_cap_2 = 0,5
    goal = 6
    
    solution = water_pouring_problem(
                            start_vol_1,
                            start_vol_2,
                            start_cap_1,
                            start_cap_2,
                            goal
    )
    
    print solution
#                            start_vol_1,
#                            start_vol_2,
#                            start_cap_1,
#                            start_cap_2,
#                            goal                            
#    )
    
if __name__ == '__main__':
    import doctest
    class Test:""">>> water_pouring_problem(82,53,171,37,8)
(('start', 'fill_little', 'dump_little', 'big_pour', 'dump_little', 'big_pour'), {'big': 8, 'little': 37})

>>> water_pouring_problem(0,0,4,9,5)
(('start', 'fill_little', 'little_pour'), {'big': 4, 'little': 5})

>>> water_pouring_problem(82,53,171,37,8)
(('start', 'fill_little', 'dump_little', 'big_pour', 'dump_little', 'big_pour'), {'big': 8, 'little': 37})

>>> water_pouring_problem(0,0,0,0,0)
(('start', 'fill_little', 'fill_little'), {'big': 0, 'little': 0})

>>> water_pouring_problem(0,0,9,6,5)
False

>>> water_pouring_problem(0,0,9,4,5)
(('start', 'fill_little', 'dump_little', 'fill_big', 'big_pour'), {'big': 5, 'little': 4})
    """
    print doctest.testmod()
    main()
    