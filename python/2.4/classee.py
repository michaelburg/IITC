import math
import random
class Circle():
    def __init__(self, radius):
        self.radius=radius
    def area(self):
        return math.pi * self.radius ** 2
    def perimeter(self):
        return 2 * math.pi * self.radius

class Square():
    def __init__(self, side):
        self.side=side
    def area(self):
        return self.side**2
    def perimeter(self):
        return self.side*4
class Card():
    def __init__(self, value,suit):
        self.value=value
        self.suit=suit
    def __str__(self):
        print (self.value,self.suit)

class Card_deck(Card):
    def __init__(self):
        self.cards=[]
        for suit in ['Hearts', 'Diamonds', 'Clubs', 'Spades']:
            for value in ['A','2','3','4','5','6','7','8','9','10','J','Q','K']:
                self.cards.append(Card(value,suit))
    def deal_card(self):
        return self.cards.pop()
    def shuffle(self):
        random.shuffle(self.cards)
    def __str__(self):
        for card in self.cards:
            print(card.value,card.suit)

class Person():
    def __init__(self,first_name, last_name, gender, age, height, weight):
        self.first_name=first_name
        self.last_name=last_name
        self.gender=gender
        self.age=age
        self.height=height
        self.weight=weight
    def person_info(self):
        return {'first_name':self.first_name, 'last_name':self.last_name,' gender':self.gender,' age':self.age,' height':self.height,' weight':self.weight}
    def BMI(self):
        return self.weight/(self.height**2)
    

# class Shape():
    
class Job():
    def __init__(self,job,salary,manager=False):
        self.job=job
        self.salary=salary
        self.manger=manager
    def is_manager(self):
        if self.manager:
            self.salary=self.salary*3
class Workplace(Person,Job):
    def __init__(self,Person,Pob):
        self.Person=Person
        self.Job=Job

class number():
    def __init__(self,number):
        self.number=number
    def int_to_roman(self):
        new=''
        number=self.number
        thousands = self.number // 1000
        hundreds = (self.number % 1000) // 100
        tens = (self.number % 100) // 10
        units = self.number % 10
        print(thousands,hundreds,tens,units)
        new+='M'*thousands
        #######
        if hundreds==9:
            new+='CM'
            hundreds=0
        elif hundreds==4:
            new+='CD'
            hundreds=0
        elif hundreds>=5:
            new+='D'
            hundreds-=5
        new+='C'*hundreds
        #######
        if tens==9:
            new+='XC'
            tens=0
        elif tens==4:
            new+='XL'
            tens=0
        elif tens>=5:
            new+='L'
            tens-=5
        new+='X'*tens
        #######
        if units==9:
            new+='IX'
            units=0
        elif units==4:
            new+='IV'
            units=0
        elif units>=5:
            new+='V'
            units-=5
        new+='I'*units
        return new
        
    def int_to_roman(self):
        roman=['M','CM','D','CD','C','XC']


number=number(1594)
new=number.int_to_roman()
print(new)
