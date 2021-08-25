function candy(arr){
    let len = arr.length;
    let paperNums = new Array(len).fill(1);
    //从左到右
    for (let i = 1; i < len; i++) {
        if (arr[i] > arr[i-1]){
            paperNums[i] = paperNums[i-1] + 1;
        }
    }
    if (arr[0] > arr[len-1]){
        paperNums[0] = paperNums[len-1] + 1;
    }

    //从右往左
    for (let i = len-1; i > 0; i--) {
        if (arr[i] < arr[i-1] && paperNums[i-1] <= paperNums[i]){
            paperNums[i-1] = paperNums[i] + 1;
        }
    }
    if (arr[len-1] > arr[0] && paperNums[0] >= paperNums[len-1]){
        paperNums[len-1] = paperNums[0] + 1
    }

    let res = 0;
    paperNums.forEach(item => res += item);
    return res;
}

console.log(candy([1,1,1]))
console.log(candy([1,2,3]))
console.log(candy([5]))