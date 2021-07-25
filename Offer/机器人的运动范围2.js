var movingCount = function(m, n, k) {
    let set = new Set();
    set.add('0,0');
    for (let i=0; i<m; i++){
        for (let j=0; j<n; j++){
            if(weishuhe(i,j)<=k){
                if(set.has(`${i-1},${j}`) || set.has(`${i},${j-1}`)){
                    set.add(`${i},${j}`)
                }
            }
        }
    }
    return set.size;
};



var weishuhe = function (i, j){
    let num_i = 0;
    let num_j = 0;
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

let m = 7, n = 2, k = 3;
console.log(movingCount(m,n,k));