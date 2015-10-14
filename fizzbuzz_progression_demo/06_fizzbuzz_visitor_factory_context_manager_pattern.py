__author__ = 'jay'


class Visitor(object):
    def visit(self, other):
        raise NotImplementedError


class FizzBuzzObject(Visitor):
    def __init__(self, n):
        self.n = n

    def visit(self, other):
        pass


class Fizzer(FizzBuzzObject):
    def visit(self, other):
        return other.fizz(self.n)


class Buzzer(FizzBuzzObject):
    def visit(self, other):
        return other.buzz(self.n)


class FizzBuzzer(FizzBuzzObject):
    def visit(self, other):
        return other.fizz_buzz(self.n)

class Selfie(FizzBuzzObject):
    def visit(self, other):
        return other.return_self(self.n)

class FizzBuzzIntFactory(object):
    def __init__(self):
        fizzer = 1, 0
        buzzer = 0, 1
        fizz_buzzer = 1, 1
        selfie = 0, 0
        self.classes = {
            fizzer: Fizzer,
            buzzer: Buzzer,
            fizz_buzzer: FizzBuzzer,
            selfie: Selfie

        }

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        pass

    def assembly_line(self, l):
        for n in l:
            yield self.create(n)

    def create(self, n):
        return self.classes.get(self.test(n))(n)

    @staticmethod
    def test(i):
        return i % 3 == 0, i % 5 == 0


class Printer(object):
    def accept(self, other):
        return other.visit(self)

    @staticmethod
    def return_self(n):
        return str(n),

    def fizz(self, n):
        return self.return_self(n)[0], 'Fizz!'

    def buzz(self, n):
        return self.return_self(n)[0], 'Buzz!'

    def fizz_buzz(self, n):
        return self.return_self(n)[0], self.fizz(n)[1], self.buzz(n)[1]


def main():
    printer = Printer()
    with FizzBuzzIntFactory() as factory:
        for i in factory.assembly_line(range(20)):
            for item in printer.accept(i):
                print item,
            print ''


if __name__ == '__main__':
    main()
