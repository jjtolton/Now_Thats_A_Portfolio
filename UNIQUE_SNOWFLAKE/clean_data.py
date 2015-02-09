# -*- coding: utf-8 -*-
"""
Created on Mon Jan 12 22:36:21 2015

@author: J

clean data
"""

import urllib2
from bs4 import BeautifulSoup
import re
no_go_list = [chr(i) for i in xrange(100,256)]

patterns = [re.compile(chr(i)) for i in range(127,256)]
patterns.append('')
patterns.append('None')

def test():

    test_item = [
                  '21490',
                  'Financing\xa0Ent\xa0Vent',
                  '3.00',
                  'LEC',
                  'M\xa0W\xa0F\xa0\xa0',
                  'WBC\xa0225',
                  'March',
                  'M',
                  '25',
                  '15',
                  '10'
                  ]

    test_result = [
                  '21490',
                  'FinancingVent',
                  '3.00',
                  'LEC',
                  'M',
                  'WBC',
                  'March',
                  'M',
                  '25',
                  '15',
                  '10'
                  ]

    result = clean_items(test_item)
#    print result
    
test()

def clean_list(_list):
#    print _list
    new_list = []    
    for items in _list:
        new_list.append(clean_items(items))
    return new_list

def clean_items(items):
    _items = []    
    for item in items:
        _items.append(clean_item(item))
    _items = [item for item in _items if item != ''] 
    return _items
    
def clean_item(item):
    assert isinstance(item, str)
    for p in patterns:
        item = re.sub(p, '', item)
    return item

def get_soup(url):
    page = urllib2.urlopen(url)
    contents = page.read()
    soup = BeautifulSoup(contents)
    return soup
def scrape_page(url):
    soup = get_soup(url)
    courses = [str(course) for course in soup.find_all('td')]
    segmented_courses = segment_courses(courses)
    processed_courses = clean_list(segmented_courses)
    return processed_courses
    
def segment_courses(courses):
    isolate_pattern = 'valign="top">.*?(?=</td>)'
    pattern1= '<br/>.*</div>'
    pattern2= 'valign="top">'
    pattern3 = '<br/>'
    gather_pattern = '[0-9]{5}.*?(?=[0-9]{5})'
    
    to_remove = [re.compile(p) for p in (pattern1,pattern2,pattern3)]
    p = re.compile(isolate_pattern)
    s_courses = ' '.join(courses)
    new_courses = re.findall(p, s_courses)
    for p in to_remove:
        new_courses = [re.sub(p, '', course) for course in new_courses]
    new_courses = re.findall(gather_pattern, ' '.join(new_courses))
    new_courses = [course.split(' ') for course in new_courses]
#    print new_courses
    
    return new_courses
    
def pretty_courses(courses):
    for course in courses:
        print course
        
    
page = r'http://ycpweb.ycp.edu/schedule-of-classes/index.html?term=201420&stype=A&dmode=D&dept=ENT_03'

pretty_courses(scrape_page(page))
