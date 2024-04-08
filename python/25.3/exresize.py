
def sum_even_numbers(numbers):
    s=0
    for number in numbers:
        if number%2==0:
            s+=number
    return s
# a=[1,2,3,4,5,6,7,8]
# print(sum_even_numbers(a))

def uppercase_strings(strings):
    for i in range(len(strings)):
        strings[i]=strings[i].upper()
    return strings

# a=['aa','bb']
# print(uppercase_strings(a))

def swap_keys_values(dict):
    new={}
    for dic in dict:
        key=dic
        val=dict[dic]
        new[val]=key
    return dict

# a={'a':1,'b':2}
# print(swap_keys_values(a))


def unique_numbers(numbers):
    return list(set(numbers))

# numbers=[1,1,2,3,5,2,1,2,3,4,3,2]
# print(unique_numbers(numbers))

def shortest_string (strings):
    short=strings[0]
    for string in strings:
        if len(string)<len(short):
            short=string
    return short


# strings=['aa','a','aaa']
# print(shortest_string (strings))

def sort_lists_descending(dict):
    for d in dict:
        dict[d].sort()#מיון
        dict[d].reverse()#הפיכה
    return dict


# dict={'a':[1,2,54,3],'b':[3,1,66,2,2]}
# print(sort_lists_descending(dict))


def strings_containing_a(strings):
    new=[]
    for string in strings:
        if 'a' in string:
            new.append(string)
    return new


# strings=['a','b','ac']
# print(strings_containing_a(strings))
    

def key_with_highest_value(dict):
    high_key=[]
    high_val=max(list(dict.values()))
    for d in dict:
        if dict[d]==high_val:
            high_key.append(d)
    return high_key, high_val

# dict = {'sham': 10, 'nil': 50, 'veer': 40, 'ram': 50}
# print(key_with_highest_value(dict))

def palindromes(strings):
    new=[]
    for string in strings:
        s=list(string)
        s.reverse()
        if list(string)==s:
            new.append(string)
    return new


# strings=['aa','aba','fg','ene']
# print(palindromes(strings))

def keys_with_odd_values(dict):
    new={}
    for d in dict:
        if dict[d]%2!=0:
            new[d]=dict[d]
    return new


dict = {'sham': 10, 'nil': 53, 'veer': 40, 'ram': 51}
print(keys_with_odd_values(dict))