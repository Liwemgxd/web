/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    switch (n){
        case 0: return 0;
        case 1: return 0;
        case 2: return 1;
        case 3: return 2;
        case 4: return 4;
    }
    let p = 1000000007;
    let product = 1;
    while(n>=5){
        product = product * 3 % p;
        n -= 3;
    }
    return product * n % p;
};


console.log(cuttingRope(120));