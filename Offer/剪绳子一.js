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
    }

    let products = new Array(n+1);
    products[0] = 0;
    products[1] = 1;
    products[2] = 2;
    products[3] = 3;

    let max = 0;
    for (let i=4; i<=n; i++){
        let max = 0;
        for (let j=1; j<=Math.floor(i/2); j++){
            let product = products[j] * products[i-j];
            if (product>max){
                max = product;
            }
        }
        products[i] = max;
    }
    max = products[n];
    console.log(products)
    return max;
};


console.log(cuttingRope(3))