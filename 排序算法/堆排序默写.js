

function heapSort(arr){
    let len = arr.length;
    if (!Array.isArray(arr) || len <= 1) return arr;
    buildMaxHeap(arr);
    for (let i = len-1; i > 0; i--) {
        swap(arr, 0, i);
        adjustMaxHeap(arr, 0, i-1);
    }
    return arr;
}

function buildMaxHeap(arr){
    let len = arr.length;
    let lastFatherNode = parseInt(len/2) - 1;
    for (let i = lastFatherNode; i >= 0 ; i--) {
        adjustMaxHeap(arr, i, arr.length-1);
    }
}

function adjustMaxHeap(arr, start, heapSize){
    let iMax, iLeft, iRight;
    while (true){
        iMax = start;
        iLeft = start*2 + 1;
        iRight = start*2 + 2;

        if (iLeft <= heapSize && arr[iLeft] > arr[iMax]){
            iMax = iLeft;
        }

        if (iRight <= heapSize && arr[iRight] > arr[iMax]){
            iMax = iRight;
        }
        if (iMax !== start){
            swap(arr, iMax, start);
            start = iMax;
        }else {
            break;
        }
    }

}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [5,3,21,45,5,6,7]
let res = heapSort(arr);
console.log(res)