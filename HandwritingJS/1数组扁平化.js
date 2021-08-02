//数组扁平化是指将一个多维数组变为一个一维数

const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]
console.log(arr)
console.log('直接toString(): '+arr.toString())
console.log(arr.toString().split(','))
console.log('这个重点掌握： '+ arr.toString().split(',').map(Number))  //number自动转换为number函数并把值传进去,相当于传了一个构造函数
console.log('使用flat函数： '+arr.flat(Infinity))  //使用 Infinity 作为深度，展开任意深度的嵌套数组
console.log('利用正则： '+JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']'))
console.log(JSON.stringify(arr))

console.log('利用flat函数')
let res = arr.flat(Infinity);
console.log(res)
console.log(Array.isArray(res))

/**
 * 利用函数递归
 */
console.log('函数递归：')
let res1 = [];
const fn = arr => {
    for (let i =0; i<arr.length; i++){
        if (Array.isArray(arr[i])){
            fn(arr[i]);
        }else {
            res1.push(arr[i]);
        }
    }
    return res;
}
fn(arr)
console.log(res1)
console.log(Array.isArray(res1))