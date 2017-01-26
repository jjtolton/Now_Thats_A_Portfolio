

# if imports were allowed:

# from functools import wraps
#
#
# def decorator(fn):
#     @wraps(fn)
#     def wrapped(*args, **kwargs):
#         return fn(*args, **kwargs)
#     return wrapped
#
# decorator = decorator(decorator)

# @decorator

def capitalized(fn):
    def _capitalized():
        return fn().upper()

    return _capitalized


@capitalized
def string_returning_function():
    return "foo"

if __name__ == '__main__':
    print(string_returning_function())