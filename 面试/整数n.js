//给定一个整数n，计算所有小于等于n的非负整数中数字1出现的次数，不要使用转字符串的方式。注意：11中出现2次1

function count1(n){
    let m = 1;
    let res = 0;
    while(n >= m){
        res += (1 + parseInt((parseInt(n / m) - 1) / 10)) * m;
        if (parseInt(n / m) % 10 == 1){
            res = res - m + 1 + n%m;
        }
        m *= 10;
    }
    return res;
}

console.log(count1(11))

