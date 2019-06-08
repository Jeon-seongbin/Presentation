import sys
a = str(input())
li = []
for i in a:
    li.append(i)
li.sort()
li.reverse()

for i in li:
    print(i,end='')
def selectedSort(li):
    length = len(li)
    for i in range(0, length-1):
        index = i
        for j in range(i+1,length):
            if li[j] < li[index]:
                temp1 = li[j]
                li[j] = li[i]
                li[i] = temp1
        print(li)
    return li

a = [5,99,6,1,2,7]

a = selectedSort(a)
print(a)

userInput = int(input())
i = 0
li = []

while(i < userInput):
    userNumberInput = int(input())
    li.append(userNumberInput)
    i += 1

li = selectedSort(li)
for i in range(len(li)):
    print(li[i])

userInput = int(input())

def hanoi(ring, start,end,hojyo ):
    if ring == 1:
        
        print(str(start) +" " + str(end))
        return
    else:
        hanoi(ring -1 , start,hojyo,end)
        print(str(start) + " "+ str(end))
        hanoi(ring-1, hojyo,end,start)

print(str(pow(2,userInput)-1))
if userInput < 21:
    hanoi(userInput,1,3,2)


userInput = int(input())

userInput = str(input())

li = list(userInput)
sum = 0
for i in range(0,len(li)):
    sum += int(li[i])

print(sum)

userInput = str(input())
count = 0
for i in userInput:
    print(i,end='')
    count +=1
    if count == 10:
        print("")
        count = 0

userInput =raw_input()
li = userInput.split(" ")
liTemp = list()
for i in range(0,len(li)):
    liTemp.append(int(li[i])) 
liTemp.sort()
print(liTemp[1])

userInput =input()
if userInput == 1:
    print('666')
else:
    print(str(userInput -1) + '666')


def fibo(arg):
    if arg < 2:
        return arg
    else:
        return fibo(arg -1) + fibo(arg-2)

memory = list()
for i in range(100):
    memory.append(0)

def fibo1(arg):
    if arg < 2:
        return arg
    if memory[arg] != 0:
        return memory[arg]
    memory[arg] = fibo1(arg - 1) + fibo1(arg - 2)
    return memory[arg]
print(fibo1(input()))


userInput = raw_input()
li = userInput.split(' ')
sum = 0
for i in range(len(li)):
    sum += pow(int(li[i]),2)
print(sum % 10)

userInput = input()
i = 0
temp= dict()
li = list()
while i < int(userInput):
    word = str(input())
    if temp.get(word) == None:
        temp[word] = word
    i+=1

for i in temp:
    li.append(temp[i])

li.sort(key=lambda x:(len(x),x))

for i in range(len(li)):
    print(li[i])
