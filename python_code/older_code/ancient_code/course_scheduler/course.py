import sys

class course:
    def __init__(self, times=None, credits=0, name='', seriesLabel='default'):
        self.dayStr = ''
        self.days = []
        if times is None:
            self.times = []
        self.name = name
        self.credits = credits
        self.seriesLabel = seriesLabel

    def __repr__(self):
        dayStringsLst = []
        dayStringsLst += ['Course Title: {}'.format(self.name)]
        dayStringsLst += '\n'
        for i in range(5):
            string = "Day {}:  {:10}, {:10}\n".format(i, self.times[i][0], self.times[i][1])
            dayStringsLst += [string]
        return ''.join(dayStringsLst)

    def setName(self):
        self.name = input("Enter course name: ")

    def setDays(self):
        fridayInt = 5
        counter = 1
        while not fridayInt:
            newDayStr = input("Enter day #{}".format(counter))
            if newDayStr != '' and newDayStr == ('M' or 'T' or 'W' or 'R' or 'F'):
                self.days += [newDayStr]

    def setTimes(self):
        days = list('MTWRF')
        for day in days:
            timeStartStr = input("Enter start time for {}".format(day))
            timeEndStr = input("Enter end time for day {}".format(day))
            self.times += [timeStartStr, timeEndStr]

    def conflictsWith(self, otherCourse):
        days = otherCourse.times
        start = 0
        end = 1
        seriesLabel = self.seriesLabel
        otherSeriesLabel = otherCourse.seriesLabel

        if seriesLabel == otherSeriesLabel:
            return True

        for day in days:
            dayNum = days.index(day)
            startTime = self.times[dayNum][start]
            endTime = self.times[dayNum][end]
            if day[start] == 0 or day[end] == 0 or startTime == 0 or endTime == 0:
                continue
            if startTime <= day[start] <= endTime:
                # print 'conflict'
                return True
            if startTime <= day[end] <= endTime:
                return True
                # print 'conflict2'
        return False


if __name__ == '__main__':
    course1times = [
        [10.5, 12],  # M
        [0, 0],  # T
        [10.5, 12],  # W
        [0, 0],  # R
        [10.5, 12]  # F
    ]

    course2times = [
        [0, 0],
        [0, 0],
        [10, 10.6],
        [0, 0],
        [0, 0]
    ]

    c1 = course(course1times, name='poopface', seriesLabel='notDefault')
    c2 = course(course2times)

    # print c1
    print(c1.conflictsWith(c2))
