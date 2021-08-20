/**
 * 函数柯里化
 */

function curry(fn, args){
    let len = fn.length;
    args = args || [];
    return function (){
        let newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length < len){
            return curry.call(this, newArgs);
        }else {
            return fn.apply(this, newArgs);
        }
    }
}
