 //Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if (root == null){
        return null;
    }
    swap(root)
    return root;
};

function swap(node){
    if (node.left !== null){
        swap(node.left)
    }
    if (node.right !== null){
        swap(node.right)
    }
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
}