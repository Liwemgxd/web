var search = function(nums, target) {
    if(target > nums[nums.length-1] || target < nums[0]){
        return -1;
    }
    let left = 0, right = nums.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right ) / 2);
        if (nums[mid] === target){
            return mid;
        }
        if (nums[mid] < target){
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return -1;
};
let nums = [-1,0,3,5,9,12], target = 5;
let res = search(nums, target)
console.log(res)