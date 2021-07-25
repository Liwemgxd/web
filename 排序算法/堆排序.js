/**
  　 a.将无序序列构建成一个堆，根据升序降序需求选择大顶堆或小顶堆;
 　　b.将堆顶元素与末尾元素交换，将最大元素"沉"到数组末端;
 　　c.重新调整结构，使其满足堆定义，然后继续交换堆顶元素与当前末尾元素，反复执行调整+交换步骤，直到整个序列有序。
 */

function heapSort(arr){
    let len = arr.length;
    if(!Array.isArray(arr) || len <= 1){
        return arr;
    }
    buildMaxHeap(arr);

    for (let i = arr.length-1; i > 0; i--) {
        swap(arr, 0, i);
        adjustMaxHeap(arr, 0, i)
    }
    return arr;
}

function buildMaxHeap(arr){
    let len = arr.length;
    let iParent = parseInt(len >> 1) - 1;
    for (let i = iParent; i >= 0 ; i--) {
        adjustMaxHeap(arr, i, len);
    }

}

function adjustMaxHeap(arr, index, heapSize){
    let iMax, iLeft, iRight;
    while(true){
        iMax = index;
        iLeft = 2*index + 1;
        iRight = 2*index + 2;

        //如果左子元素存在，且左子元素大于最大值，则更新最大值索引
        if (iLeft < heapSize && arr[iMax] < arr[iLeft]){
            iMax = iLeft;
        }

        // 如果右子元素存在，且右子元素大于最大值，则更新最大值索引
        if(iRight < heapSize && arr[iMax] < arr[iRight]){
            iMax = iRight;
        }

        // 如果最大元素被更新了，则交换位置，使父节点大于它的子节点，同时将索引值更新为被替换的值，继续检查它的子树
        if (iMax !== index){
            swap(arr, index, iMax);
            index = iMax;
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

export {heapSort}

let arr = [5,3,21,45,5,6,7]
let res = heapSort(arr);
console.log(res)