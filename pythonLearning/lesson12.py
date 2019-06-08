#jump to python

class Calculator:
    def __init__(self):
        self.value = 0

    def add(self,val):
        #keyword of self is not in here
        self.value += val
        return self.value

cal = Calculator()
cal.add(3)
print(cal.add(4))

class Calculator2:
    def __init__(self,init_value):
        self.value = init_value
    
    def add(self,val):
        self.value += val
        return self.value

cal = Calculator2(2)
#parameter of constructor was not inserted
cal.add(3)
print(cal.add(4))

class Calculator3(Calculator):
    def minus(self,minusVal):
        self.value -= minusVal
        return self.value

cal = Calculator3()
print("---")
cal.add(3)
print(cal.minus(2))

print("--------------------------")
countX =0
countY = 0
input = int(input())

if input % 5 == 0:
    print(input // 5)
    exit()

if input == 4 or input == 7:
    print("-1")
    exit()

while 0 < input:
    if input % 5 != 0:
        input -= 3
        if input < 0:
            countX = -1
            break

        countX += 1
    elif input % 5 == 0:
        input -= 5
        countX += 1

print( countX + countY)

print("-----")
temp = ""
li = []
while(True):
    temp = input()
    if str(temp) == "END":
        break
    else:
        li.append(str(temp))

for i in range(len(li)):
    for j in range(int(len(li[i])) , 0 , -1):
        x = li[i]
        print(x[j-1],end='')
    print("")

userInput = int(input())
for i in range(userInput):
    for j in range(i+1):
        print("*",end='')
    print("")
