/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0){
        return matrix;
    }
    let m = matrix.length;
    let n = matrix[0].length;
    let res = []; //存储结果
    //为每轮遍历设定一个行列长度框架，每轮结束后，根据遍历情况，缩小框架，初始值为 m，n
    //上下左右四个边界，分别为，top, bottom, left, right
    let top = 0;
    let bottom = m-1;
    let left = 0;
    let right = n-1;
    let nums = matrix;  //这里是因为后面用的全是nums，忘记传的参数是matrix了
    while(true){
        //从左到右遍历，然后top++
        for (let i = left; i <= right; i++) {
            res.push(nums[top][i]);
        }
        top++;
        if (top>bottom) break; //说明最后一行了

        //从上到下遍历
        for (let i = top; i <= bottom ; i++) {
            res.push(nums[i][right]);
        }
        right--;
        if (left>right) break;  //说明最后一列

        //从右到左遍历
        for (let i = right; i >= left; i--) {
            res.push(nums[bottom][i]);
        }
        bottom--;
        if (top>bottom) break;

        //从下到上遍历
        for (let i = bottom; i >= top ; i--) {
            res.push(nums[i][left]);
        }
        left++;
        if (left>right) break;
    }
    return res;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
let res = spiralOrder(matrix);
console.log(res)