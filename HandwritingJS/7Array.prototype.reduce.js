/**
 * 回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：
 * 如果调用reduce()时提供了initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值，共执行length次回调函数
 * 如果没有提供 initialValue，那么accumulator取数组中的第一个值，currentValue取数组中的第二个值，共执行length-1次回调函数
 */

Array.prototype.reduce1 = function (callback, initialValue){
    if (this == undefined){
        //这里也可以加个判断，initialValue是否有值，有的话返回initialValue
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

// let arr = [1,2,3];
// let res = arr.reduce1((accumulator, currentValue) => {return accumulator + currentValue})
// console.log(res)


/**
 * 自己写的版本
 * 实现思路：
 * 1、判断this和callback是否合法
 * 2、初始化preValue = initialValue, this对象化为obj
 * 3、判断preValue是否存在，不存在的话，先在obj中找到第一个可用的值作为preValue， index++
 * 4、循环调用callback，更新preValue
 */

Array.prototype.reduce2 = function (callback, initialValue){
    if (this === undefined){
        throw new TypeError('obj type error');
    }
    if (typeof callback !== 'function'){
        throw new TypeError('callback type error');
    }
    let preValue = initialValue;
    let obj = Object(this);
    let len = obj.length;
    let k = 0;

    if (preValue === undefined){
        while(k < len && !(k in obj)){
            k++;
        }
        if (k === len){
            throw new Error('matrix can not be used');
        }
        preValue = obj[k++];
    }

    //有initialValue
    while(k < len && k in obj){
        preValue = callback(preValue, obj[k], k, obj);
        k++;
    }
    return preValue;
}

let arr = [1,2,null,3,4];
let res = arr.reduce2((pre, cur) => {return pre + cur})
console.log(res)


console.log('2021/2/18'.toLocaleString());