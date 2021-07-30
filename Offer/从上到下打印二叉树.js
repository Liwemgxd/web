/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * 打印到一行列表中
 * @param root
 * @return {number[]}
 */
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }
    let res = [];
    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let node = queue.shift();
        res.push(node.val);
        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right)
        }
    }
    return res;
};

/** 层序打印，每层打印一行
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder1 = function (root) {
    if (root === null) {
        return [];
    }
    let res = [];
    let queue = [];
    queue.push(root);
    queue.push('#')
    let temp = [];
    while (true) {
        let node = queue.shift();
        if (node !== '#') {
            temp.push(node.val);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
        } else {
            res.push(temp);
            temp = [];
            if (queue.length === 0) {
                break;
            }
            queue.push('#');
        }
    }
    return res;
};

/**
 * 之子型打印，每行一个列表
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
    if (root === null) {
        return [];
    }
    let res = [];
    let queue = [];
    queue.push(root);
    queue.push('#')
    let flag = false;   //左边先 是true
    let temp = [];
    while (true) {
        let node = queue.shift();
        if (node !== '#') {
            temp.push(node.val);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
        } else {
            if (res.length % 2 === 1){
                temp = temp.reverse();
            }
            res.push(temp);
            temp = [];
            if (queue.length === 0) {
                break;
            }
            queue.push('#');
            flag = !flag;
        }
    }
    return res;
};