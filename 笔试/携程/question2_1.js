

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

    trans.sort((a,b) => a-b);
    let j = trans.length-1;
    for (let i = 1; i < arr.length; i++) {
        rvec[i] = rvec[i-1] - trans[j--];
    }
    return rvec;
}

let arr = [3,2,1]
console.log(...minCost(arr))