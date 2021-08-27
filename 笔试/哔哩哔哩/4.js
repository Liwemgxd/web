

function NthMaxNum(nums, n){
    let dict = {};
    nums.forEach(item => {
        dict[item] = (dict[item] || 0) + 1;
    });
    console.log(dict)
    let tempKeys = Object.keys(dict).sort((a, b) => dict[b] - dict[a])
    let num = tempKeys[n-1];
    let arr = []


    let counts = dict[tempKeys[n-1]];
    console.log(typeof num)
    return num + ' ' + counts
}

let nums = [1,3,2,3,2,2,1,2];
let n = 1;
console.log(NthMaxNum(nums, n));
