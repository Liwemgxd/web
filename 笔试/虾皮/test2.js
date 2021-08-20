var A = function(){}
A.prototype.n = 1;

var b = new A();
A.prototype = {
    n: 2,
    m: 3
}

var c = new A();

console.log(b.n)
console.log(b.m)
console.log(c.n)
console.log(c.m)


function Test(){}

Object.prototype.printName = function (){
    console.log('Object')
}
Function.prototype.printName = function (){
    console.log('Function')
}

Test.printName();
var obj = new Test();
obj.printName()