
//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let list = [];
    middle(root, list);
    list.push(null)
    for (let i = 0; i < list.length-1; i++) {
        list[i].left = null;
        list[i].right = list[i+1];
    }
    return list[0];
};

function middle(node, list){
    if (node === null){
        return;
    }
    middle(node.left, list);
    list.push(node);
    middle(node.right, list);
}

