
//arr 保存所有的数字
const solution = function (arr){
    arr = arr.sort().reverse();
    let len = arr.length;
    let A = [], B = [];
    let flag = false;  //true 表示 A偏大， false 未知
    //判断奇偶长度
    let last = 0;
    if (len%2 !== 0){   //奇数，让A保存较大的
        flag = true;
        last = 1;
    }else {
        last = 2;
    }

    while(arr.length > last){
        let temp1 = arr.shift();
        let temp2 = arr.shift();
        if (flag){   //如果确定 A存大的
            A.push(Math.min(temp1, temp2));
            B.push(Math.max(temp1, temp2));
        }else {     //不确定A存大的，让A存大的
            A.push(Math.max(temp1, temp2));
            B.push(Math.min(temp1, temp2));
            if (temp1 !== temp2){
                flag = true;
            }
        }
    }
    if (last === 1){
        A.push(arr.shift());
    }else {
        let temp1 = arr.shift();
        let temp2 = arr.shift();
        if (flag){
            A.push(Math.min(temp1, temp2));
            B.push(Math.max(temp1, temp2));
        }else {
            A.push(Math.max(temp1, temp2));
            B.push(Math.min(temp1, temp2));
        }
    }
    let a = parseInt(A.join(''));
    let b = parseInt(B.join(''));
    console.log(a)
    console.log(b)
    return a*b;
}


let arr = [0,1,2,3,4,5,6,7,8,9];
console.log(solution(arr))