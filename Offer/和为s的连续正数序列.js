/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let res = [];
    let left = 1;
    let right = 2;
    let sum = 3;
    let temp = [];
    while(right <= parseInt((target+1)/2)){
        if(sum === target){
            for (let i = left; i <= right; i++) {
                temp.push(i);
            }
            res.push(temp);
            sum -= left;
            left++;
            temp = [];
        }
        if (sum > target){
            sum -= left;
            left++;
        }
        if (sum < target){
            right++;
            sum += right;
        }
    }
    return res;
};

console.log(findContinuousSequence(15))