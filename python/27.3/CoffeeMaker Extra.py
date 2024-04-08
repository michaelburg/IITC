class coffe_machine():
    def __init__(self):
        self.water=1000
        self.milk=1000
        self.coffee_beans=1000
        self.money=0

def my_decorator():

    print('Welcome to CoffeeMaker Extra')

def are_resources_sufficient(ingredients,order_ingredients):
    
    for order_ingredient in order_ingredients:
        if order_ingredients[order_ingredient]>ingredients[order_ingredient]:
            return False
    return True
def process_coins(price):
    inserted=0
    while inserted<price:
        coin=input("""please insert coins or click c to cancel:
                   sensor ([q]quarters/[d]dimes[n]/nickels/[p]pennies):""")
        if coin=='p':
            inserted+=0.01
        elif coin=='n':
            inserted+=0.05
        elif coin=='d':
            inserted+=0.1
        elif coin=='q':
            inserted+=0.25
        elif coin=='c':
            inserted=None
            break
        print(str(inserted)+' inserted '+ str(price-inserted)+' left ')
    return inserted
def is_transaction_successful(profit,money_received, drink_cost):
        if money_received>=drink_cost:
            profit+=drink_cost
            print('Here is $'+str(drink_cost-money_received)+' in change')

def make_coffee(ingredients,order_ingredients):
    for ingredient in order_ingredients:
        ingredients[ingredient]-=order_ingredients[ingredient]
    print('enjoy your drink')

def print_report(ingredients,profit):
    print('Water: '+ str(ingredients['water'])+'ml')
    print('milk: '+ str(ingredients['milk'])+'ml')
    print('coffee_beans: '+ str(ingredients['coffee_beans'])+'g')
    print('profit: '+str(profit))
def run():
    profit=0
    ingredients={'water':1000,'milk':1500, 'coffee_beans':75}
    drinks={'espresso':{'ingredients':{'water':50,'milk':0, 'coffee_beans':10},'price':1.5},
            'latte':{'ingredients':{'water':200,'milk':150, 'coffee_beans':24},'price':2.5,},
            'cappuccino':{'ingredients':{'water':250,'milk':50, 'coffee_beans':24},'price':3}}
    my_decorator()
    while True:
        selected=input('What would you like? (espresso/latte/cappuccino/off): ')
        if selected=='off':
            print("Thank's hope you enjoyed your drink")
            break
        elif selected=='report':
            print_report(ingredients,profit)
        else:
            if are_resources_sufficient(ingredients,drinks[selected]['ingredients']):
                payment=process_coins(drinks[selected]['price'])
                if payment==None:
                    break
                is_transaction_successful(profit,payment,drinks[selected]['price'])
                make_coffee(ingredients,drinks[selected]['ingredients'])
            else:
                print('we ran out of resources')
            
        
run()