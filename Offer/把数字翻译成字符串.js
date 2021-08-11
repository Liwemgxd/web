/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let strNum = num.toString();
    let len = strNum.length;
    let res = [];
    res[0] = 1;
    if (isTranslate(strNum[0] + strNum[1])){
        res[1] = 2;
    }else {
        res[1] = 1;
    }
    for (let i = 2; i < len; i++) {
        if (isTranslate(strNum[i-1] + strNum[i])){
            res[i] = res[i-1] + res[i-2];
        }else {
            res[i] = res[i-1];
        }
    }
    return res[res.length-1]
};

function isTranslate(str){
    if (10 <= Number(str) && Number(str) <= 25){
        return true;
    }
}

let num = 12258;
console.log(translateNum(num))


