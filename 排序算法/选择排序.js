let arr = [5,2,3,4,5,9,8,7,6,5];

/**
 *选择排序的基本思想为每一趟从待排序的数据元素中选择最小（或最大）的一个元素作为首元素，直到所有元素排完为止。
 * @param arr
 */
function selectSort(arr){
    if (!Array.isArray(arr) || arr.length <= 1){
        return arr;
    }
    let len = arr.length;
    for (let i=0; i<len-1; i++){
        let minIndex = i;
        for (let j=i+1; j<len; j++){
            if (arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

console.log(arr);
selectSort(arr);
console.log(arr);