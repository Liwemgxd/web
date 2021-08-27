let obj = {
    1: 25
}

let arr = [1,2,3]


console.log(obj == 'liwemg')
console.log(undefined === undefined)
console.log(null === null)
console.log(undefined === null)

console.log('123' == 123)
console.log('123' == false)
if ('123'){
    console.log('ok')
}

var a = 2
function foo(a, b){
    console.log(b)
    console.log(a)
    a = 1;
    console.log(a)
    arguments[0] = 3
    console.log(a)
    var a;
    console.log(a);
}

foo(a)