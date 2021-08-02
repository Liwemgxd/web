/**
 * 理解：一个方法，召唤一个对象及参数，让这个对象调用自己，参数也是自己需要的参数
 * 步骤：给传进来的对象添加一个属性函数，就是 this
 * 然后用该对象调用一下自己这个属性函数，参数就用传进来的，利用一下拓展运算符  [...arguments].slice(1)
 */

Function.prototype.call_ = function (context = window, ...args){
    if (typeof this !== "function"){
        throw new TypeError('type Error');
    }
    const fn = Symbol('fn');
    context[fn] = this;
    const res = context[fn](...args);
    delete context[fn];
    return res;
}

//另外一个版本

Function.prototype.call__ = function (obj){
    obj = obj? Object(obj) : window;
    obj.fn = this;  //给要进行操作的对象
    let args = [...arguments].slice(1);
    let res = obj.fn(...args);
    delete obj.fn;
    return res;
}