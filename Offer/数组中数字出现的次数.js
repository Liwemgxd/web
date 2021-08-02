/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let len = nums.length;
    let set = new Set();
    let res = [];
    for (let i = 0; i < len; i++) {
        let cur = nums.shift();
        if (set.has(cur)){
            continue;
        }else {
            if (nums.indexOf(cur) === -1){
                res.push(cur);
            }
            set.add(cur);
        }
    }
    return res;
};