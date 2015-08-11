

# TODO: Take a look at the "main entry point section" below.  In actual production code, programs are called from the
# command line (not something ever covered in a curriculum, so I included sample code below)
# Although we're going to end up scrapping this, I'm going to annotate the function to help you achieve
# what you were going for
def temperature_converter():
    prompt_1 = raw_input(
        'For conversions from Farenheit to Celcius enter F.  For conversions from Celcius to Farenheit enter C '
        # '\n'
    )

    # TODO: instead of writing 'print', include '\n' to the line above.  This causes the computer to print a "newline".
    # Uncomment the '\n' and get rid of the print statement below -- you'll see what I mean
    print

    if prompt_1 == 'F':
        prompt_2 = raw_input('Enter temperature in Farenheit')

        # TODO: see comment about '\n' above
        print

        # TODO: here what you are going for is
        # assert isinstance(prompt_2, int)
        #
        # Although this (type checking using assertion statements) is a very common technique/pattern,
        # you should actually avoid doing this and structure your programs in such a way that explicitly
        # fail if the user enters the wrong input
        #
        # In this case, however, you know that the user will be entering a command from the command line,
        # so you will be receiving input from "standard input" or "stdin" -- aka, text -- therefore
        # you know you have to convert any integer or float inputs from strings to ints/floats, so doing a
        # type-casting operation is appropriate here, and if the user puts in something like "hello"
        # this will cause it to fail since float("hello") will result in an error
        if prompt_2 == int:
            # store this as a variable with a return statement instead of printing, see note below
            # TODO: you need to pass prompt_2 as an argument to conversion_1, so
            # do something like this: conversion_1(prompt_2)
            print conversion_1

    # TODO: same comments from above
    elif prompt_1 == 'C':
        prompt_2 = raw_input('Enter temperature in Celcius')  # use '\n'

        # don't use empty print statements
        print

        # prompt_2 = float(prompt_2)
        if prompt_2 == int:
            # conversion_2(prompt_2)
            print conversion_2

    else:
        # TODO: kill this an handle with try/except -- but don't, since we handle it elsewhere, just
        # be aware that's normally how it's done :)
        print "This is not a valid unit of temperature measurement"


# TODO: Rename "conversion_1" this to something easier to understand, like get_celsius_from_farht or
# c2f or something like that
# TODO: Rename "prompt_2" to something that is immediately obvious, like celsius or farenheit or c or f
def conversion_1(prompt_2):
    temp_c = (prompt_2 - 32) * (5 / 9)
    # TODO: change this print statement to a return statement (you want to handle the printing operation outside of
    # the function wherever possible -- returning a value lets you store it and manipulate it.  Once you
    # use a print statement, it's the end of the road
    print temp_c


# TODO: See above
def conversion_2(prompt_2):
    temp_f = (prompt_2 + 32) * (9 / 5)
    print temp_f


#  Added this error handling class for reasons that I'll explain at our next session
class MultipleInputsError(Exception):
    pass


class ConversionType(object):
    C2F = 0
    F2C = 1

def temp_converter_2(conversion_type, conversion_value):
    if conversion_type == ConversionType.C2F:
        conv

if __name__ == '__main__':