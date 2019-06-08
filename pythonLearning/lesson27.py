#!/usr/local/bin/python3
'''
#https://www.acmicpc.net/problem/2523
count = int(input()) 
star = 1
for i in range(count* 2 -1):
    for j in range(star):
        print("*",end="")
    print("")
    if( i+1 < count ):
        star+=1
    else:
        star-=1
'''
'''
#https://www.acmicpc.net/problem/4740
li = list()
while(True):
    userInput = input()
    if userInput == '***':
        break
    else:
        li.append(userInput)

for i in range(len(li)):
    print(li[i][::-1])
'''
'''
#https://www.acmicpc.net/problem/16394
print(int(input())-1946)
'''
'''
#https://www.acmicpc.net/problem/5988
count = int(input())
for i in range(count):
    if int(input()) % 2 == 0:
        print("even")
    else:
        print("odd")
'''
'''
#https://www.acmicpc.net/problem/14909
print(len(list(filter( (lambda x: 0<x),map(int,input().split())))))
'''
'''
#https://www.acmicpc.net/problem/14918
print(sum(list(map(int,input().split())),0))
'''
'''
#https://www.acmicpc.net/problem/11966
isTrue = False
a = int(input())
for i in range(30+1):
    if pow(2,i,a) == 0:
        isTrue = True
        break
print( "1" if isTrue else "0")
'''
'''
#https://www.acmicpc.net/problem/2506
input()
userInput = list(map(int,input().split()))
score = 0
addScore = 1
wasThatOne = False
for i in range(len(userInput)):
    if userInput[i] == 1:
        score += addScore
        addScore+=1
    else:
        addScore = 1
print(score)
'''
'''
#https://www.acmicpc.net/problem/4458
count = int(input())
li = list()
for i in range(count):
    li.append(input())

for i in range(len(li)):
    for j in range(len(li[i])):
        if j == 0:
            print(li[i][j].upper(),end="")
        else:
            print(li[i][j],end="")
    print("")
'''
'''
#https://www.acmicpc.net/problem/16212
input()
a = list(map(int,input().split()))
a.sort()
for i in range(len(a)):
    print(a[i],end=" ")
'''
'''
#https://www.acmicpc.net/problem/9093
count = int(input())
for i in range(count):
    li = input().split()
    for j in range(len(li)):
        print(li[j][::-1],end=" ")
    print("")
'''
'''
#https://www.acmicpc.net/problem/1629
userInput = list(map(int,input().split()))
print( pow(userInput[0],userInput[1],userInput[2]) )
'''
'''
#https://www.acmicpc.net/problem/13163
userInput = int(input())
li = list()
for i in range(userInput):
    userInputTemp = ""
    temp = input().split()
    temp[0] = "god"
    for j in range(len(temp)):
        userInputTemp += temp[j]
    li.append(userInputTemp)

for i in range(len(li)):
    print(li[i])
'''
'''
#https://www.acmicpc.net/problem/3062
userInput = int(input())
resultLi = list()
for i in range(userInput):
    a = input()
    resultLi.append(int(a)+ int(a[::-1]))
    
for i in range(userInput):
    if str(resultLi[i]) == str(resultLi[i])[::-1]:
        print("YES")
    else:
        print("NO")
'''
'''
#https://www.acmicpc.net/problem/9076
userInput = int(input())
li = list()
for i in range(userInput):
    a = list(map(int,input().split()))
    a.sort()
    a = a[1:4]
    if 4 <= a[2] - a[0]:
        li.append("KIN")
    else:
        li.append(sum(a,0))

for i in range(userInput):
    print(li[i])
'''
'''
#https://www.acmicpc.net/problem/15813
input()
li = input()
sum = 0
for i in range(len(li)):
    sum += ord(li[i]) - 64
print(sum)
'''
'''
#https://www.acmicpc.net/problem/5613

#+, -, *, /, =
number = int(input())
sum = 0
sum += number

kigo = input()

while kigo is not "=":
    number2 = int(input())

    if kigo is "+":
        sum += number2
    elif kigo is "-":
        sum -= number2
    elif kigo is "*":
        sum *= number2
    elif kigo is "/":
        sum = sum//number2

    kigo = input()
    

print(sum)
'''
'''
#https://www.acmicpc.net/problem/1009
userInput = int(input())
for i in range(userInput):
    a = list(map(int,input().split()))
    sum = 1
    for j in range(a[1]):
        sum *= a[0]
        if 10 < sum:
            sum %= 10
    if sum is 0:
        print(10)
    else:
        print(sum)
#not passed code
'''