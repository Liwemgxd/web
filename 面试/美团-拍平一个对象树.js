function Node(id, children){
    this.id = id;
    this.children = children || [];
}

let node1 = new Node(1);
let node2 = new Node(2, [node1]);
let node3 = new Node(3, [node1, node2]);
let node4 = new Node(4, [node1, node2, node3]);
let tree = new Node(0, [node1, node2, node3, node4]);


function flatTree(tree){
    let res = new Array();
    function dfs(node, res){
        res.push(node);
        if (node.children.length > 0){
            for (let i = 0; i < node.children.length; i++) {
                dfs(node.children[i], res);
                // console.log(node.children[i].id)
            }
        }
    }
    dfs(tree, res)
    return res;
}

let res = flatTree(tree)
console.log(res)