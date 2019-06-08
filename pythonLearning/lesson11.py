x = input()
countX = 0
countY = 0
def func(x):
    if x % 5 == 0:
        return x // 5
    else:
        return func(x-1)

print( func(11) )