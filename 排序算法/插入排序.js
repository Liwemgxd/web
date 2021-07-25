let arr = [5,2,3,4,5,9,8,7,6,5];

/**
 * 直接插入排序基本思想是每一步将一个待排序的记录，插入到前面已经排好序的有序序列中去，直到插完所有元素为止。
 * @param arr
 * @return {*}
 */
function insertSort(arr){
    if (!Array.isArray(arr) || arr.length<=1){
        return arr;
    }
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let j = i;
        let temp = arr[j];
        //开始向前排
        while(j-1 >= 0 && temp < arr[j-1]){ //如果需要继续往前
            arr[j] = arr[j-1];   //j-1位置往后移一下，j-1的位置就没什么用了，空出来给temp或者j-2用
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}

console.log(insertSort(arr))
console.log(arr)