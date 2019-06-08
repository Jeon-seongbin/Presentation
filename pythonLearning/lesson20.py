#!/usr/local/bin/python3
class A(object):
    def __init__(self):
        print("hello world")
    
    def methodA(self):
        print("method A")

class B:
    pass

a = A()
a.methodA()

print(isinstance(a,A))
print(isinstance(a,B))

if not isinstance(a,int):
    print("a is not int")

class C:
    def __init__(self):
        self.value = 123

c = C()
print(c.value)

class D:
    def __init__(self, *abc):
        self.a = abc[0]
        self.b = abc[1]
        self.c = abc[2]
    def another(self, **param):
        self.a = param['a']
        self.b = param['b']
        self.c = param['c']
    
    def checkAbc(self):
        print(self.a)
        print(self.b)
        print(self.c)


d = D(1,2,3)
#d = D(1,2,3,4)
#parameter 4 is error
d.checkAbc()

d.another(a=111,b=222,c=333,d=123)
#parmeter d it doesn't error
d.checkAbc()

class Person:
    def __init__(self):
        print("__init__ Person init")
        self.personVar = 1

    def greeting(self):
        print("hello from Person")

class Student(Person):
    def __init__(self):
        print("__init__ Student init")
        self.StudentVar = 2
    
    def studying(self):
        print("study")

    def userPersonVar(self):
        super().__init__()
        #print(super.PersonVar)xxx
        print(self.personVar)

    def greeting(self):
        print("hello from Student")

p = Student()
p.greeting()
p.studying()

print(isinstance(p,Person))

p.userPersonVar()

'''
import hashlib
# initializing string 
str = str(input())
  
# encoding GeeksforGeeks using encode() 
# then sending to SHA1() 



#result = hashlib.sha1(str.encode()) 
#result = hashlib.sha224(str.encode())
#result = hashlib.sha256(str.encode()) 
#result = hashlib.sha384(str.encode())
#result = hashlib.sha512(str.encode())
result = hashlib.md5(str.encode()) 
# printing the equivalent hexadecimal value. 

print(result.hexdigest())
'''
#print(str(input())+'??!')
userInput = int(input())

cuteCount = 0
for i in range(userInput):
    if(int(input())==0):
        cuteCount+=1
if userInput/2 < cuteCount:
    print("Junhee is cute!")
else:
    print("Junhee is not cute!")
