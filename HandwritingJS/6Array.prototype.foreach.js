

Array.prototype.forEach1 = function (callback,thisArg){
    if (this == undefined){
        throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function'){
        throw new TypeError(callback + 'is not a function');
    }
    const O = Object(this);
    let len = O.length >>> 0;
    for (let i = 0; i < len; i++){
        if (i in O){
            callback.call(thisArg, O[i], i, this);
        }
    }
}

let arr = [1,2,3];
let copy = [];
arr.forEach1(item=>{copy.push(item)});
console.log(copy)