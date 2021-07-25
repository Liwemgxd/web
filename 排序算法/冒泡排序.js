let arr = [1,2,3,4,5,9,8,7,6,5];


/**
 * @param {number[]} arr
 *
 */
function bubbleSort(arr){
    if (!Array.isArray(arr) || arr.length<=1) return;
    for (let i = 0; i < arr.length -1; i++) {
        let flag = true; //优化外循环：若没有产生任何交换，说明都排好序了，停止冒泡
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = false;
            }
        }
        if (flag === true) break;
    }
}
// bubbleSort(arr)
// console.log(arr)

// 优化内循环
/**
 *
 * @param {number[]}arr
 */
function bubbleSort1(arr){
    if (!Array.isArray(arr) || arr.length<=1) return;
    let lastIndex = arr.length-1;
    while (lastIndex>0){  //记录当前循环中，最后一次交换的位置，这个位置之后的都不用参与下一次循环了
        let flag = true;
        let k = lastIndex;
        for (let i = 0; i < k; i++) {
            if (arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                lastIndex = i;
                flag = false;
            }
        }
        if (flag === true) return;
    }
}

bubbleSort1(arr);
console.log(arr)