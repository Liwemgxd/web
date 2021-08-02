/**
 * 手写filter函数
 * @param callback
 * @param thisArg
 */
// callback接受三个参数： elements, index, array, 问题是搞不清楚第23行的细节
Array.prototype.filter1 = function (callback, thisArg){
    if(this == undefined){
        throw new TypeError('this is null or not undefined');
    }
    if (typeof callback !== 'function'){
        throw new TypeError(callback + 'is not a function')
    }
    const res = [];
    //让O成为回调函数的对象传递 （强制转换对象）
    const O = Object(this);
    // >>>0 保证len为number，且为正整数
    const len = O.length >>> 0;
    for (let i = 0; i < len; i++) {
        //检查 i 是否在O的属性（检查原型链）   可以理解为，数组相当于一个对象{0:1,1:2，...}
        if (i in O){
            //回调函数调用传参
            if (callback.call(thisArg, O[i], i, O)){   //回头要搞懂这个 call
                res.push(O[i]+thisArg);
            }
        }
    }
    return res;
}

let arr = [1,2,3,3];

console.log(arr)

let res= arr.filter1((item, index)=>{
    return item>1;
}, 100);

console.log(res)
