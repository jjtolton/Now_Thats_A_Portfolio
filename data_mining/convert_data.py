# -*- coding: utf-8 -*-
"""
Created on Tue Jan 13 03:49:47 2015

@author: J
"""

from time_converter import convert_time

"""example output"""
opticsTimes = [   #start, end
                [13,13.83],   #M
                [0,0],        #T
                [13,13.83],   #W
                [0,0],        #R
                [13,13.83]    #F
              ]

"""example input"""
example_input = [
                     '20001',
                     'ANT210.101',
                     'PhysicalAnthropol',
                     '3.00',
                     'LEC',
                     'MWF',
                     '10:00AM-10:50AM',
                     'LS305',
                     'Becker',
                     'S',
                     '20',
                     '8',
                     '12',
                     '01/21/15-05/14/15'
 ]

"""future example output"""
optics_future = {
                  'CRN' : '20001',
                  'Course' : 'ANT210.101',
                  'Title' : 'PhysicalAnthropol',
                  'Credits' :    '3.00',
                  'Type' :    'LEC',
                  'Days' :    'MWF',
                  'Times' :    '10:00AM-10:50AM',
                  'LOC' :    'LS305',
                  'Instructor' : 'Becker S',
                  'Seats' : '20',
                  'Open' :  '8',
                  'Enrolled' :  '12',
                  'Dates' :  '01/21/15-05/14/15',
                  'Year' : '(0,15)',
                  'times' :  {
                               "M" : [13,13.83],   #M
                               "T" : [0,0],        #T
                               "W" : [13,13.83],   #W
                               "R" : [0,0],        #R
                               "F" : [13,13.83]    #F
                               }
            }

def convert_data(data_in):
    times = convert_time(data_in[6])
    days = data_in[5]
    schedule = [times ]

def convert_days(days, times):
    """example dates: "MWF", "TR", "R", etc"""
    conversions = {
                    'M' : 0,
                    'T' : 1,
                    'W' : 2,
                    'R' : 3,
                    'F' : 4
    }
    new_day = []
    for i in range(5):
        new_day.append([0,0])
    for day in days:
        new_day[conversions[day]] = times
        
    return new_day

def convert_future(data_input, schedule):
    """Converts data, schedule, to standardized data format"

    "example output"
    opticsTimes = [   #start, end
                    [13,13.83],   #M
                    [0,0],        #T
                    [13,13.83],   #W
                    [0,0],        #R
                    [13,13.83]    #F
                  ]
    
    "example input"
    example_input = [
                     '20001',
                     'ANT210.101',
                     'PhysicalAnthropol',
                     '3.00',
                     'LEC',
                     'MWF',
                     '10:00AM-10:50AM',
                     'LS305',
                     'Becker',
                     'S',
                     '20',
                     '8',
                     '12',
                     '01/21/15-05/14/15'
                     ]

    "future example output"
    optics_future = {
                  'CRN' : '20001',
                  'Course' : 'ANT210.101',
                  'Title' : 'PhysicalAnthropol',
                  'Credits' :    '3.00',
                  'Type' :    'LEC',
                  'Days' :    'MWF',
                  'Times' :    '10:00AM-10:50AM',
                  'LOC' :    'LS305',
                  'Instructor' : 'Becker S',
                  'Seats' : '20',
                  'Open' :  '8',
                  'Enrolled' :  '12',
                  'Dates' :  '01/21/15-05/14/15',
                  'Year' : '(0,15)',
                  'times' :  {
                               "M" : [13,13.83],   #M
                               "T" : [0,0],        #T
                               "W" : [13,13.83],   #W
                               "R" : [0,0],        #R
                               "F" : [13,13.83]    #F
                               }
            }

    """
    
    years = 
    
    data = (
                crn,
                course,
                title,
                _credits,
                _times,
                loc,
                instructor,
                seats,
                _open,
                enrolled,
                dates,
                year_data,
                schedule
    ) = [d for f in data_input] + [year_data,schedule]  
    
    
    data_output = {
                      'CRN' : crn,
                      'Course' : course,
                      'Title' : title,
                      'Credits' :    _credits,
                      'Type' :    _type,
                      'Days' :    days,
                      'Times' :    _times,
                      'LOC' :    loc,
                      'Instructor' : instructor,
                      'Seats' : seats,
                      'Open' :  _open,
                      'Enrolled' :  enrolled,
                      'Dates' :  dates,
                      'Year' : year_data,
                      'times' :  schedule
        
    
    
    }    
    
    
def main():
    print len(example_input)
    """time is inp[6]"""
    t = convert_time(example_input[6])
    d = convert_days(example_input[5], t)
    for _d in d:
        print _d
    
if __name__ == '__main__':
    main()