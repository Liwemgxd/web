
let M = 100;
let N = 3;
let L = 1;

// let start = [1,2,3];
// let v = [2,1,1];
let start = [1,105];
let v = [2,0.9];

let res = [0];  //记录除第一个赛车外，消灭其他赛车需要的时间，最后求最大值

for (let i = 1; i < start.length; i++) {
    let temp_dis = Math.abs(start[i] - start[0]); //反转前的相对距离
    let temp_dis1 = Math.abs((start[0] + M)%(2*M) - start[i]);  //反转后的相对距离
    //如果绝对值直接小于等于L，那么可以直接让它消失，时间为0
    if (temp_dis <= L || temp_dis1 <= L){
        res[i] = 0;
        continue;
    }
    //反之绝对值大于L，判断谁前谁后
    if (v[0] > v[i]){
        //我追别的赛车
        let dis = start[i] - start[0] ;
        dis = dis > M? dis -M : start[i] - start[0];
        res[i] = (dis - L)/(v[0] - v[i]);
    }else {
        //别的赛车追我
        let dis = 2*M - start[i] + start[0];
        dis = dis > M? dis - M : dis;
        res[i] = (dis- L)/(v[i] - v[0]);
    }
}

let maxTime = Math.max(...res)
console.log(maxTime)