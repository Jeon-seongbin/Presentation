#!/usr/local/bin/python3
'''
userInput = str(input()).split(" ")
userInputNumber = str(input()).split(" ")
temp = []
for i in userInputNumber:
    temp.append(int(i))

temp.sort()

print(temp[int(userInput[1])-1])

count = 0
userInput = int(input())
number = []
if userInput<10:
    number.append("0")
    number.append(str(userInput))
else:
    number.append(str(userInput)[0])
    number.append(str(userInput)[1])

temp = 0
while True:
    count+=1
    temp = int(number[0]) + int(number[1])

    
    if temp < 10:
        number[0] , number[1] = number[1] , str(temp)
    else:
        number[0] , number[1] = number[1] , str(temp)[len(str(temp))-1]

    if int(number[0])*10 + int(number[1]) == userInput:
        break 

print(count)
'''


userInput = str(input()).split(" ")
i = 0
money = int(userInput[1])

moneyTani = []
while i < int(userInput[0]):
    moneyTani.append(str(input()))
    i+=1

count = 0

index = len(moneyTani)-1
'''
while 0 < money:
    if 0 <= (money - int(moneyTani[index])):
        money = money - int(moneyTani[index])
        count+=1
    else:
        index-=1
'''
while 0 < money:
    if 0 <= (money - int(moneyTani[index])):
        count += money //int(moneyTani[index])
        money = money % int(moneyTani[index])
    else:
        index-=1    
print(count)