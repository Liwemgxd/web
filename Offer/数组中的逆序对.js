/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let sum = 0;
    mergeSort(nums);
    return sum;

    function mergeSort(array) {

        let length = array.length;

        // 如果不是数组或者数组长度小于等于0，直接返回，不需要排序
        if (!Array.isArray(array) || length === 0) return;

        if (length === 1) {
            return array;
        }

        let mid = parseInt(length >> 1), // 找到中间索引值
            left = array.slice(0, mid), // 截取左半部分
            right = array.slice(mid, length); // 截取右半部分

        return merge(mergeSort(left), mergeSort(right)); // 递归分解后，进行排序合并
    }


    function merge(leftArray, rightArray) {

        let result = [],
            leftLength = leftArray.length,
            rightLength = rightArray.length,
            il = 0,
            ir = 0;

        // 左右两个数组的元素依次比较，将较小的元素加入结果数组中，直到其中一个数组的元素全部加入完则停止
        while (il < leftLength && ir < rightLength) {
            if (leftArray[il] <= rightArray[ir]) {
                result.push(leftArray[il++]);
            } else {
                sum += (leftLength-il);
                result.push(rightArray[ir++]);
            }
        }

        // 如果是左边数组还有剩余，则把剩余的元素全部加入到结果数组中。
        while (il < leftLength) {
            result.push(leftArray[il++]);
        }

        // 如果是右边数组还有剩余，则把剩余的元素全部加入到结果数组中。
        while (ir < rightLength) {
            result.push(rightArray[ir++]);
        }

        return result;
    }
};

let arr = [7,5,6,4];
console.log(reversePairs(arr))