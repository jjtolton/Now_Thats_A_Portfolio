__author__ = 'jay'


def starter(nums):
    for n in nums:
        yield n, []


def selfie(items):
    for n, container in items:
        container.append(n)
        yield n, container


def fizzer(items):
    fizz = 'Fizz!'
    for n, container in items:
        if n % 3 == 0:
            container.append(fizz)
        yield n, container


def buzzer(items):
    buzz = 'Buzz!'
    for n, container in items:
        if n % 5 == 0:
            container.append(buzz)
        yield n, container


def printer(items):
    for _, container in items:
        for item in container:
            print item,
        print ''


def main():
    nums = range(20)
    _starter = starter(nums)
    _selfie = selfie(_starter)
    _fizzer = fizzer(_selfie)
    _buzzer = buzzer(_fizzer)
    printer(_buzzer)

if __name__ == '__main__':
    main()