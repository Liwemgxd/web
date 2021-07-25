

function radixSort(arr){
    let len = arr.length;
    if (!Array.isArray(arr) || len <= 1) return arr;

    let bucket = [];
    for (let i = 0; i < 10; i++) {
        bucket[i] = [];
    }
    //找到数组中的最大值，确定位数
    let max = arr[0];
    for (let i = 1; i < len; i++) {
        if (arr[i] > max){
            max = arr[i];
        }
    }
    //确定位数
    let loop = (max+'').length;

    //正题开始
    for (let i = 0; i < loop; i++){
        for (let j = 0; j < len; j++){
            let str = arr[j] + '';
            if (str.length - 1 - i >= 0){
                let k = parseInt(str[str.length-1-i]);
                bucket[k].push(arr[j]);
            }else {
                bucket[0].push(arr[j]);
            }
        }
        
        //清空数组
        arr.splice(0, len);
        
        //重新初始化数组
        for (let j = 0; j < 10; j++) {
            let t = bucket[j].length;
            for (let k = 0; k < t; k++) {
                arr.push(bucket[j][k]);
            }
            bucket[j] = [];
        }
    }
    return arr;
}

let arr = [5,3,21,45,5,6,7]
let res = radixSort(arr);
console.log(res)