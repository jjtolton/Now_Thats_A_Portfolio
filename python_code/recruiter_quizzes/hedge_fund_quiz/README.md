# QUIZ:

```
Please provide executable Python 2.7 code to fulfill the requirements of the questions below. For full score, code at least one working solution that requires no imports for each of the questions. You may mention additional shorter solutions that import from the 2.7 stdlib for extra points. 

Partial progress towards a solution will be scored, so it is better to provide code snippets or verbal outlines if possible.


1. Implement capitalized() such that:

    @capitalized
    def string_returning_function():
        return "foo"

    string_returning_function()  #=> "FOO"


2. Implement a decorator compose(*funcs) which accepts an arbitrary number of functions arguments. Each of those functions takes a single argument, and returns a single value. The compose() decorator should composes them, in left to right order, with the decorated function. For example, composing 3 functions will look like:

    @compose(func1, func2, func3)
    def func0(param):
        return val

    func0(arg)  #=> func3(func2(func1(func0(arg))))


3. Implement Words() such that it accepts a path to a file containing a sequence of ASCII characters of total length <= 1TB, and returns an iterable over each subsequence of contiguous English letters within that sequence:

    for word in Words(file_path):
        # word is a subsequence of contiguous English letters

3a. How would your answer to question 3 change if the files are encoded in UTF-8 instead of ASCII? Would it make a difference if your target platform is Python 3.3 instead of 2.7 in this case?


4. Let S be the set of all integers x where 1 <= x <= n. Implement a callable f(n) that accepts a positive integer n, returning the number of all sets of distinct subsets S1 and S2 that can be extracted from S such that (S1 | S2 == S) and (S1 & S2 == set()) and (sum(S1) == sum(S2)). For example:

INPUT: n=3
S: {1, 2, 3}
OUTPUT: 1
VALID SETS: [{{1, 2}, {3}}]

4a. What are the time and space efficiencies of your solution?

4b. Suppose your f() implementation must run every time a human user makes a request to a single modern web server, and finish before a response can be sent back; can you estimate the largest practical value of n your implementation supports in that case?

4c. Can you think of a way to improve the time and space efficiencies of f()?  If so, code (or at least describe) this improved solution, estimate its efficiencies, and the new practical upper limit it allows for n in the server scenario above.


5. You are investigating the performance of arithmetic operations in Pandas and Numpy and run the following performance test. You find that processing df1 takes more than twice as long as df2 (around 1.9 to 0.6 seconds, respectively). Suggest explanations for the difference in performance, and/or how you might further investigate.

    import time
    import pandas as pd
    
    a1 = pd.Series((100, 1, None, 65))
    a2 = pd.Series((-85, -234, 32, 104))
    b = pd.Series((205.3, 3.5, 234.3, 8403.32))
    
    df1 = pd.DataFrame({'a':a1, 'b':b})
    df2 = pd.DataFrame({'a':a2, 'b':b})
    
    for df in (df1, df2):
        t = time.time()
        for x in range(int(1e4)):
            df['a'] * df['b']
        print(time.time() - t)
```