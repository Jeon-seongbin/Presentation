# https://www.acmicpc.net/problem/8958

userInput = input()

oCount = 0
count = 0
i = 0
userInputList = []
resultList = []
while i < int(userInput):
    x = input()
    userInputList.append(x)
    i+=1

for listRange in userInputList:
    for string in range(len(listRange)):
        # print(listRange[string])
        if string == 0:
            if listRange[string] is 'O':
                oCount += 1
        elif string + 1 == userInput:
            if listRange[string] is 'O':
                oCount += 1
        else:
            if listRange[string] is 'O':
                oCount += 1
            else:
                oCount = 0
        count += oCount
    resultList.append(count)
    count = 0
    oCount = 0

for i in resultList:
    print(i)

userInputList = []
i = 0
while i < 5:
    x = int(input())
    if x < 40:
        x = 40
    
    userInputList.append(x)
    i += 1

sum = 0
for i in userInputList:
    sum += i

print (int(sum / len(userInputList)))  

userInput = input()
userInput = userInput.split(" ")
li = list(userInput)
liSorted = list(userInput)
liReversed = list(userInput)

liSorted.sort()
liReversed.reverse()
trueFlag = False

for i in range(len(liSorted)):
    if li[i] == liSorted[i]:
        trueFlag = True
    elif len(li) / 2 == i:
        continue

if trueFlag:
    print("ascending")
    exit()

 
for i in range(len(liReversed)):
    if li[i] == liReversed[i]:
        trueFlag = True
    elif len(li) / 2 == i:
        continue

if trueFlag:
    print("descending")
    exit()
print("mixed")
