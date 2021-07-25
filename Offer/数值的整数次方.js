/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n==0){
        return 1;
    }
    if (n==1){
        return x;
    }
    const isNegative = n < 0;
    let absn = Math.abs(n);
    // Math.floor(absn / 2) 和 absn>>1 的区别
    let res = myPow(x, Math.floor(absn / 2));
    res *= res;
    if (absn&1){
        res *= x;
    }

    return isNegative? 1/res : res;
};

let res = myPow(2.00000,-2147483648);
// let res = myPow(2.00000,10);
console.log(res);
