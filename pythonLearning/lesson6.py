loofCount = 5

for i in range(loofCount):
    for j in range(loofCount * 2):
        if j < loofCount - (i+1)  or loofCount + i <= j :
        #if j < loofCount - i  or loofCount + i < j :
            print(" ",end=' ')
        else:
           print("*",end=' ')
    print()

for i in range(100):
    print("hello world "+ str(i))

factorial = 1
n = 5
for i in range(1,n+1):
    factorial *= i


i = 0
while i < 100:
    print("hello while" + str(i))
    i+=1

for i in range(1,101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz "+str(i))
       
    elif i % 3 == 0:
        print("Fizz "+ str(i))
       
    elif i % 5 ==0 :
        print("Buzz "+ str(i))
    else:
        print(i)

i = 2
j = 5
while i <= 32 or 1<=j:
    print("i : " + str(i) + " j : " + str(j))
    i *= 2
    j -= 1

i = 1
while i < 10000:
    if(i == 100):
        print("the word of break is out from loof " + str(i) )
        break
    i += 1

for i in range(1,101):
    if i % 2 == 0:
        print("module 2 == 0 is continue")
        continue
    print(str(i))

i = 0
while True:

    if i % 10 != 3:
        i += 1
        continue

    if 73 < i:
        break

    print(i, end=' ')
    i += 1


print("--")
inputNum = input()
for i in range(int(inputNum)):
    for j in range(int(inputNum)):
        print("*",end='')
    print("")

inputNum = input()
for i in range(int(inputNum)):
    print(str(int(inputNum)-i))