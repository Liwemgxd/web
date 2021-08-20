/**
 * 有n堆石子排成一行，各堆石子的数量分别是1~n，但它们的排列顺序是随机的。你的任务是通过一定的操作，使得从左到右第 i 堆石子的数量为 i 。你可以进行的操作是选择两堆相邻的石子，把一颗石子从一堆移到另一堆，花费的时间为1。
 然后，你有你个特殊的能力，可以选择两堆相邻的石子，使得这两堆石子之间进行移动不需要花费时间。请分别输出，当你可以发动这个能力的次数为0, 1, 2 … n – 1 时，最少需要的时间
 * @param arr
 * @returns {any[]}
 */

function minCost(arr){
    let preSum = new Array(arr.length+1).fill(0);
    for (let i = 1; i <= arr.length; i++) {
        preSum[i] = preSum[i-1] + arr[i-1];
    }
    let trans = new Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
        if (i === 0){
            trans[i] = Math.abs(1-arr[i]);
        }else {
            trans[i] = Math.abs(preSum[i+1] - (i+2)*(i+1)/2);
        }
    }
    let rvec = new Array(arr.length).fill(0);
    rvec[0] = trans.reduce((pre, cur)=>pre+cur);



    let flag = false;

    for (let i = 1; i < arr.length; i++) {
        let c_max = 0;
        let index = -1;
        if (flag) {
            rvec[i] = rvec[i-1];
        }
        for (let j = 0; j < trans.length; j++) {
            if (trans[j] > c_max){
                c_max = trans[j];
                index = j;
            }
        }
        if (index !== -1){
            trans[index] = 0;
        }else {
            flag = true;
        }
        rvec[i] = rvec[i-1] - c_max;
    }
    return rvec;
}

let arr = [3,2,1]
console.log(...minCost(arr))