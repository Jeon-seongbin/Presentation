#!/usr/local/bin/python3

'''
#normal function
def add(a,b):
    return a+b
a = add
print(a(2,3))
'''
#This is not closure
def addClosureBad(a,b):
    def addClosureInclude():
        return a+b
    return addClosureInclude()
a = addClosureBad
print(a(2,5))

#closure
def addClosureGood(a,b):
    def addClosureInclude():
        return b
    return addClosureInclude
a = addClosureGood(2,3)
print(a())

#more good Closure
def moreGoodClosure(param1):
    def insideGoodClosure(param2):
        return param1+param2
    return insideGoodClosure

a = moreGoodClosure(10)
print(a(22))

def hi(param1):
    def printhi():
        print(param1)
    return printhi
a = hi("Abc")
a()


def makeHelloSentence(peopleName):
    hi = "Hi " + peopleName
    myNameIs = " my name is "
    
    def makeASentence(myName):
        return hi + myNameIs+ myName + "."
    return makeASentence


sentence = makeHelloSentence("jonggu")
print(sentence("seongbin"))



def iDontKnowClosure(param):

    def innerFunc(param1):
        return param + param1
    return innerFunc(1)

result = iDontKnowClosure(1)

print(result)


