/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//维护一个单调队列
var maxSlidingWindow = function(nums, k) {
    let queue = [];
    let res = [];
    for (let i = 0; i < k; i++) {
        while(queue.length > 0 && queue[queue.length-1] < nums[i]){
            queue.pop();
        }
        queue.push(nums[i]);
    }
    res.push(queue[0]);
    for (let i = k; i < nums.length; i++) {
        if(nums[i-k] === queue[0]){
            queue.shift();
        }
        while(queue.length > 0 && queue[queue.length-1] < nums[i]){
            queue.pop();
        }
        queue.push(nums[i]);
        res.push(queue[0]);
    }
    return res;
};

let nums = [7,2,4];
console.log(maxSlidingWindow(nums, 2))