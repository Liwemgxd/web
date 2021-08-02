

Function.prototype.apply_ = function (context = window, args){
    if (typeof this !== "function"){
        throw new TypeError('type erro');
    }
    const fn = Symbol('fn');
    context[fn] = this;
    const res = context[fn](...args);
    delete context[fn];
    return res;
}

Function.prototype.apply__ = function (obj, arr){
    obj = obj? Object(obj):window;
    obj.fn = this;  //this 就是这个函数
    let res;
    if (!arr){
        res = obj.fn();
    }else {
        res = obj.fn(...arr);
    }
    delete obj.fn;
    return res;
}