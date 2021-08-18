function realStr(str){
    let len = str.length;
    let res = [];  //存储结果的列表
    //先找到第一个合法的输入
    let i = 0;
    while(str[i] === ' '){
        i++;
    }
    res.push(str[i++]);
    //然后循环处理
    for (i; i < len; i++) {
        let cur = str[i];
        if (cur === res[res.length-1] || cur === ' '){
            continue;
        }else {
            res.push(cur);
        }
    }
    return res.join('');
}

let str = 'a iC C    C GmyyyySp p';
console.log(realStr(str))   //样例通过： aiCGmySp
