//laxical
/*
var x = "global"
function foo(){
    var x = "local";
    goo()
}

function goo(){
    console.log(x)
}
foo()
goo()


var x = "global";

function abc(){
    var x = "local";
    function f(){
        return x;
    }
    return f
}

console.log(abc()())
*/


var func = function(x){
    let localx = x;
    return {
        plus : function(){
            return ++x;
        },
        minus : function(){
            return --x;
        },
        nowValue : function(){
            return x;
        }
    }
}
var x = new func(1);
x.plus();
x.plus();
console.log(x.nowValue());






function func1(){
    console.log("@2222");
    function aaabb(){
        console.log("@@#faadf");
    }
    return aaabb
}


a = func1()
a();

a = (function(){
console.log("22233333");
})();

function foo(){
    var private1 = [1,2,3];
}

a = new foo();
b = new foo();

a.private1 = [1,2,3,4];
console.log(b.private1)

function curry(f) {
    return function(x) {
        return function(y) {
            return f(x, y);
        }
    }
}

a = function(a,b){
    return a+b;
}

function abcccc(){
    this.aaaa = 1
    return function(){
        return func1;
    }
}
console.log(abcccc());
//console.log(curry(a)(1)(2))
console.log("-----------------------");

//lexical scope (javascript)
var x = 10;

function foo() {
  var x = 1;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?

/*
var bbbb =(function (){
    return 1
})()
*/
var bbbb = function(){
    this.x = 1;
    return (function(){
        return x + 1
    })
}
var aaaaa = new bbbb();
console.log(aaaaa())


function curry(a,b,c){
    var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null,arguments);
    if(args.length >= curry.length){
        return a+b+c;
    }
    else{
        return curry.bind.apply(curry,[null].concat(args))
    }
 }
console.log("-------------");
//closure capsulate

var capsulate = function(){
    var num = 0;
    return {
        increse:function(){
            num++;
        },
        decrease:function(){
            num--;
        },
        getNum:function(){
            return num;
        }
    }
}

example1 = new capsulate();
example1.increse();
example1.increse();
example1.decrease();
console.log(example1.getNum()) // 1

example2 = new capsulate();
example2.decrease();
example2.decrease();
example2.decrease();
console.log(example2.getNum()); // -3

