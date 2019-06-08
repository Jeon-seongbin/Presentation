#!/usr/local/bin/python3
'''
a = str(input()).split(" ")
a[0] = int(a[0][::-1])
a[1] = int(a[1][::-1])
if(a[0]<a[1]):
    print(a[1])
elif (a[0] == a[1]):
    print(a[1])
else:
    print(a[0])

#1157
a = list(str(input()).lower())
m = dict()
for i in a:
    m[i] = 0

for i in a:
    m[i] += 1
alphabet = 0
big = 0
same = False
for i in m:
    if big < m[i]:
        big = m[i]
        alphabet = i
        same = False
    elif big == m[i]:
        same = True
if same:
    print("?")
else:
    print(alphabet.upper())

#1546
count = input()
score = str(input()).split(" ")
big = 0
sum = 0
for i in range(len(score)):
    if big < int(score[i]):
        big = int(score[i])
    score[i] = int(score[i])
   
for i in range(len(score)):
    score[i] = score[i]/big*100
    sum += score[i]

print(sum/len(score))

#2522
userInput = int(input())

space = userInput
for i in range(userInput * 2 - 1):
    if i < userInput:
        space -= 1
    else:
        space += 1
    for j in range(userInput):
        if j < space:
            print(" ",end="")
        else:
            print("*",end="")
    print("")

#1330
userInput = list(map(int,str(input()).split()))
if userInput[0] == userInput[1]:
    print("==")
elif userInput[0] < userInput[1]:
    print("<")
else:
    print(">")

'''
'''
a = list( map((lambda  li : li  * 10) ,[2,6,7] ) )
print(a)


#10818
x = input()
userInput = list( map (int, str(input()).split(" ")))
userInput.sort()
print( str(userInput[0]) + " " + str(userInput[len(userInput)-1])   )
'''
'''
#1920
input()
A = list( map( int ,str(input()).split(" ")) )
input()
M = list( map( int ,str(input()).split(" ")) )
isThere = False
for m in M:
    for a in A:
        if m == a :
            isThere = True
        else:
            break
    if isThere is True:
        print("1")
    else:
        print("0")
    isThere = False

input()
A = list( map( int ,str(input()).split(" ")) )
input()
M = list( map( int ,str(input()).split(" ")) )
A.sort()
M.sort()

def func(li,target):
    low = 0
    high = len(li)-1

    while low<=high:
        mid = (low + high)//2
        if mid == target:
            return "1"
        elif li[mid] > target:
            high = mid - 1
        else:
            low = mid + 1
    return "0"

for a in A:
    print(func(M,a))



int BSearch(int arr[], int target) {
    int low = 0;
    int high = arr.length - 1;
    int mid;

    while(low <= high) {
        mid = (low + high) / 2;

        if (arr[mid] == target)
            return mid;
        else if (arr[mid] > target)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}

#2752
x = list(map(int,str(input()).split()))
x.sort()
for i in range(len(x)):
    if i+1 < len(x):
        print(x[i],end=" ")
    else:
        print(x[i],end="")


#1259
userInput = list()
while True:
    inp = str(input())
    if "0" is not inp:
        userInput.append(inp)
    else:
        break
#userInputCheck = userInput
for i in userInput:
    if i[::-1] == i:
        print("yes")
    else:
        print("no")
'''
#print(sum(list(map(int,str(input()).split()))))
'''
#3058
userInput = list()
count = int(input())
for i in range(count):
    temp = list(map(int,input().split()))
    temp.sort()
    temp =  list ( filter( (lambda x : x%2 ==0) ,temp) ) 
    userInput.append(temp)

for i in range(len(userInput)):
    print(     str(sum(userInput[i]))   + " "+  str(userInput[i][0]))
''' 
'''
list (filter((lambda x : x%2 == 0) ,[1,2,3,4,5] ))
'''
'''
#10988
userInput = str(input())
a = "1" if userInput == userInput[::-1] else "0"
print(a)
'''
'''
#10174
count = int(input())
li = list()
for i in range(count):
    li.append(str(input()).lower())
    
for i in range(count):
    if(li[i]==li[i][::-1]):
        print("Yes")
    else:
        print("No")
'''
'''
#15873
userInput=str(input())
sum = 0
if userInput.find("10") is not -1 :
    if len(userInput) == 4:
        sum = 20
        userInput=""
    else:
        userInput=userInput.replace("10","")
        sum+=10

for i in range(len(userInput)):
    sum += int(userInput[i])
print(sum)
'''
#15680
#print( "YONSEI" if input() == "0" else "Leading the Way to the Future" )
'''
#9316
for i in range(int(input())):
    print("Hello World, Judge "+str(i+1)+"!")
'''
# https://www.acmicpc.net/problem/15964
a =list(map(int,input().split()))
print( (a[0]+a[1])*(a[0]-a[1]) )