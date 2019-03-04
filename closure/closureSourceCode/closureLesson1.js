
function makeHelloSentence(yourName){
    let hi = "hi " + yourName;
    let andSentence = " and "
    let myNameIs = "my name is "; 
    return function inner(myName){
        return hi + andSentence + myName
    }
}
a = new makeHelloSentence("jonggu");
console.log(a("seongbin"))

b = function(param){
    this.value = param
}

tenPlusFunction = function(param){
    return param.value + 10
}
console.log(tenPlusFunction(new b(111)))



var method = function(paramA,paramB){
    return paramA+paramB
}

console.log(method(1,2))

var makeMethod = method

console.log(makeMethod(1,4))
//인자가 객체인거지 함수가 객체인게 아니니까


function testMethod(){
    return function(){
        return "This is inner mehtod"
    }
}

a = testMethod()
console.log(a())


//call back
function alertAbc(){
    alert("hello");
}
document.getElementById("abc").addEventListener("click", alertAbc())

$("#buttonA").click(function(){
    alert("you click button A")
})

