
//closure javascript
function outerFunc(){
    console.log("out")
    return function (){
        console.log("in")
    }
}


/*
f(x,y) = x + y
let F1 = f(1)
*/
//여기서 F1(t) = 1+t가 됨 쉽게 말해서 ㅇㅇ
/*
function curry(a,b,c){
    var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null,arguments);
    if(args.length >= curry.length){
        return a+b+c;
    }
    else{
        return curry.bind.apply(curry,[null].concat(args))
    }
 }

*/
var add = (a,b) => a+b
console.log(add(1,2))