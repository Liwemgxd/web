/**
 *  小程在玩一款叫做“攻城战”的游戏。
 经历过一段时间的战斗之后，小程的坦克急需维修。
 一辆坦克有n个零件，用一个长度为n的字符串表示，称作坦克的状态串。一共有26种不同种类的零件，每个零件的种类用小写字母’a’-‘z’表示。
 在战场上维修坦克时，可以任意在状态串的前后添加任意零件，每添加一个零件花费C元。即小程每次可以花费C元在状态串的开头添加任意一个小写字母，或者在状态串的结尾添加任意一个小写字母。同时，小程还可以任意替换已有的零件，即将当前状态串中的一个小写字母修改为另一个小写字母，每修改一个小写字母花费D元。
 坦克被修好是指：一辆坦克的状态串通过添加和替换操作，恢复到与出厂时的状态串完全一致。
 现在，已知坦克出厂时的状态串B和当前损坏后的状态串A以及添加零件、替换零件的花费C和D，你可以告诉小程，要把坦克修好至少需要多少元吗？
 */

function match_num(A,B){
    let num = 0;
    let max_len = 0;
    let vvi = [];
    for(let i = 0; i < A.length+1; i++){
        vvi[i] = new Array(B.length+1).fill(0);
    }
    for (let i = 1; i <= A.length; i++) {
        for (let j = 1; j <= B.length ; j++) {
            if (A[i-1] == B[i-1]){
                vvi[i][j] = vvi[i-1][j-1]+1;
            }else {
                vvi[i][j] = Math.max(vvi[i-1][j], vvi[i][j-1]);
            }
        }
    }
    return vvi[A.length][A.length]
}

function calc(A, B, C, D){
    let num = 0;
    for (let i = 0; i < (B.length - A.length); i++) {
        num = Math.max(num, match_num(A,B.substr(i, A.length)));
    }
    return D*(A.length - num) + (B.length-A.length)*C
}


let A = 'baaba'
let B = 'bbbbbbb'
let C = 20
let D = 30
console.log(calc(A,B,C,D))


