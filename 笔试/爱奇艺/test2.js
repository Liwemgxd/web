let str = 'abcdefggggfedcbc';

let stk = [];
for (const ch of str){
    if (stk.length && stk[stk.length-1] === ch){
        stk.pop();
    }else {
        stk.push(ch);
    }
}

console.log(stk.join(''))


