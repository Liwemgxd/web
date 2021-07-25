
function quickSort(array, start, end){
    let len = array.length;
    if (!Array.isArray(array) || len <= 1 || start >= end) return array;

    let index = partition(array, start, end);

    quickSort(array, start, index-1);
    quickSort(array, index+1, end);
    return array;
}

function partition(array, start, end){
    let pivot = array[start]; //取第一个值为枢纽值，获取枢纽值的大小

    while(start < end){
        while(array[end] >= pivot && start < end){
            end --;
        }
        array[start] = array[end];

        //交换方向
        while(array[start] < pivot && start < end){
            start++;
        }
        array[end] = array[start];
    }
    array[start] = pivot;
    return start;
}

let array = [5,1,3,2];
let res = quickSort(array, 0, array.length-1)
console.log(res)