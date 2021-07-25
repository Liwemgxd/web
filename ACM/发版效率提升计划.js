/**
 * Note: 类名、方法名、参数名已经指定，请勿修改
 *
 *
 * 返回优化后的发版成功率，格式是 x.xxxxxx%，保留 6 位小数
 * @param failed int整型一维数组 failed[i] 表示编号为 i 的项目的发版失败次数
 * @param total int整型一维数组 total[i] 表示编号为 i 的项目的总发版次数
 * @param dependencies int整型二维数组 dependencies[i] 表示编号为 i 的项目依赖的项目列表
 * @return string字符串
 */
function deploy(failed, total, dependencies) {
    // write code here
    //vals 记录，每个元素的成功率
    //循环优化每一个项目，重新计算成功率(这里要递归计算或者考虑动态规划，时间不够暂时不写，先测试一下通过率）
    let max = 0;
    for (let i = 0; i < total.length; i++) {
        let vals = [];
        for (let m = 0; m < total.length; m++) {
            let val = (total[m]-failed[m])/total[m];
            vals.push(val);
        }
        let cur; // 优化项目i，得到的系统成功率
        for (let j = 0;j<total.length; j++){
            if (i !== j && dependencies[j].indexOf(i) !== -1){  //依赖被优化项目 的项目
                let temp = 1; //更新后的值
                for (let k = 0; k<dependencies[j].length; k++){
                    if(dependencies[j]!==i){
                        temp *= vals[dependencies[j][k]];
                    }
                }
            }
        }
        //计算新的值总成功率
        let win = vals.reduce((pre,cur)=>{return pre*cur});
        max = win>max? win:max;
    }
    return round(max,8)

}


module.exports = {
    deploy : deploy
};




function round(val, e){
    let t = 1;
    for (;e>0;t*=10,e--);
    for (;e<0;t/=10,e++);
    let temp =  (Math.round(val*t)/t).toString();
    temp = temp.split('');
    //总共应该有10个元素，如果不够，后面补0；
    if(temp.length<10){
        while (temp.length<10){
            temp.push('0');
        }
    }
    temp.shift();
    temp.shift()
    temp.splice(2, 0, ".");
    temp.push('%')
    temp = temp.join('')
    return temp;
}
// let val = 0.9*0.9*0.9*0.9*0.9
// console.log(val)
// let res = round(val,8)
// console.log(typeof res)
// console.log(res)


arr = [1,2,3]
console.log(arr.indexOf(3))