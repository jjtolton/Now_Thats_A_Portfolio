import sys
from course import *

opticsTimes = [   #start, end
                [13,13.83],   #M
                [0,0],        #T
                [13,13.83],   #W
                [0,0],        #R
                [13,13.83]    #F
              ]

midEastTimes = [
                    [10,10.83],
                    [0,0],
                    [10,10.83],
                    [0,0,],
                    [10,10.83]
                ]
                
abnormalPsychTimes2 = [
                        [0,0],
                        [11,12.25],
                        [0,0],
                        [11,12.25],
                        [0,0]
                    ]

algoTimes1 = [
                [10,10.83],
                [0,0,],
                [10,10.83],
                [0,0],
                [10,10.83]
]

dataTimes = [
                [0,0],
                [0,0],
                [18.5, 21.5],
                [0,0],
                [0,0]

]

data1 = course(dataTimes, 3, "database", "database")

#algo1 = course(algoTimes1, 3, )

midEast = course(midEastTimes, 3, 'midEast', 'midEast')
abpsych2 = course(abnormalPsychTimes2, 3, 'abpsych2', 'abpsych')


EE1Times = [   #start, end
                [11,12.75],   #M
                [0,0],   #T
                [11,12.75],   #W
                [0,0],   #R
                [11,12.75]   #F
              ]

EE = course(EE1Times, 4, 'EE', 'EE')

CE1Times = [   #start, end
                [0,0],   #M
                [2,3.25],   #T
                [0,0],   #W
                [2,3.25],   #R
                [0,0]   #F
              ]
              
CE1 = course(CE1Times, 4, 'CE1', 'CE')

CE1LabTimes = [   #start, end
                [0,0],   #M
                [11,13.75],   #T
                [0,0],   #W
                [0,0],   #R
                [0,0]   #F
              ]

CELab = course(CE1LabTimes, 0, 'CELab', 'CELab')

CE2LabTimes = [   #start, end
                [0,0],   #M
                [8,10.75],   #T
                [0,0],   #W
                [0,0],   #R
                [0,0]   #F
              ]
CE2Lab = course(CE2LabTimes, 0, 'CE2Lab', 'CELab')


CE3LabTimes = [   #start, end
                [0,0],   #M
                [0,0],   #T
                [0,0],   #W
                [8,10.75],   #R
                [0,0]   #F
              ]    
CE3Lab = course(CE3LabTimes, 0, 'CE2Lab', 'CELab')

Math1Times = [   #start, end
                [0,0],   #M
                [0,0],   #T
                [11,12.75],   #W
                [0,0],   #R
                [11,12.75]   #F
              ]

Math1 = course(Math1Times, 3, 'Math1', 'Math')

Math2Times = [   #start, end
                [0,0],   #M
                [0,0],   #T
                [15,16.25],   #W
                [0,0],   #R
                [15,16.25]   #F
              ]

Math2 = course(Math2Times, 3, 'Math2', 'Math')
            
Math3Times = [   #start, end
                [9,10.25],   #M
                [0,0],   #T
                [9,10.25],   #W
                [0,0],   #R
                [9,10.25]   #F
              ]

Math3 = course(Math3Times, 3, 'Math3', 'Math')
                            
SE1Times = [   #start, end
                [9,9.83],   #M
                [0,0],   #T
                [9,9.83],   #W
                [0,0],   #R
                [9,9.83]   #F
              ]
              
SE1 = course(SE1Times, 3, 'SE1', 'SE')

SE2Times = [   #start, end
                [11,11.83],   #M
                [0,0],   #T
                [11,11.83],   #W
                [0,0],   #R
                [11,11.83]   #F
              ]
              
SE2 = course(SE2Times, 3, 'SE2', 'SE')

SE3Times = [   #start, end
                [13,13.83],   #M
                [0,0],   #T
                [13,13.83],   #W
                [0,0],   #R
                [13,13.83]   #F
              ]

SE3 = course(SE3Times, 3, 'SE3', 'SE')

Algorithms1Times = [   #start, end
                [13,13.83],   #M
                [0,0],   #T
                [13,13.83],   #W
                [0,0],   #R
                [13,13.83]   #F
              ]
Algo1 = course(Algorithms1Times, 3, 'Algo1', 'Algo')

Algorithms2Times = [   #start, end
                [10,10.83],   #M
                [0,0],   #T
                [10,10.83],   #W
                [0,0],   #R
                [10,10.83]   #F
              ]     
Algo2 = course(Algorithms2Times, 3, 'Algo2', 'Algo')

Algorithms3Times = [   #start, end
                [11,11.83],   #M
                [0,0],   #T
                [11,11.83],   #W
                [0,0],   #R
                [11,11.83]   #F
              ]              

Algo3 = course(Algorithms3Times, 3, 'Algo3', 'Algo')

mech1Times = [
                [9,10.75],
                [0,0],
                [9,10.75],
                [0,0],
                [9,10.75]
            ]
            
mech2Times = [
                [11,12.75],
                [0,0],
                [11,12.75],
                [0,0],
                [11,12.75]
            ]
            
mech3Times = [
                [14,15.75],
                [0,0],
                [14,15.75],
                [0,0],
                [14,15.75]
            ]
            
pardistTimes = [

                [0,0],
                [14,15.25],
                [0,0],
                [14,15.25],
                [0,0]
]

pardist = course(pardistTimes, 0, 'parDist', 'parDist')
mech1 = course(mech1Times, 4, 'Mech1', 'Mech')
mech2 = course(mech2Times, 4, 'Mech2', 'Mech')
mech3 = course(mech3Times, 4, 'Mech3', 'Mech')
optics = course(opticsTimes, 3, 'optics', 'optics')
