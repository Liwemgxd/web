
// function neighbor(arr){
//     let res = 0;
//     for (let i = 0; i < arr.length-1; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             let cur = arr[i];
//             let temp = arr[j];
//             if (Math.abs((cur[1] - temp[1])/(cur[0] - temp[0])) === 1){
//                 res += 1;
//             }
//         }
//     }
//     console.log(res)
// }



let arr = [[3,4], [4,5], [5,6], [4,7], [3,8]];
neighbor(arr)
function neighbor(arr){
    let res = 0;
    let line = [];
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            let c1 = arr[i][1] - arr[i][0];  //以该坐标，斜率为1的线
            let c2 = arr[i][1] + arr[i][0];  //以该坐标，斜率为-1的线
            if (arr[j][0] + c1 === arr[j][1] || -arr[j][0] + c2 === arr[j][1]){
                res ++;
            }
        }
    }
    console.log(res)
}