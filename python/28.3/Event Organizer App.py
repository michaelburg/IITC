from operator import getitem
from collections import OrderedDict
import re
from datetime import datetime
import json

# Serialize data into file:
def is_date_taken(date,events):
    for event in events:
        if events[event]['date']==date:
            return True
    return False
def is_valid_date(date):
    try:
        date=date.replace(' ','-')
        date=datetime.strptime(date, "%d-%m-%Y-%H:%M")
    except:
        pass
def name_input():
    name=input('please enter even name: ')
    return name
def location_input():
    location=input('please enter even location: ')
    return location
def date_input(events):
    while True:
        date=input("Enter date in DD-MM-YYYY HH:MM\n")
        try:
            is_valid_date(date)
            if not is_date_taken(date,events):
                return date
            else:
                print('this date is taket, pick another one')
        except:
            print('invalid date, try again')
def tag_input():
    tag=input('please enter even tag: ')
    return tag

def name_update(events,name):
    new_name=name_input()
    events[new_name] = events.pop(name)
def location_update(events,name):
    new_location=location_input()
    events[name]['location']=new_location
def date_update(events,name):
    new_date=date_input(events)
    events[name]['date']=new_date
def tag_update(events,name):
    new_tag=tag_input()
    events[name]['tag']=new_tag

def count_events_by_tags(events,tag):
    count=0
    for event in events:
        if events[event][tag]==tag:
            count+=1
    return count

def sort_by_date(events):
    sorted=OrderedDict(sorted(events.items(),
                         key = lambda x: getitem(x[1], 'date')))
    return sorted
def add_Attendee(name,events):
    while True:
        action=input('would you like to add attendee? (y/n): ')
        if action=='y':
            if len(events[name]['attendee'])==50:
                print('you reached the limit of 50 attendees')
            else:
                attendee=input('add attendee name: ')
                events[name]['attendee'].append(attendee)
        else:#if action=='n':
            break

def remove_Attendee(name,events,attendee_name):
    try:
        events[name]['attendee'].remove(attendee_name)
    except ValueError:
        print('attendee could not be found')

def is_attendee_exists(name,events,attendee_name):
    return attendee_name in events[name]['attendee'] 

def is_date_taken(date,events):
    for event in events:
        if events[event]['date']==date:
            return True
    return False


def creat_new_event(events):
    name=name_input()
    location=location_input()
    tag=tag_input()
    date=date_input(events)
    print(name,location,tag,date)
    events[name]={'tag':tag,'location':location,'date':date,'attendee':[]}
    print("""new event has been created:
          """,name, events[name])
    add_Attendee(name,events)
    sort_by_date(events)

def update_an_event(events):
    events_name=input('enter event name to uptade: ')
    action=int(input("""choose action:
          1. update name(1).
          2. update location(2).
          3. update date(3).
          4. update tag(4).
          5. update attendee list(5).       
          6. end update(any key)."""))
    if action==1:
        name_update(events,events_name)
    if action==2:
        location_update(events,events_name)
    if action==3:
        date_update(events,events_name)
    if action==4:
        tag_update(events,events_name)
    if action==5:
        add_Attendee(events,events_name)
    sort_by_date(events)
    print('event has been updated')
def save_to_file(events):
    json.dump(events, open( r"C:\IITC\python\28.3\events.txt", 'w' ))
def events_report(events):
    print(events)


def run():
    events={}
    events = json.load(open(r'C:\IITC\python\28.3\events.txt'))
    print("Welcome to the Event Organizer App!")
    while True:
        action=input("""choose action:
            1. create new event.
            2. update an event.
            3. check if Attendee exist.
            4. show events report.
                any other key to exit""")
        if action=='1':
            creat_new_event(events)
        elif action=='2':
            update_an_event(events)
        elif action=='3':
            events_report(events)#####
        elif action=='4':
            events_report(events)
        else:
            save_to_file(events)
            break

    


run()