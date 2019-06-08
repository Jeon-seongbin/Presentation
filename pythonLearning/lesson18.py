#!/usr/local/bin/python3
#lamda expression

#first general function

def plus(a,b):
    return a+b

#lamda
print((lambda x,y:x+y)(10,20))

a=(lambda x,y:x*y)(1,2)
print(a)

a = list(map(lambda x : x**2 ,range(5)))
print(a)
for i in a:
    print(i)

a =list(map(lambda x: x+10,a))

for i in a:
    print(i)

a = (lambda x : x+10)

print(list(map(a,[1,2,3])))
b= list(map(a,[1,3,5,7]))
for i in b:
    print(i)

print((lambda x : x+1)(10))

x = list(map(lambda x : x+10 ,[1,2,3,4]))

for i in x:
    print(i)

