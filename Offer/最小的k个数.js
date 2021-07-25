/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.length < k){
            res.push(arr[i]);
        }else {
            let [max,index] = findMax(res);
            if (arr[i] < max){
                res[index] = arr[i];
            }
        }
    }
    return res;
};
/**
 *
 * @param {number[]}arr
 * @return {number,number}
 */
let findMax = function (arr){
    let max = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max){
            max = arr[i];
            index = i;
        }
    }
    return [max, index]
}

console.log(getLeastNumbers([1,2,3],2))