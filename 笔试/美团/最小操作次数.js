function minCount(n, arr){
    let count = 0;
    let h = n/2;
    for (let i = 0; i < h; i++) {
        if (arr[i] !== arr[i+h]){
            count++;
        }
    }
    console.log(count);
}


let n = 10;
arr = [4,2,1,5,2,10,2,1,5,8]
minCount(n, arr)