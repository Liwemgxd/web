
function quickSort(arr, start, end){
    let len = arr.length;
    if (!Array.isArray(arr) || len <= 1 || start >= end) return arr;

    let index = partition(arr, start, end);
    quickSort(arr, start, index-1);
    quickSort(arr, index+1, end);
    return arr;
}

function partition(arr, start, end){
    let pivot = arr[start];
    while (start < end){
        while(arr[end] >= pivot && start < end){
            end--;
        }
        arr[start] = arr[end];

        while(arr[start] < pivot && start < end){
            start++;
        }
        arr[end] = arr[start];
    }
    arr[start] = pivot;
    return start;
}

let arr = [5,3,21,45,5,6,7]
let res = quickSort(arr, 0, arr.length-1);
console.log(res)