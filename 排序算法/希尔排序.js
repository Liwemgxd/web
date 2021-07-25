/**
 * 插入排序的升级版：从整体无序->整体有序->绝对有序
 * @param arr
 * @return {*}
 */
function hillSort(arr){
    let len = arr.length;
    if (!Array.isArray(arr) || len<=1){
        return arr;
    }
    for (let gap = parseInt(len>>1); gap>=1; gap = parseInt(gap >> 1)){
        for (let i = gap; i< len; i++){
            let temp = arr[i];
            let j = i;
            while (j-gap>=0 && arr[j-gap] > temp){
                arr[j] = arr[j-gap];
                j = j-gap;
            }
            arr[j] = temp;
        }
    }
    return arr;
}

let arr = [5,4,3,2,1];
console.log(hillSort(arr))