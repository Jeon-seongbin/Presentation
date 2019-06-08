#!/usr/local/bin/python3
'''
userInput = int(input())
enter = 0
space = userInput - 1
for i in range(userInput):
    for i in range(userInput+enter):
        if(space <= i):
            print("*",end='')
            
        else:
            print(" ",end='')
    enter +=1
    space -=1
    print("")

userInput = int(input())
space = 0
for i in range(userInput):
    for i in range(userInput*2-1-space):
        if i < space:
            print(" ",end='')
        else:
            print("*",end='')
    
    
    space += 1
    print("")

userInput = int(input())
space = userInput - 1
star = userInput - 1

for i in range(userInput * 2 - 1):
    for j in range(userInput * 2 - 1):
 
        if space <= j and j <= star:
            print("*",end='')
        else:
            if star < j:
                continue 
            print(" ",end='')
            
    if i < userInput  - 1:
        space -=1
        star +=1
    else:
        space +=1
        star -=1
    print("")

userInput = int(input())
space = 0
backSpace = userInput * 2 - 1

for i in range(userInput * 2 - 1):
    for j in range(userInput * 2 - 1):
        if space <= j:
            if j >= backSpace:
                continue
            print("*",end='')
            
        else:
            if j >= backSpace:
                continue
            print(" ",end='')
    if i<userInput -1:
        space += 1
        backSpace -=1
    else:
        space -=1
        backSpace +=1
    print("")



userInput = int(input())
lSpace =1
rSpace = userInput * 2 - 1

for i in range(userInput * 2 -1):
    for j in range(userInput * 2 ):
        if lSpace <= j+1 and rSpace<j+1:
            
            if i <= userInput:
                print("*",end='')
            else:

                print("*",end="")
        else:
            if j<lSpace and j < rSpace:
                print("*",end='')
            else:
                print(" ",end='')
        
    lSpace+=1
    rSpace-=1
    
    print("")
'''