function minSailCost( input ) {
    // write code here
    let res = Number.MAX_SAFE_INTEGER;
    let dx = [0, 0, -1, 1];
    let dy = [1,-1,0,0];

    function dfs(input, status, x, y, value){
        if (x === input.length - 1 && y === input[0].length - 1){
            res = Math.min(res, value);
            return;
        }
        for (let i = 0; i < 4; i++) {
            let a = x + dx[i];
            let b = y + dy[i];
            if (a >= 0 && a < input.length && b >= 0 && b < input[a].length && input[a][b] != 2 && !status[a][b]){
                if (value >= res){
                    continue;
                }
                status[a][b] = true;
                if (input[a][b] === 0){
                    dfs(input, status, a,b,value+2);
                }else {
                    dfs(input, status, a, b, value + 1);
                }
                status[a][b] = false;
            }

        }
    }
    let status = new Array(input.length).fill(new Array(input[0].length).fill(false));
    dfs(input, status, 0, 0, 0);
    if (res === Number.MAX_SAFE_INTEGER){
        return -1;
    }
    return res;
}



