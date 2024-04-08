def power(number):
    return number*2
def sum(number1,number2):
    return number1+number2
def is_num(number):
    try:
        float(number)
        return  True
    except ValueError:
        return False
def num_input():
    number=input('enter you input: ')
    if is_num(number):
        return int(number)
    else:
        return 'invalid input'
def to_float(number):
    if is_num(number):
        return float(number)
    return False

def to_str(word):
    return str(word)
def copy_list(my_list):
    new=[]
    for i in my_list:
        new.append(i)
        