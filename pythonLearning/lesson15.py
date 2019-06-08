import math

userInput = int(input())

i = 0
cup = [1,0,0]
houhou = []
while( i < userInput):

    temp = str(input())
    houhou.append(temp.split(' '))
    i+=1
ball = []
for i in range(len(houhou)):
    for j in houhou[i]:
        ball.append((int(j)-1))
    cup[ball[0]],cup[ball[1]] = cup[ball[1]],cup[ball[0]]

    ball = []

for i in range(len(cup)):
    if(cup[i] == 1):
        print(i+1)

userInput = str(input())

li = userInput.split(' ')

if li[0] == li[1]:
    print(0)
    exit()
li[0] , li[1] = int(li[0])+1 , int(li[1])
li.sort()
print(li[1]-li[0])
for i in range(li[0],li[1]):
    if i == li[1] -1:
        print(i,end='')
    else:
        print(i,end=' ')

userInput = input()
arg ={'6': 0 , '9':0}
for i in range(len(userInput)):
    arg[userInput[i]] = 0

for i in range(len(userInput)):
    arg[userInput[i]] +=1

temp=math.ceil((arg['9'] + arg['6'])/2)
arg['6'] = temp
arg['9'] = temp

max = 0

for i in range(len(userInput)):
    
    if max < arg[userInput[i]]:
        max = arg[userInput[i]] 
print(max)