function FarmerNN( n ,  m ) {
    if (n < 0){
        return;
    }
    if (n === 1){
        return [m];
    }
    let res = new Array(n).fill(0);
    let base = Math.floor((m-1) / (n-1) );
    let remain = m - 1 - (n-1) * base;
    if (base === 0){
        remain += 1;
    }
    for (let i = 0; i < n-1; i++) {
        res[i] = base;
    }
    let head = Math.floor((base-1) / 2) + 1;
    let tail = Math.floor((base-1) / 2) + 1;
    if ((base-1) % 2 && head != 0){
        head += 1;
    }
    res[0] = head;
    res[n-1] = tail;
    let jo = true;
    if (base % 2 === 1){
        jo = false;
    }
    if (jo){
        let start = 0;
        if (base !== 0){
            start = 1;
        }
        for (let j = start; j < remain + start; j++) {
            res[j] += 1;
        }
    }else {
        for (let j = n-2; j > n-2-remain; j--) {
            res[j] += 1
        }
    }
    return res;
}

console.log(FarmerNN(2,5))