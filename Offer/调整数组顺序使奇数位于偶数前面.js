/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let index_pre = 0;
    let index_end = nums.length-1;
    while(index_end>index_pre){
        if(nums[index_pre] % 2 == 0 && nums[index_end] % 2 !== 0){   //如果前面是偶数，后面是奇数，交换
            let temp = nums[index_pre];
            nums[index_pre] = nums[index_end];
            nums[index_end] = temp;
        }else if (nums[index_pre] % 2 == 0 && nums[index_end] % 2 == 0){   //前面是偶数，后面也是偶数，后面指针向前一位
            index_end--;
        }else if (nums[index_pre] % 2 !== 0 && nums[index_end] % 2 !== 0){  //前面是奇数，后面是奇数，前面指针向后一位
            index_pre++;
        }else if(nums[index_pre] % 2 !== 0 && nums[index_end] % 2 == 0){   //前面是奇数，后面是偶数，两个指针都聚拢一位
            index_pre++;
            index_end--;
        }
    }
    return nums;
};


let nums = [1,2,3,4];
console.log(123)
let res = exchange(nums);

console.log(res)