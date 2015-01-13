# -*- coding: utf-8 -*-
"""
Created on Tue Jan 13 00:42:08 2015

@author: J


"""
from MyDevTools.scrape import get_soup, clean_list
import urllib2
from bs4 import BeautifulSoup


url = r'http://ycpweb.ycp.edu/schedule-of-classes/'

soup = get_soup(url)

terms = [term.get("value") for term in soup.find_all('option')
            if len(term.get("value")) == 6]
                    
schedules = [schedule.get("value") for schedule in soup.find_all('option')
                if len(schedule.get("value"))==1]

for _ in terms:
    print _
    
for _ in schedules:
    print _