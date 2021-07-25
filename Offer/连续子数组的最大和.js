/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length;
    let res = [];  //存储以下标i结尾的子数组最大和
    for (let i = 0; i < len; i++) {
        if (i===0 || res[i-1] <= 0){
            res[i] = nums[i];
        }else {
            res[i] = res[i-1] + nums[i];
        }
    }
    return Math.max(...res);
};
//优化空间，直接在原数组上修改
var maxSubArray = function(nums) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i===0 || nums[i-1] <= 0){
            continue;
        }else {
            nums[i] = nums[i-1] + nums[i];
        }
    }
    return Math.max(...nums);
};


arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(arr))