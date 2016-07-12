# functional_tools

_An elegant weapon for a more civilized age..._

This folder demonstrates a _purely_ functional approach to Python.  Tackling certain problems, such as recursively
merging dictionaries, _without_ mutating the original dictionaries, is far more difficult (but far more beautiful) than
a similar function that uses mutations.

Some of these tools are better for their API than performance, while others, such as in the `precompyled` library, have saved
hundreds of hours of QA and developer time by borrowing concepts such as _monads_ (data, functions, and instructions for
execution all wrapped into one delicious functional burrito) from the functional community, and provide and elegant alternative to the `mock` module.

## tools.py
This module is inspired by the _toolz_ and _more_itertools_ libraries.
However, I noticed that the implementations of those libraries engage in a great deal of state-mutation and other
very _un_-functional behavior.  As such I rewrote large portions of the libraries
here more in keeping with the spirit of functional programming.

One of the crowning achievements of this module is a simple function that recursively merges two or more
dictionaries _without_ mutating either of the original dictionaries

```python
>>> d1 = {'a': {'b': 42}}
>>> d2 = {'a': {'c': 'taco'}}
>>> d3 = {'a': {2: [3, 4, 5]}}
>>> recursive_dict_merge(d1, d2, d3)
{'a': {'b': 42,
       'c': 'taco',
       2: [3, 4, 5]}
```
all in one simple recursive function
```python
def recursive_dict_merge(*ds):
    return merge_with(lambda a, b: recursive_dict_merge(a, b) if not terminal_dicts(a, b) else merge(a, b), *ds)
```

For comparison:

http://stackoverflow.com/questions/32264099/merge-python-dictionary-of-sets
http://stackoverflow.com/questions/2365921/merging-python-dictionaries
http://stackoverflow.com/questions/38987/how-can-i-merge-two-python-dictionaries-in-a-single-expression

## precompyled.py

The `precompyled` module uses the concept of _monads_ as an alternative to extensive mocking.  Often you will see a
function or method that may make multiple database calls or other things that make testing very difficult, and you have no
other choice but to write a mock.  Unfortunately, that can start looking like this:

```python

class HardToTest(unittest.TestCase):

    @mock.patch(mockfn1, mock.Mock())
    @mock.patch(mockfn2, mock.Mock())
    @mock.patch(mockfn3, mock.Mock())
    @mock.patch(mockfn4, mock.Mock())
    @mock.patch(mockfn5, mock.Mock())
    @mock.patch(mockfn6, mock.Mock())
    def test_db_con_method(self):
        ...
````

Unfortunately, I have seen code like this in *production* in **Fortune 100** companies!  Code like this leads to fragile
 with a greater-than-linear cost of change as time goes on.

With `precompyled`, you only need one `mock` again for the rest of your life:

```python

@mock.patch(path.to.module.precompyled.runall)
class HardToTest(unittest.TestCase):

    def test_db_con_method(self, run_mock):
        ...
```

This lets you save time on trivialities like configuring mocks and to get on to fun stuff like
adding features!!




## License

Copyright © 2016 James J. Tolton

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
