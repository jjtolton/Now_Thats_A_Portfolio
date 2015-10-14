__author__ = 'jay'

class Behavior(object):

    def __init__(self, name=None, condition=None, action=None):
        self.action = action
        self.condition = condition
        self.name = name

    def triggered_by(self, *args, **kwargs):
        return self.condition(*args, **kwargs)

    def execute(self, *args, **kwargs):
        return self.action(*args, **kwargs)

    def handle(self, *args, **kwargs):
        raise NotImplementedError


class FizzBuzzBehavior(Behavior):

    def handle(self, *args, **kwargs):
        if self.triggered_by(*args, **kwargs):
            print self.execute(*args, **kwargs),


behavior_data = [('n', lambda x: isinstance(x, int), lambda n: n),
                 ('fizz', lambda x: x % 3 == 0, lambda n: 'Fizz!'),
                 ('buzz', lambda x: x % 5 == 0, lambda n: 'Buzz!')
                 ]

def main():
    behaviors = [FizzBuzzBehavior(*behavior) for behavior in behavior_data]
    for i in range(20):
        for behavior in behaviors:
            behavior.handle(i)
        print ''

if __name__ == '__main__':
    main()