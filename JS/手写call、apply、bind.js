/**
 * 手写call
 */

Function.prototype.myCall = function (context, ...args){
    if (typeof this !== "function"){
        console.log('typeError')
    }
    context = context || window;
    const fn = Symbol('fn');
    context[fn] = this;
    let result = null;
    result = context[fn](...args)
    return result;
}

/**
 * 手写apply
 */
Function.prototype.myApply = function (context, args){
    if (typeof this !== 'function'){
        console.log('typeError')
    }
    context = context || window;
    let result = null;
    let fn = Symbol('fn');
    context[fn] = this;
    result = context[fn](...args);
    return result;
}

/**
 *手写bind
 */

Function.prototype.myBind = function (context, args){
    if (typeof this !== 'function'){
        console.log('typeError')
    }
    let self = this;
    return function Fn(){
        if (this instanceof Fn){
            return self(...args,...arguments);
        }
        return self.call(context, ...args, ...arguments);
    }
}


