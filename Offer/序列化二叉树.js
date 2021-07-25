
 //Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let res = [];
    preSearch(root, res);
    let str = res.join('')
    return str.slice(0, str.length-1);
};
function preSearch(node, res){
    if (node == null){
        res.push('null/')
        return;
    }else {
        res.push(node.val + '/')
    }
    preSearch(node.left, res);
    preSearch(node.right, res)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let nodeList = data.split('/');
    return rePreSearch(nodeList);

};

function rePreSearch(nodeList){
    if (nodeList[0] === 'null'){
        nodeList.shift();
        return null;
    }
    let root = new TreeNode(parseInt(nodeList[0]));
    nodeList.shift();
    root.left = rePreSearch(nodeList);
    root.right = rePreSearch(nodeList);
    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// arr = [ '2/', 'null/', '1/']
// let arr = ['null/']
// let str = arr.join('')
// str = str.slice(0, str.length-1)
// console.log(str)
// console.log(str.split('/'))

let root = new TreeNode(1);
root.right = new TreeNode(3)
// let str = serialize(root);
//  console.log(str)
//  console.log(str.split('/'))
let res = deserialize(serialize(root));
 console.log(res)

