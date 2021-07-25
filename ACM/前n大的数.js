
/**
 * Note: 类名、方法名、参数名已经指定，请勿修改
 *
 *
 * 有一个无序的整数数组arr，实现一个函数，返回数据arr中最大的n个数，n小于等于数组的长度，返回结果需要是降序的有序数组
 * @param arr int整型一维数组 无序数组
 * @param n int整型 n
 * @return int整型一维数组
 */
function findLargestN(arr, n) {
    arr.sort((val1,val2)=>{
        return val2-val1;
    });
    return arr.slice(0,n)
}
module.exports = {
    findLargestN : findLargestN
};

arr = [2,1,4,6,3];
let res = findLargestN(arr,3)
console.log(res)