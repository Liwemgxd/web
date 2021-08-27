
function sumJishu(n){
    if (n < 1){
        return 0;
    }
    let count = Math.ceil(n / 2);
    let a1 = 1;
    let an = n % 2 === 1? n : n-1;
    return Math.floor(count*(a1 + an) / 2);
}

console.log(sumJishu(10))