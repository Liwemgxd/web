const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];

/**
 * 利用Set
 */

const res1 = Array.from(new Set(arr));
// console.log(res1)

/**
 * 两层for循环，利用splice
 */
const unique1 = arr => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i+1; j < len; j++) {
            if (arr[j] === arr[i]){
                arr.splice(j,1);
                len--;
                j--;
            }
        }
    }
    return arr;
}
// console.log(unique1(arr))
/**
 * 利用indexOf，构造一个新的数组
 */

const unique2 = arr => {
    let res = [];
    for (let i = 0; i<arr.length; i++){
        if (res.indexOf(arr[i]) === -1){ //可以改为：if (!res.includes(arr[i])) res.push(arr[i]);
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(unique2(arr))

/**
 * 利用filter
 */

const unique3 = arr =>{
    return arr.filter((item, index)=>{
        return arr.indexOf(item) === index;
    });
}

/**
 * 利用map
 */
const unique = arr=> {
    const map = new Map();
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if(!map.has(arr[i])){
            map.set(arr[i], true)
            res.push(arr[i]);
        }
    }
    return res;
}