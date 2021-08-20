var result  = []
var a = 3
var total = 0;


function foo(a){
    var i = 0;
    for (; i < 3; i++) {
        result[i] = function (){
            total += i*a;
            console.log(total)
        }
    }
}

foo(1);
console.log(result[0]());
console.log(result[1]());
console.log(result[2]());
