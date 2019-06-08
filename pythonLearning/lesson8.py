#tuple

b = (1,2,3)

for i in b:
    print(i)
print("--------------------")
print(b[:len(b)])

#dic
x = {'a':10 , 'b':3 , 'c' :3}

print(x)
print(x['a'])

x['d'] = 10

print(x)

x['d'] = -1

print(x['d'])

print(len(x))

x.update(a = 100 , b = 200)

print(x)

x['z'] = 111

print(x)
print(x.pop('z'))
print("---------------")
print(x)
print(x.popitem())

print("---------------")
print(x)
print(x.items())
#print(x.values())
xValue = list(x.values())
print(xValue)
x.setdefault("xx",222)
print(x)

x = input()
#x = raw_input()
x = x.split()
j = 0
for i in x:
    j += int(i)
print(j)

userInput = input()
i = 0

while i < int(userInput):

    #x = raw_input()
    x = input()
    x = x.split()
    z = 0
    for j in x:
        z +=int(j)
    i += 1
    print(str(z))