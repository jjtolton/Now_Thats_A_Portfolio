from itertools import combinations as combo

import lib.scheduling.coursesSpring2014
from lib.scheduling.coursesSpring2014 import optics, mech2, mech1
from schedule import schedule as sched


class scheduler:
    creditConflicts = 0
    timeConflicts = 0
    courseConflicts = 0
    numCourses = 0
    minCredits = 13
    maxCredits = 19
    
    def __init__(self, possibleCourses = [], minCredits = 13, maxCredits = 19):
        self.possibleCourses = possibleCourses
        self.minCredits = minCredits
        self.maxCredits = maxCredits
        self.schedules = self.makePossibleSchedules()

        
    def __repr__(self):
        numCourses = 'Total possible schedules: {}\n'.format(self.numCourses)
        conf1 = 'Course Conflicts: {}\n'.format(self.courseConflicts)
        conf2 = 'Credit Conflicts: {}\n'.format(self.creditConflicts)
        conf3 = 'Time Conflicts: {}\n'.format(self.timeConflicts)
        schedl = self.schedules
        outputLst = [numCourses,conf1,conf2,conf3,schedl]
        outputStrLst = map(str,outputLst)
        return ''.join(outputStrLst)
        
    def makePossibleSchedules(self):
        courses = self.possibleCourses
        possibleSchedules = []
        schedules = []
        ##Create combinations of classes, calculate class credits
        for i in range(4,8):
            possibleSchedules += combo(courses, i)
            
        possibleSchedules = [list(courseLst) for courseLst in possibleSchedules]
        tmpSchedules = []
        
        for i in range(len(possibleSchedules)):
            newSchedule = sched(possibleSchedules[i], schedNum = i, minCredits = self.minCredits, maxCredits = self.maxCredits)
            tmpSchedules += [newSchedule]
        possibleSchedules = tmpSchedules
        
        self.numCourses = len(possibleSchedules)
        #print 'Possible Schedules', possibleSchedules
        counter = 0
        for schedule in possibleSchedules:
            counter += 1
            #print '.',
            
            if not schedule.hasNoConflicts():
                self.timeConflicts += 1
            elif not schedule.creditsOkay():
                self.creditConflicts += 1
            elif not self.hasAllSeries(schedule):
                self.courseConflicts += 1
            else:
                schedules += [schedule]
        #print counter
        return schedules
        
    def hasAllSeries(self, schedule):
        seriesDic = dict()
        courseSeries = []
        for course in self.possibleCourses:
            if seriesDic.get(course.seriesLabel, False) == False:
                seriesDic[course.seriesLabel] = True
        for course in schedule.courses:
            courseSeries += [course.seriesLabel]
        for label in seriesDic.keys():
            if label not in courseSeries:
                #print 'powrightinthekisser'
                return False
        return True

if __name__ == '__main__':
    courses = [mech1,
               mech2,
               lib.scheduling.coursesSpring2014.mech3,
               optics,
               lib.scheduling.coursesSpring2014.Algo1,
               lib.scheduling.coursesSpring2014.Algo3,
               lib.scheduling.coursesSpring2014.midEast,
               lib.scheduling.coursesSpring2014.pardist]

    schedule = scheduler(possibleCourses=courses)
    print(schedule)