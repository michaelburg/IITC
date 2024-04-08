class Car():
    def __init__(self, manufacturer, model, year,fuel_tank):
        self._manufacturer = manufacturer
        self._model = model
        self._year = year
        self.fuel_tank=fuel_tank
        self.km=0
        self.fuel=0

class Driver():
    def __init__(self,name,gender, age):
        self.name=name
        self.gender=gender
        self.age=age
    def getDriverName(self):
        return self.name

class SportsCar(Car,Driver):
    def __init__(self, car,driver):
        self.car=car
        self.driver=driver

    def isSportsCar(self):
        return self.car._manufacturer=='Ferrari'
    def isEligibleForSportDriver(self):
        return self.driver.age>25 and self.car.year>2017

# my_car = Car("Volkswagen", "Golf", 2020)



car1=Car('Ferrari','F12',2020,70)
driver1=Driver('a','male',25)
my_sport_car1=SportsCar(car1,driver1)


car2=Car('Volkswagen','Golf',2015,60)
driver2=Driver('b','female',30)
my_sport_car2=SportsCar(car2,driver2)
print(my_sport_car2.car.isVolkswagen())
