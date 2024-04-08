class Airline():
    def __init__(self,name):
        self.name=name
        self.routes=[]
        self.planes=[]
        self.pilots=[]
    def buy_plane(self, manufacturer, model,year):
        self.planes.append(Plane(manufacturer, model,year))
    def add_route(self,start_point,end_point,distance):
        self.routes.append(route(start_point,end_point,distance))
    def hire_pilot(self,name,expirience,profetion='pilot'):
        self.pilots.append(employe(name,profetion,expirience))
    def __str__(self):
        print(self.name)
        for rout in self.routes:
            rout.__str__()
        for plane in self.planes:
            plane.__str__()
        for pilot in self.pilots:
            pilot.__str__()
        



class Plane():
    def __init__(self, manufacturer, model,year):
        self.manufacturer=manufacturer
        self.model=model
        self.year=year
        self.max_fuel_capsity=1000
        self.fuel=0
        self.km=0
    def start_engin(self):
        self.is_on=True
    def stop_engin(self):
        self.is_on=False
    def start_cruise(self):
        self.cruise=True
    def stop_cruise(self):
        self.cruise=False
    def add_fuel(self):
        self.is_tank_full=True
    def open_wheels(self):
        self.wheels=True
    def close_wheels(self):
        self.wheels=False
    def __str__(self) -> str:
        print(self.manufacturer,self.model,self.year,self.km)

class route():
    def __init__(self,start_point,end_point,distance):
        self.start_point=start_point
        self.end_point=end_point
        self.distance=distance
    def __str__(self):
        print(self.start_point,self.end_point,self.distance)

class employe():
    def __init__(self,name,profetion,expirience):
        self.profetion=profetion
        self.expirience=expirience
        self.name=name
    def __str__(self):
        print(self.profetion,self.expirience,self.name)
        
        
my_airline=Airline(input('name your company: '))
# my_route=route('il','us',1000)
my_airline.buy_plane(input('manufacturer: '), input('model: '),input('year :'))
my_airline.add_route(input('start_point'),input('end_point'),int(input('distance')))
my_airline.hire_pilot(input('name: '),'pilot',int(input('expirience: ')))
my_airline.__str__()
# my_airline.routes[0].__str__()