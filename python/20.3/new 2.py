# import this

# # print('world\'s best dad\n is "happy"')

# # print("world's b\test dad\n is \"happy\"")

      
print('''menu
      1. add
      2. subtract
      3. multiply
      4. devide'''
      )







# # print('the first "winner" of the contest')
# # print("the first \"winner\" of the contest")
# # print('the time to act \n is now')
# # print("""the time to act 
# #       is now""")

# strVarForPracticeExample = 'hello to all mankind'
                                                      
# print(len(strVarForPracticeExample))

# print(strVarForPracticeExample[0:19:-1])

# # print(first_2_letters)
# # print(strVarForPracticeExample[0:2])
# # print(strVarForPracticeExample)


# # print(y)
# # z = x + ' ' + y
# # print(z)
# # x.capitalize()
# # print(x.capitalize())
# # print(x.upper())
# # print(dir(x))

# # """Othere str methods - use case and examples"""

# center(width[, fillchar]) 
# Centers a string in a field of a given width
print("hello".center(10, '*'))

# count(sub[, start[, end]])
#Counts how many times a substring occurs in a string
print("hello world".count('l'))

# encode(encoding="utf-8", errors="strict")
# Encodes the string using the specified encoding
print("hello".encode("utf-8"))

# endswith(suffix[, start[, end]])
# Checks if the string ends with the specified suffix
print("hello".endswith("lo"))

# expandtabs(tabsize=8) 
# Replaces tabs in a string with the correct number of spaces
print("hello\tworld".expandtabs(4))

# find(sub[, start[, end]])
# Searches the string for a specified value 
# and returns the position of where it was found
print("hello world".find("world"))

# format(*args, **kwargs)
# Formats the string using format specifiers
print("Hello, {name}".format(name="Alice"))

# format_map(mapping)
# Formats the string using a dictionary
print("Hello, {name}".format_map({'name': 'Bob'}))

# index(sub[, start[, end]])
# Similar to find(), but raises ValueError when the substring is not found
print("hello world".index("world"))

# isalnum()
# Checks if all characters in the string are alphanumeric
print("hello123".isalnum())

# isalpha()
# Checks if all characters in the string are in the alphabet
print("hello".isalpha())

# isascii()
# Checks if all characters in the string are ASCII
print("hello".isascii())

# isdecimal()
# Checks if all characters in the string are decimals
print("12345".isdecimal())

# isdigit()
# Checks if all characters in the string are digits
print("12345".isdigit())

# isidentifier()
# Checks if the string is a valid identifier
print("variable1".isidentifier())

# islower()
# Checks if all characters in the string are lowercase
print("helLo".islower())

# isnumeric()
# Checks if all characters in the string are numeric
print("12345".isnumeric())

# isprintable()
# Checks if all characters in the string are printable
print("hello".isprintable())

# isspace()
# Checks if all characters in the string are whitespace
print("   ".isspace())

# istitle()
# Checks if the string follows the title case
print("Hello World".istitle())

# isupper()
# Checks if all characters in the string are uppercase
print("HELLO".isupper())

# join(iterable)
# Joins the elements of an iterable to the end of the string
print(", ".join(["apple", "banana", "cherry"]))

# ljust(width[, fillchar])
# Returns a left-justified version of the string
print("hello".ljust(10, "-"))


# lower()
# Converts a string into lowercase
print("HELLO".lower())


# lstrip([chars])
# Trims leading characters (spaces by default)
print("   hello".lstrip())


# maketrans(x[, y[, z]])
# Creates a translation table to be used in translations
intab = "aeiou"
outtab = "12345"
trantab = str.maketrans(intab, outtab)
print("hello world".translate(trantab))

# partition(sep)
# Splits the string at the first occurrence of sep
print("hello world".partition(" "))

# removeprefix(prefix)
# Removes the prefix from the string, if present
print("testcase".removeprefix("test"))

# removesuffix(suffix)
# Removes the suffix from the string, if present
print("filename.txt".removesuffix(".txt"))

# replace(old, new[, count])
# Replaces a specified phrase with another specified phrase
print("hello world".replace("world", "Python"))

# rfind(sub[, start[, end]])
# Searches the string for a specified value and returns the last position of where it was found
print("hello world world".rfind("world"))

# rindex(sub[, start[, end]])
# Similar to rfind(), but raises ValueError when the substring is not found
print("hello world world".rindex("world"))



# rjust(width[, fillchar])
# Returns a right-justified version of the string
print("hello".rjust(10, "-"))

# rpartition(sep)
# Splits the string at the last occurrence of sep
print("hello world world".rpartition(" "))

# rsplit([sep[, maxsplit]])
# Splits the string at the separator, starting at the end of the string
print("hello world world".rsplit(" ", 1))

# rstrip([chars])
# Trims trailing characters (spaces by default)
print("hello   ".rstrip())

# split([sep[, maxsplit]])
# Splits the string at the separator
print("hello, world, world".split(","))


