#set
c = set('helloWorld')
print(c)
a = {1,2,3}
b = {1,3,4}
print(a|b|c)
print("------------")
print(a-b)
print("------------")
print(a^b)
print("------------")
a |= {'pp'}
print(a)

a.add('p')
print(a)
#error
#a.remove('ppp')

#not error
a.discard('bbb')

a = {1,2}
print(a.pop())
print(a.pop())

#error
#print(a.pop())
a = {1,2,3}
a.clear()

#error
#print(a.pop())

a = {1,2,3}
b = a

if a is b:
    print("true")

a |= {4}

print(b)

b = None

print(b)
b = a.copy()

if a is b:
    print("true")
else:
    print("false")

b.add(55)
print(b)

for i in b:
    print(i)

#palindrome
#dojang.io
word = "level"

is_palindrome = True

for i in range(len(word)//2):
    if word[i] != word[-1-i]:
        is_palindrome = False
        break
    
print(is_palindrome)

n = int(input())
#text = raw_input()
text = input()
words = text.split()
if len(words) < n:
    print("wrong")
else:
    for i in range(len(words) - (n-1)):
        for j in range(n):
            print(words[i+j])
        print()
