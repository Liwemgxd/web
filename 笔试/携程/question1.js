function calc(A, B ,C, D){
    let len_A = A.length;
    let len_B = B.length;
    let dp = [];
    for(let i = 0; i < len_A+1; i++){
        dp[i] = new Array(len_B+1).fill(0);
    }
    for (let i = 1; i < len_A +1; i++) {
        dp[i][0] = dp[i-1][0] + Number.POSITIVE_INFINITY;
    }
    for (let i = 1; i < len_B + 1; i++) {
        dp[0][i] = dp[0][i-1] + C;
    }

    for(let i = 1; i< len_A+1; i++){
        for(let j = 1; j < len_B + 1; j++){
            if (A[i-1] === B[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }else {
                dp[i][j] = Math.min(dp[i][j-1]+C, dp[i-1][j-1]+D);
            }
        }
    }
    return dp[dp.length-1][dp[0].length-1]
}

let A = 'baaba'
let B = 'bbbbbbb'
let C = 20
let D = 30
console.log(calc(A,B,C,D))