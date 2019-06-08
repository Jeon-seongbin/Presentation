#!/usr/local/bin/python3

a = lambda x: x
print(a(10))

print((lambda x : x + 10 ) (11))

b=list(map(lambda x : x+10,[10,22,3,4]))
print(b)

#closer
def printthis(string):

    def printthis1():
        print(string)
    return printthis1

a = printthis("abbbb")
a()

def lambdaFunction():
    string ="zzz"
    return lambda x : str(x) + string

ddd = lambdaFunction()
print(ddd("Ab"))

import base64
#print(base64.b32encode(str(input()).encode("utf-8")).decode())
#print(base64.b32encode(str(input()).encode("utf-8")).decode())

# Creating a string
s = str(input())
# Encoding the Base16 encoded string into bytes
b1 = s.encode("UTF-8")
# Decoding the Base16 bytes
d = base64.b32decode(b1)
# Decoding the bytes to string
s2 = d.decode("UTF-8")
print(s2)
