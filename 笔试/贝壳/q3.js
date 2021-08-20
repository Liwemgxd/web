

function isMountain(n){
    let strN = n.toString();
    if(strN.length % 2 === 0){
        return 0;
    }
    if (n < 10){
        return 1;
    }
    let mid = Math.floor(strN.length/2);
    for (let i = 0; i < mid; i++) {
        if (strN[i] >= strN[i+1]){
            return 0;
        }
    }
    for (let i = mid + 1; i < strN.length; i++) {
        if (strN[i] >= strN[i-1]){
            return 0;
        }
    }
    return 1;
}

function solve( n ) {
    // write code here
    let res = 0;
    for (let i = 1; i < n; i++) {
        res += isMountain(i)
    }
    return res;
}

console.log(solve(999))