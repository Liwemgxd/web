function fn(arr, M){
    let res = 0;
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] <= M){
                res += 1;
            }
        }
    }
    return res;
}