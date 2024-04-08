def aggregate_list_values(tupple_list):#1
    new={}
    for t in tupple_list:
        try:
            new[t[0]]+=t[1]
        except KeyError:
            new[t[0]]=t[1]
    return new

# tupple_list = [('a',1),('b',2),('c',3),('a',2)]
# print(aggregate_list_values(tupple_list))

def find_intersection_of_two_lists(list1, list2):#2
    return list(set(list1+list2))

# list1=[1,2,3]
# list2=[2,3,4]
# print(find_intersection_of_two_lists(list1,list2))

def merge_dictionaries(dict1,dict2):
    for d in dict2:
        dict1[d]=dict2[d]
    return dict1

# dict1={'a':1,'b':2,'c':3}
# dict2={'b':5,'c':6,'d':4}
# print(merge_dictionaries(dict1,dict2))

def Calculate_the_Frequency_of_Elements_in_a_List(my_list):
    new={}
    for l in my_list:
        try:
            new[l]+=1
        except KeyError:
            new[l]=1
    return new

# my_list=[1,1,1,1,2,2,2,3,3,4]
# print(Calculate_the_Frequency_of_Elements_in_a_List(my_list))

def Nested_Dictionary_Manipulation(myfamily,new_key,new_val):
    for child in myfamily:
        myfamily[child][new_key]=new_val
    return myfamily

myfamily = {
  "child1" : {
    "name" : "Emil",
    "year" : 2004
  },
  "child2" : {
    "name" : "Tobias",
    "year" : 2007
  },
  "child3" : {
    "name" : "Linus",
    "year" : 2011
  }
}
new_key='a'
new_val=1
# print(Nested_Dictionary_Manipulation(myfamily,new_key,new_val))

def Custom_Sorting_of_List_of_Tuples(tupple_list):
    new=dict(tupple_list)
    new =dict(sorted(new.items(), key=lambda item: item[1]))
    new =list(new.items())
    return new

# tupple_list = [('a',3),('b',1),('c',2)]
# print(Custom_Sorting_of_List_of_Tuples(tupple_list))

def Filter_Dictionary_by_Key_Prefix(dict,prefix):
    new={}
    for d in dict:
        if prefix in d:
            new[d]=dict[d]
    return new

dict1={'!a':1,'b':2,'!c':3}
prefix='!'
# print(Filter_Dictionary_by_Key_Prefix(dict1,prefix))


def List_Comprehension_with_Conditionals(my_list):
    new=[]
    for i in my_list:
        if i%2==0:
            new.append(i**2)
            new.append(i**(1/2))
    return new
my_list=[1,2,3,4]
# print(List_Comprehension_with_Conditionals(my_list))

def Set_Operations(set1,se2):
    print(set.union(set1,set2),'union')
    print(set.intersection(set1,set2),'intersection')
    print(set.difference(set1,set2),'difference')
    print(set.symmetric_difference(set1,set2),'symmetric_difference')

set1={1,2,3}
set2={2,3,4}
# print(Set_Operations(set1,set2))

def Tuples_as_Dictionary_Keys(coordinate_list):
    new={}
    for coordinate in coordinate_list:
        new[coordinate]=sum(coordinate)
    return new

coordinate_list = [(1, 2), (3, 4), (5, 6)]
# print(Tuples_as_Dictionary_Keys(coordinate_list))

import statistics
def Unpacking_and_Processing_Lists_and_Tuples(my_list):
    new={}
    for tupp in my_list:
        new[tupp[0]]= statistics.mean(tupp[1]) 
    return new

my_list=[('a',[1,2,3]),('b',[2,3,4])]
# print(Unpacking_and_Processing_Lists_and_Tuples(my_list))

def List_of_Dictionaries_Sorting(my_list):
    # return sorted(my_list, key=lambda d: d['score'])
    return sorted(my_list, key=lambda d: d['score'], reverse=True)



my_list=[{'name':'a','score':5},{'name':'b','score':2},{'name':'c','score':10}]
# print(List_of_Dictionaries_Sorting(my_list))

def Combining_Lists_into_a_Dictionary(key_list,val_list):
    return dict(zip(key_list,val_list))

key_list=['a','b','c']
val_list=[1,2,3]
# print(Combining_Lists_into_a_Dictionary(key_list,val_list))


def Find_the_Longest_String_in_a_Mixed_List(my_list):
    max_len=''
    for i in my_list:
        if type(i)==str and len(max_len)<len(i):
            max_len=i
    return max_len

my_list=['a',3,'aaa',7777]
# print(Find_the_Longest_String_in_a_Mixed_List(my_list))

def double(string):
    new=''
    for s in string:
        new+=s*2
    return new

def remove(string):
    new=''
    for i in range(0,len(string),2):
        new+=string[i]
    return new

word='aabbcc'
word='abcdef'
print(double(word))
print(remove(word))