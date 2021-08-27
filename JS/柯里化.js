/**
 * 函数柯里化
 */
// function curry(fn, args){
//     let len = fn.length;
//     args = args || [];
//     return function (){
//         let newArgs = args.concat(Array.prototype.slice.call(arguments));
//         if (newArgs.length < len){
//             return curry(fn, newArgs);
//         }else {
//             return fn.apply(this, newArgs);
//         }
//     }
// }


function curry1(fn, ...args){
    if (args.length < fn.length){
        return curry(fn, ...args)
    }else {
        return fn(...args);
    }
}



function curry(fn, args){
    let len = fn.length;
    args = args || [];
    return function (){
        let newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length < len){
            return curry(fn, newArgs);
        }else {
            return fn.apply(this, newArgs);
        }
    }
}

function fn(a, b){
    console.log(a+b)
}

fn1 = curry(fn);
fn1(1)(2);





