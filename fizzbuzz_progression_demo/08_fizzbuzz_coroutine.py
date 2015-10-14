__author__ = 'jay'


class Task(object):
    def __init__(self, task, *args, **kwargs):
        self.task = task
        self.args = args
        self.kwargs = kwargs

    def execute(self):
        return self.task(*self.args, **self.kwargs)

    def __repr__(self):
        return self

class TaskManager(object):
    id = 0

    def __init__(self):
        self.tasks = []

    def update(self, task, *args, **kwargs):
        t = self.new(task, *args, **kwargs)
        self.tasks.append(t)

    def new(self, task, *args, **kwargs):
        t = Task(task, *args, **kwargs)
        t.id = TaskManager.id
        t.q = self.tasks
        TaskManager.id += 1
        return t

    def run(self):
        for task in self.tasks:
            result = task.execute()





def main():
    nums = range(20)
    mgr = TaskManager()
    for num in nums:
        mgr.update(printem, [num])
    mgr.tasks.insert(0, Fizzer())
    mgr.tasks.insert(2, Buzzer())

    for task in mgr.tasks:
        task.execute()


if __name__ == '__main__':
    main()
