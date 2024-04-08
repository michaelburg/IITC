import requests
import matplotlib.pyplot as plt
from datetime import datetime
from matplotlib.widgets import TextBox

def submit(city):
    key='e8fce0810d4a421492f121313240404'
    city='London'
    days=10
    url='http://api.weatherapi.com/v1/forecast.json?key='+key+'4&q='+city+'&days='+str(days)+'&aqi=no&alerts=no'
    url='http://api.weatherapi.com/v1/forecast.json?key=e8fce0810d4a421492f121313240404 &q=London&days=10&aqi=no&alerts=no'
    # url='http://api.weatherapi.com/v1/current.json?key='+key+'&q='+city+'&aqi=no'
    # url='https://api.tomorrow.io/v4/timelines?location=32.0853,34.7818&fields=temperature&timesteps=1d&units=metric&apikey=cO9wbek9jlmVxhMFPiWqulvQk6rpPydE'
    response = requests.get(url)
    data = response.json()
    time=[]
    temp=[]
    data=data['forecast']['forecastday']
    for day in data:
        datetime_string =day['date']
        datetime_object = datetime.strptime(datetime_string, "%Y-%m-%d")
        time_string = datetime_object.strftime("%m-%d")
        time.append(time_string)
        temp.append(day['day']['avgtemp_c'])
    plt.plot(time,temp)
    plt.ylim(0, 30)
    plt.show()

axbox = plt.axes([0.1, 0.05, 0.8, 0.075])
text_box = TextBox(axbox,'City', initial='London')
text_box.on_submit(submit)

# print(time_string)