""""""
"""Introduction to Lambda Functions
In Python, a lambda function is a small anonymous function that can be defined in a single line of code. 
Lambda functions are also known as "anonymous functions" because they do not have a name. 
They are typically used to perform simple operations or transformations on data, 
and are often passed as arguments to other functions.
Lambda functions are defined using the lambda keyword, followed by one or more arguments (separated by commas), a colon, 
and the expression to be evaluated. The result of the expression is the return value of the lambda function. 
  parts 1      part 2        part 3          part 4
| lambda | | parameters |  | colon : | | return value |
Lambdas are meant to be short functions, often used without giving them a name.

Here is an example:"""
#
# # Define a lambda function that takes two arguments and returns their sum
# add = lambda x, y: x + y
#
# # Call the lambda function with arguments 3 and 5
# result = add(3, 5)
#
# # Print the result
# print(result)  # Output: 8

"""In this example, we define a lambda function add that takes two arguments x and y and returns their sum. 
We then call the add function with arguments 3 and 5, and print the result."""
"""##########################################################################################################################"""

"""The arguments can be zero or more comma-separated parameters, and the expression can be any valid Python expression. 
Here are some examples of lambda functions:"""
"""##########################################################################################################################"""

# Define a lambda function with no arguments that returns the value 42
# the_answer_to_everything = lambda: 42
# print(the_answer_to_everything())

# Define a lambda function that takes one argument and returns its square
# f2 = lambda x: x ** 2
# # Define a lambda function that takes two arguments and returns their product
# f3 = lambda x, y: x * y
# # Define a lambda function that takes a string argument and returns its length
# f4 = lambda s: len(s)

# """##########################################################################################################################"""
#
# """Using Lambda Functions
# Lambda functions are often used in conjunction with other functions that take functions as arguments,
# such as map(), filter(), and reduce(). Here are some examples:
# """
# """##########################################################################################################################"""
# """Using Lambda Functions with map()
# The map() function applies a function to every element of an iterable and returns a new iterable with the results.
# Here is an example of using a lambda function with map():"""
# """##########################################################################################################################"""
















# Define a list of numbers
numbers = [1, 3, 2, 3, 4, 5]
# Use map() to apply a lambda function to every element of the list
squares = map(lambda x: x ** 2, numbers)
print(type(squares))
# Print the result
print(list(squares))  # Output: [1, 4, 9, 16, 25]




print(type({}))








def add(x):
    return x ** 2

num = 'u'

num.upper()


#
#
# """In this example, we define a list of numbers and use the map() function to apply a lambda function that squares each number in the list.
# The result is a new iterable that contains the squared numbers."""
#
# """##########################################################################################################################"""
# """Using Lambda Functions with filter()
# The filter() function applies a function to every element of an iterable and returns a new iterable with only the elements
# that satisfy a certain condition. Here is an example of using a lambda function with filter():"""
# """##########################################################################################################################"""
#
# Define a list of numbers
# numbers = [1, 2, 3, 4, 5]
#
# # Use filter() to apply a lambda function to every element of the list
# evens = filter(lambda x: not x % 2 == 0, numbers)
#
# # Print the result
# print(list(evens))  # Output: [2, 4]
# #
# """In this example, we define a list of numbers and use the filter() function to apply a lambda function
# that checks if each number in the list is even. The result is a new iterable that contains only the even numbers.
#  """
#
# """##########################################################################################################################"""
# """Using Lambda Functions with reduce()
# The reduce() function applies a function to the first two elements of an iterable,
# then applies the same function to the result and the next element, and so on, until all elements have been processed.
# Here is an example of using a lambda function with reduce():"""
# """##########################################################################################################################"""
#
#
# # Import the reduce() function from the functools module
# from functools import reduce
#
# # Define a list of numbers
# numbers = [1, 2, 3, 4, 5]
#
# # Use reduce() to apply a lambda function to the list
# product = reduce(lambda x, y: x * y, numbers)
#
# # Print the result
# print(product)  # Output: 120
#
# """In this example, we import the reduce() function from the functools module and define a list of numbers.
# We then use the reduce() function to apply a lambda function that calculates the product of all the numbers in the list.
# The result is a single value that represents the product of all the numbers."""
# """##########################################################################################################################"""
#
# """Conclusion
# Lambda functions are a powerful tool for writing concise and efficient code.
# They allow you to define small, anonymous functions on-the-fly and use them in a variety of contexts.
# With the examples and syntax presented in this tutorial,
# you should have a solid understanding of how to use lambda functions in your Python code."""
#
#
#
