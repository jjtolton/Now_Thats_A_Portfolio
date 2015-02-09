# -*- coding: utf-8 -*-
"""
Created on Tue Jan 13 02:42:53 2015

@author: J
"""

import shelve
import os
import shutil
import cPickle


ycp_courses = shelve.open('ycp_classes.db')

try:
    with open('backup_db.txt', 'w') as f:
        contents = str(ycp_courses.__repr__)
        f.write(contents)
#        cPickle.dump(contents, 'backup_pickle_db')
finally:
    ycp_courses.close()
    
print "Done"