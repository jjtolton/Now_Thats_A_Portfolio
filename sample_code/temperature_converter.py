__author__ = 'jay'

# Simple script for converting temperatures.  Can handle xargs command line input


def c2f(c):
    f = 9.0 / 5 * c + 32
    return f


def f2c(f):
    c = (f - 32) * 5.0 / 9.0
    return c


if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description='Converts Celisus to Fahrenheit and vice-versa')

    parser_args = {
        '-c2f': {'action': 'store', 'nargs': '*', 'default': [], 'help': 'Convert Celsius to Fahrenheit'},
        '-f2c': {'action': 'store', 'nargs': '*', 'default': [], 'help': 'Convert Fahrenheit to Celsius'}
    }

    for parser_arg in parser_args:
        parser.add_argument(parser_arg, **parser_args[parser_arg])

    args = parser.parse_args()

    cel = args.c2f
    far = args.f2c

    if cel and far:
        raise ValueError("Please specify either -c2f OR -f2c, not both")

    if cel:
        for t in cel:
            print c2f(float(t))

    if far:
        for t in far:
            print f2c(float(t))
