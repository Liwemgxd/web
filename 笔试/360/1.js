/**
 *
 * @param endScores
 * @param n 学生数量
 * @param p 平时成绩比例
 * @param q 期末成绩比例
 */
//
function cal(endScores, p, q){
    endScores.sort((a, b) => b-a);   //先把读到的成绩，从大到小排序
    let commonScore = 100;   //平时成绩的初始值
    let res = [];   //存储每个同学的最终成绩
    let firstOne = (endScores[0] * q + commonScore * p) / 100;  //先把第一个同学的最终成绩放进去
    res.push(firstOne);
    for (let i = 1; i < endScores.length; i++) {  //从第二位同学开始
        if(endScores[i] !== endScores[i-1] && commonScore > 0){  //判断前后两名同学的成绩是否相同，相同的话，平时分先不减
            commonScore--;
        }
        let cur = (endScores[i] * q + commonScore * p) / 100;  //计算当前同学的最终成绩放进去
        res.push(cur);
    }
    let count = 0;
    res.forEach(item => {  //用for循环，找及格的分数即可
        if (item >= 60){
            count++;
        }
    })
    console.log(count);
}

let n = 2 , p = 20, q = 80;
let endScores = [51, 50];



cal(endScores, p, q)