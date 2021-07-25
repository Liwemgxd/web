var movingCount = function(m, n, k) {
    var dfs = function (i, j){
        if(weishuhe(i, j)>k || i<0 || i>=m || j<0 || j>=n || set.has(`${i},${j}`)){
            return false;
        }
        set.add(`${i},${j}`);
        count++;
        dfs(i+1, j);
        dfs(i, j+1);
    }

    let set = new Set();
    let count = 0;
    dfs(0, 0);
    return count;
};



var weishuhe = function (i, j){
    let num_i = 0;
    let num_j = 0
    while(i>0){
        num_i += i%10;
        i = Math.floor(i/10);
    }
    while (j>0){
        num_j += j%10;
        j = Math.floor(j/10);
    }
    return num_i + num_j;
};


let m = 2, n = 3, k = 1;
res = movingCount(m,n,k);
console.log(res)


