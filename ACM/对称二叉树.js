/**
 * Note: 类名、方法名、参数名已经指定，请勿修改
 *
 *
 *
 * @param root TreeNode类
 * @return bool布尔型
 */
function isSymmetric(root) {
    // write code here
    if (root == null){
        return null;
    }
    return dfs(root.left,root.right);
}
function dfs(node1 ,node2){
    if (node1 == null && node2 == null){
        return true;
    }
    if (node1 == null || node2 == null || node1.val !== node2.val){
        return false;
    }
    return dfs(node1.left, node2.right)&&dfs(node1.right, node2.left);
}