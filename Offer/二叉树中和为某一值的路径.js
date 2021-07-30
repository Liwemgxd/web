/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    let res = [];
    let arr = [];
    dfs(root, arr, target, res)
    return res;
};

function dfs(node, arr, target, res){
    if (node === null){
        return;
    }
    arr.push(node.val);
    if (node.left === null && node.right === null){
        if (sum(arr) === target){
            res.push(arr);
        }
        return;
    }
    let arr1 = JSON.parse(JSON.stringify(arr));
    let arr2 = JSON.parse(JSON.stringify(arr));
    dfs(node.left, arr1, target, res);
    dfs(node.right, arr2, target, res);
}

function sum(arr){
    let s = 0;
    for (let i=arr.length-1; i>=0; i--) {
        s += arr[i];
    }
    return s;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

let ans = pathSum(root, 4);
console.log(ans)

