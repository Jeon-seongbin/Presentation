#!/usr/local/bin/python3
a = 1
ox = 'O' if a ==3 else 'X'
print(ox)

x = [10,9,6,5,4,6,7,8,8,9,11]
a = list(filter(lambda x : 10 < x ,x))
print(a)

a = str(input())

a = a.split(' ')

y= list(map(lambda x, y: int(x) + int(y), a[1], a[0]))
print(y[0])

userInput = int(input())
i = 0
while i < userInput:

    wordInput = str(input())
    wordInput = wordInput.split(' ')
    count = int(wordInput[0])
    wordInput = wordInput[1]

    for j in range(len(wordInput)):
        for z in range(count):
            print(wordInput[j],end='')
    print("")
    i+=1
userInput = str(input()).split(' ')# 10 5
inputNumbers = str(input()).split(' ') # 1 ,2, 3,4,5,6,7,8,9,10

a =list(filter(lambda x : int(x) < userInput[1] ,inputNumbers))

for i in range(len(a)):
    print(a[i],end=' ')

userInput = str(input()).split(' ')
a = list(range(1,9))
trueOrFalse = False
for i in range(0,8):
    if int(userInput[i]) is a[i]:
        trueOrFalse = True
    else:
        trueOrFalse = False
        break

if trueOrFalse:
    print("ascending")
    exit()

a.sort(reverse=True)
for i in range(len(userInput)):
    if int(userInput[i]) == a[i]:
        trueOrFalse = True
    else:
        trueOrFalse = False
        break
if trueOrFalse:
    print("descending")
else:
    print("mixed")