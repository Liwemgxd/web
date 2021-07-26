/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let res = [];
    let list = s.split('');
    let dfs = function (index){
        if (index === list.length-1){
            res.push(list.join(''));
            return;
        }
        let set = new Set();
        for (let i = index; i < list.length; i++) {
            if(set.has(list[i])){
                continue;
            }
            set.add(list[i]);
            [list[index], list[i]] = [list[i], list[index]];
            dfs(index+1);
            [list[i], list[index]] = [list[index], list[i]];   //交换回来，不影响上一层的递归继续使用原序列
        }
    }
    dfs(0);
    return res;
};