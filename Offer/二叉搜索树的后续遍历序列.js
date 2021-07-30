/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    if (postorder.length <= 1){
        return true;
    }
    function recur(i, j, postorder){
        if(i >= j){
            return true;
        }
        let p = i;
        while(postorder[p] < postorder[j]){
            p++;
        }
        let m = p;
        while(postorder[p] > postorder[j]){
            p++;
        }
        return j === p && recur(i, m-1, postorder) && recur(m, j-1, postorder);
    }
    return recur(0, postorder.length-1, postorder);

};

let arr = [4, 8, 6, 12, 16, 14, 10];
console.log(verifyPostorder(arr))