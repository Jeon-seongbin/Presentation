a = 10
print(a)
print(type(a))

a = "hello world"
print(a)
print(type(a))

a,b,c = 10,20,30
print(a)
print(b)
print(c)

a=b=c=10
print(a)
print(b)
print(c)

del c

#print(c)
c = None
print(c)
a=b=10
if a>b:
    print(a)
elif a==b:
    print("elif")
    print(a)
    print(b)
else:
    print(b)
