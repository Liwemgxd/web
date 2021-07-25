let board = [["a","b"]];
let word = "ba";


var exist = function(board, word) {
    for(let i=0; i<board.length; i++){
        for (let j=0; j < board[0].length; j++){
            if (dfs(i, j, 0)){
                return true;
            }
            //return dfs(i, j, 0);  如果直接以这种形式返回，那等同于只判断以左上角为首个元素能否成功，其他的起始位置都不判断了
        }
    }
    return false;
};

var dfs = function (i, j, k){
    if (i<0 || i>=board.length || j<0 || j>=board[0].length || board[i][j]!=word[k]){
        return false;
    }
    if (k == word.length-1){
        return true;
    }
    board[i][j] = '';
    let res = dfs(i+1, j, k+1) || dfs(i, j+1, k+1) || dfs(i-1, j, k+1) || dfs(i, j-1, k+1);
    board[i][j] = word[k];
    return res;
};

console.log(exist(board, word));
