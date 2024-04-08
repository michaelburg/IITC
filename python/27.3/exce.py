""" Exceptions"""
"""
Python Exception Handling
Python has a robust exception handling mechanism that allows developers to catch and handle errors in a graceful manner. 
Exceptions are errors that occur during the execution of a program. 

For example, trying to divide by zero, accessing an invalid index in a list, or opening a file that does not exist 
are all examples of exceptions.

Python provides built-in exceptions, but you can also define your own custom exceptions. 
You can catch exceptions with a try-except block, which allows you to handle the exception 
or display an error message and then continue executing the program.

The try-except block
The try-except block allows you to catch and handle exceptions. The syntax is as follows:


"""

"""
try:
    # code that may raise an exception
except ExceptionType:
    # code to handle the exception
"""
"""

Here, ExceptionType is the type of exception that you want to catch. 
For example, if you want to catch a ValueError, you would write except ValueError:.

Example: Divide by zero

Let's start with an example of dividing two numbers, 
where the divisor is user-defined.
If the user enters zero as the divisor, we will get a ZeroDivisionError.
We can catch this exception using a try-except block and display a friendly error message.
"""

def divide(dividend, divisor):
    try:
        result = dividend / divisor
        return result
    except ZeroDivisionError:
        print("Error: cannot divide by zero")
        return 'failed'
    except TypeError:
        print("Error: use numbers only ")
        return 'failed'


print(divide(10, 0))


"""In this example, we define a function divide that takes two arguments dividend and divisor. Inside the function, we wrap the division operation in a try-except block. If a ZeroDivisionError occurs, we print an error message. If no exception occurs, we return the result.

In the main program, we call the divide function with the arguments 10 and 0. Since the divisor is zero, a ZeroDivisionError is raised, and the error message is displayed.

Handling multiple exceptions
You can catch multiple exceptions using a single try-except block. In this case, you can use a tuple to list the exception types to catch."""

"""Handling multiple exceptions
You can catch multiple exceptions using a single try-except block. In this case, you can use a tuple to list the exception types to catch.

python
Copy code
try:
    # code that may raise an exception
except (ExceptionType1, ExceptionType2):
    # code to handle the exceptions
Here, ExceptionType1 and ExceptionType2 are the types of exceptions that you want to catch.

Example: Accessing invalid indices in a list
Let's consider an example of accessing invalid indices in a list. 
If we try to access an index that is out of bounds, a IndexError is raised. 
If we try to access an element in a list that does not exist, a KeyError is raised. 
We can catch these exceptions using a try-except block and display a friendly error message."""

fruits = ["apple", "banana", "cherry"]
#
# try:
#     print(fruits[3])
# except (IndexError, KeyError):
#     print("Error: invalid index")

"""In this example, we define a list of fruits and then try to access an element at index 3. 
Since there are only three elements in the list, this will raise an IndexError. 
We wrap the access to the list in a try-except block and catch the IndexError and KeyError exceptions. 
If either exception occurs, we print an error message."""

"""The finally block
The finally block is optional and is used to execute a block of code whether an exception is raised or not. This block is usually used for code that needs to be executed no matter what happens in the try block. For example, you might use the finally block to close a file you opened in the try block.

Let's illustrate the use of the finally block with an example:"""

import os
#
# def open_file(filename):
#     try:
#         file = open(filename, "r")
#         content = file.read()
#         print(f"The content of {filename} is: {content}")
#     except FileNotFoundError:
#         print(f"ERROR: {filename} not found.")
#     finally:
#         file.close()  # close the file no matter what
#         print(f"File {filename} closed.")

"""In this example, the open_file function takes a filename as an argument, 
attempts to open the file, reads its content and prints it to the console. 
If the file is not found, it raises a FileNotFoundError exception, which is caught in the except block. 
Whether or not an exception is raised, 
the finally block closes the file and prints a message to the console.

Here's how you would call the open_file function with existing and non-existing files:"""

# Existing file
# open_file("example.txt")
# Output: The content of example.txt is: This is an example file.
#         File example.txt closed.

# Non-existing file
# open_file("non-existing.txt")
# Output: ERROR: non-existing.txt not found.
#         File non-existing.txt closed.


"""As you can see, the finally block is executed no matter what. 
    In this case, it's used to close the file, 
    but you could use it for any other type of cleanup you might need to do.

    Conclusion
    In this tutorial, we have covered the basics of exception handling in Python. 
    We started by defining a function that raises an exception when the divisor is zero, 
    and we showed how to catch and handle that exception using a try-except block. 
    
    We then showed how to handle multiple types of exceptions using multiple except blocks, 
    and how to handle exceptions in a loop. 
    
    Finally, we covered the else and finally blocks and how to use them to execute code under different circumstances. 
    Exception handling is a crucial aspect of programming that allows you to write robust and reliable code. 
    By anticipating and handling errors, you can ensure that your code doesn't crash or behave unpredictably when things go wrong. 
    So, make sure to use exception handling in your Python code and always handle exceptions as early as possible!"""
# from imps import add
#
# def inp():
#     n1 = input('n1: ')
#     n2 = input('n2: ')
#     return n1, n2
#
# n1, n2 = inp()
# try:
#     print(add(n1, n2))
#
# except ZeroDivisionError as E:
#     pass
# print('next')
