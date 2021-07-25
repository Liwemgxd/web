/**
 * @param {number} n - a positive integer
 * @return {number}
 */

//解法一：
// var hammingWeight = function(n) {
//     // 巧用 x &= x - 1 清零最低位的1 这一特性不断迭代n 并记数count即可
//     let count = 0
//
//     while (n) {
//         count++
//         n &= n - 1
//     }
//
//     return count;
// };

    //解法二：右移n本身
// var hammingWeight = function(n) {
//
//     let count = 0
//     for(let i=0; i<32; i++){
//         if (n>>i&1){
//             count++;
//         }
//     }
//     return count;
// };

//解法三：左移1
var hammingWeight = function(n) {

        let count = 0
        for(let i=0; i<32; i++){
            if (n&(1<<i) === 1<<i){
                count++;
            }
        }
        return count;
};



