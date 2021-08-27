
//fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']

function f(matrix) {
    const result = [];
    const len = matrix.length;
    function dfs(res, curr) {
        if (res.length === len) {
            result.push(res.join(''));
            return;
        }
        for (let i = 0; i < matrix[curr].length; i++) {
            res.push(matrix[curr][i]);
            dfs(res, curr + 1);
            res.pop();
        }
    }
    dfs([], 0);
    return result;
}

let matrix = [['a', 'b'], ['n', 'm'], ['0', '1']];
console.log(f(matrix));