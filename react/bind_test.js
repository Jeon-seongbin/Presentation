const objA = {
  name: 'a',
  aFunc: function() {
    console.log(this.name)
  },
}

const objB = {
  name: 'b',
}

objA.aFunc() // (1)
// a
objA.aFunc.bind(objB) // (2)
const foo = objA.aFunc.bind(objB) // (3)
objA.aFunc();

foo()//(4)
