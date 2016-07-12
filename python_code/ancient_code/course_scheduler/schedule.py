import sys
import itertools as it
from course import *


class schedule:
    def __init__(self, courses = [], schedNum = 0, minCredits = 13, maxCredits = 19):
        self.courses = courses
        self.totalCredits = self.calculateCredits()
        self.schedNum = schedNum
        self.minCredits = minCredits
        self.maxCredits = maxCredits
    def __repr__(self):
        courses = ['Schedule No: {}'.format(self.schedNum) + '\n' ]
        for course in self.courses:
            courses += ['\n']
            courses += [str(course)]   
        courses += ['Credits: {}\n'.format(self.totalCredits)]
        courses += ['----------------------------------------------\n']    
        
        return ''.join(courses)
        
    def calculateCredits(self):
        sum = 0
        for crse in self.courses:
            sum += crse.credits
        return sum
        
    def hasNoConflicts(self):
        coursePairs = it.combinations(self.courses, 2)
        for courseA, courseB in coursePairs:
            if courseA.conflictsWith(courseB):
                return False
        return True
        
    def minCreditsMet(self):
        return self.totalCredits >= self.minCredits
        
    def maxCreditsExceeded(self):
        return self.totalCredits >= self.maxCredits
        
    def creditsOkay(self):
        #print self.totalCredits, self.minCredits, self.maxCredits
        #print self.minCreditsMet(), self.maxCreditsExceeded()
        if self.minCreditsMet() and not self.maxCreditsExceeded():
            return True
        return False
        



if __name__ == '__main__':                        
    course1times = [
                        [10.5,12],  #M
                        [0,0],      #T
                        [10.5,12],  #W
                        [0,0],      #R
                        [10.5,12]   #F
                    ]
                    
    
    course2times = [
                        [10,10.5],
                        [0,0],
                        [0,0],
                        [0,0],
                        [0,0]
                    ]
    
                    
    c1 = course(course1times, credits = 14, name = 'poopface')
    c2 = course(course2times)
    
    sched = schedule([c1,c2])
    print sched
