#!/usr/local/bin/python3
'''
userInput = str(input())
li = list(userInput.split(' '))
A,B,C = 0,0,0
for i in range(len(li)):
    if i == 0:
        A = int(li[i])
    elif i == 1:
        B = int(li[i])
    else:
        C = int(li[i])

print((A+B)%C)
print((A%C + B%C)%C)
print((A*B)%C)
print((A%C * B%C)%C)

userInput = int(input())

for i in range(1,10):
    print( str(userInput) + ' * ' + str(i)+' = ' + str(userInput * i))

userInput = int(input())

for i in range(userInput):
    count = userInput - i
    for i in range(userInput):
        if 0 < count - i -1: 
            print(" ",end='')
        else:
            print("*",end='')
    print("")

userInput = str(input())
while(userInput != '0 0'):
    li = list(userInput.split(' '))
    sum = 0
    for i in range(len(li)):
        sum += int(li[i])
    print(sum)
    userInput = str(input())

userInput = int(input())
if 90 <=userInput and userInput <= 100:
    print("A")

elif 80 <= userInput and userInput <= 89:
    print("B")

elif 70 <= userInput and userInput <= 79:
    print("C")

elif 60 <= userInput and userInput <= 69:
    print("D")
else:
    print("F")

print(ord(str(input())))

userInput = str(input())
li = userInput.split('-')
for i in range(len(li)):
    print(li[i][0],end='')

userInput = int(input())
i = 0
while i < userInput:
    li = list(str(input()).split(' '))
    sum = 0
    for j in range(len(li)):
        sum += int(li[j])
    print('Case #'+str(i+1)+': '+str(sum))
    i+=1

userInput = int(input())
i = 0
while i < userInput:
    li = list(str(input()).split(' '))
    sum = 0
    for j in range(len(li)):
        sum += int(li[j])
    print('Case #'+str(i+1)+': '+str(li[0])       +  ' + '   +str(li[1])  +' = '+str(sum))
    i+=1
userInput = int(input())
for i in range(userInput):
    
    for j in range(userInput):
        if j < i:
            print(" ",end="")
            
        else:
            print("*",end="")
        
    print("")

sum = 0
for i in range(1,int(input())+1):
    sum += i
print(sum)


userInput = int(input())
div = 2
for i in range(1,userInput+1):
    if userInput % div == 0:
        userInput =  userInput//div
        print(div)
        
    else:
        div +=1


def plus(arg):
    if arg == 0:
        return 1
    if arg  < 2:
        return arg
    else:
        return  arg * plus(arg-1)

print(plus(0))
         
'''
print("testPython 3         ",end='') 