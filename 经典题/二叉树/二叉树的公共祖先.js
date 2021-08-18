
//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    if(root === null){
        return null;
    }
    if(root.val === p.val || root.val === q.val){
        return root;
    }
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left === null && right === null){
        return null;
    }
    if (left === null && right !== null){
        return right;
    }
    if (left !== null && right === null){
        return left;
    }
    if (left !== null && right !== null){
        return root;
    }
};