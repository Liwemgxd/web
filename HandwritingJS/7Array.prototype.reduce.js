/**
 * 回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：
 * 如果调用reduce()时提供了initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值；
 * 如果没有提供 initialValue，那么accumulator取数组中的第一个值，currentValue取数组中的第二个值。
 */

Array.prototype.reduce1 = function (callback, initialValue){
    if (this == undefined){
        throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function'){
        throw new TypeError(callback + 'is not a function');
    }
    const O = Object(this);
    let len = O.length >>> 0;
    let accumulator = initialValue;
    let k = 0;
    //如果第二个参数为undefined的情况下
    //使用数组的第一个值作为累加器的初始值
    if (accumulator === undefined){
        while(k<len && !(k in O)){  //在稀疏数组中，有的下标没在数组的属性中
            k++;
        }
        if (k>=len){  //说明一直没有找到能用的值，即矩阵是空的
            throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = O[k++];  //这里把k用完 ++ 一下，下面从下标1开始用
    }
    while(k<len){
        if (k in O){  //这一步也是针对稀疏数组的
            accumulator = callback.call(undefined, accumulator, O[k], k, O);
        }
        k++;
    }
    return accumulator;
}

let arr = [1,2,3];
let res = arr.reduce1((accumulator, currentValue) => {return accumulator + currentValue})
console.log(res)