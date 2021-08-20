// let line = '3 4';
// let m, n;
// [m, n] = line.split(' ').map(Number)
// console.log(typeof m)
//
// var line;
// while(line = readline()){
//     line = line.split(' ');
//     print(parseInt(line[0]) + parseInt(line[1]));
// }
//
//
// function calc(A, B ,C, D){
//     let len_A = A.length;
//     let len_B = B.length;
//     let dp = [];
//     for(let i = 0; i < len_A+1; i++){
//         dp[i] = new Array(len_B+1).fill(0);
//     }
//     for (let i = 1; i < len_B + 1; i++) {
//         dp[0][i] = dp[0][i-1] + C;
//     }
//
//     for(let i = 1; i< len_A+1; i++){
//         for(let j = 1; j < len_B + 1; j++){
//             if (A[i-1] === B[j-1]){
//                 dp[i][j] = dp[i-1][j-1];
//             }else {
//                 dp[i][j] = Math.min(dp[i][j-1]+C, dp[i-1][j-1]+D);
//             }
//         }
//     }
//     return dp[dp.length-1][dp[0].length-1]
// }

function match_num(A,B){
    let num = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === B[i]){
            num += 1;
        }
    }
    return num;
}

arr = [2,1,3]
arr.sort((a,b)=>a-b)
console.log(arr)

let str = 'liwemg';
console.log(str.slice(2, 2+1))