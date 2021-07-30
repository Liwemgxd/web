function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var pathSum = function(root, target) {
    var res = [];
    let path = [];

    dfs(root, target, path, res);
    return res;
}

function dfs(node, target, path, res){
    if (node === null){
        return;
    }
    path.push(node.val);
    target = target - node.val;
    if (node.left === null && node.right === null && target === 0){
        // res.push(path)  //这样是不行的，传进去一个path的地址，最后path会pop为[]
        res.push(JSON.parse(JSON.stringify(path)));
    }
    dfs(node.left, target, path, res);
    dfs(node.right, target, path, res);
    path.pop();
}


/**
 * 这个解法比较好
 * @param root
 * @param sum
 * @return {[]|*[]}
 */

var pathSum1 = function(root, sum) {
    if (root === null) return [];
    const res = [];
    const DFS = (root, sum, tmp) => {
        if (root.val === sum && !root.left && !root.right) {
            res.push(tmp);
        }
        tmp.push(root.val);
        if (root.left) DFS(root.left, sum - root.val, tmp.slice());
        if (root.right) DFS(root.right, sum - root.val, tmp.slice());
    }
    DFS(root, sum, []);
    return res;
};

