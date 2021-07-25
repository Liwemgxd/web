/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length;
    let i = 0, j = len-1;
    while(i<j){
        let temp = nums[i] + nums[j];
        if (temp === target){
            return [nums[i], nums[j]];
        }
        if (temp > target){
            j--;
        }
        if (temp < target){
            i++;
        }
    }
};