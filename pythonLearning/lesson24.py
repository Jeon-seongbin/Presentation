#!/usr/local/bin/python3

def function():
    return 1

a = function
#print(a())

'''
class TestClass(object):
    
    def tenPlusFunc(self,param):
        self.a = param
#        print(self.a)
        return TestClass

def makeNumber(param):
    return param + 10


classTest = TestClass()
classTest.tenPlusFunc(1)

makeNumber(classTest.tenPlusFunc(1))
'''


def outerMethod():
    def innerMethod():
        return 111
    return innerMethod
a = outerMethod()
print(a())

def curry(func, var):
    y = var
    def f(x):
        return func(x, y)
    return f

curry(a(),1)

aaa = 1

def aa():
    return aaa+1
aaa=5
print(aa())
aaa=888

