# -*- coding: utf-8 -*-
"""
Created on Tue Jan 13 16:01:22 2015

@author: J
"""

import doctest
class Test:"""
>>> indexof('bob', 'bacbob')
3
>>> indexof('acb', 'bacbob')
1
>>> indexof('', 'bacbob')
0
>>> indexof('ob', 'bacob')
3
>>> indexof('bo', 'bacob')
-1
>>> indexof('bob', 'obobo')
1
>>> indexof('bilbo baggins', "bilbow's last name is bilbo baggins the hobbit")
22
"""
print doctest.testmod()


def indexof(s, sub):
    if not s:
        return 0
    for i in range(len(sub)-len(s)+1):
        if s[0] == sub[i]:
            for j in range(len(s)):
                if s[j] == sub[i+j]:
                    continue
                elif s[j] != sub[i+j]:
                    break
            else:
                return i
    return -1
    
def main():
    assert indexof('bob', 'bacbob') == 3
    assert indexof('acb', 'bacbob') == 1
    assert indexof('', 'bacbob') == 0
    assert indexof('ob', 'bacob') == 3
    assert indexof('bo', 'bacob') == -1
    assert indexof('bob', 'obobo') == 1
    assert indexof('bilbo baggins', "bilbow's last name is bilbo baggins the hobbit") == 22

if __name__ == '__main__':

     main()