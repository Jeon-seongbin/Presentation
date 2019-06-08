#!/usr/local/bin/python3

'''
#closure Python
def func():
    def funcInner():
        pass
    return funcInner

'''
'''
#lexical scope(Python)
x = 10
def func1():
    x = 1
    func2()

def func2():
    print(x)

func1() #?
func2() #?

'''
'''
#scope chaining
def outerFunc():
    outerValue = 123

    def innerFunc():
        print(outerValue)

    innerFunc()

outerValue = 9998
outerFunc() # 123

'''