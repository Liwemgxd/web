
 // Definition for a Node.

function Node(val,left,right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    function dfsNode(node){
        if(node == null){
            return null;
        }
        console.log(node.val);
        dfsNode(node.left);
        if (pre.val == undefined){
            head = node;
        }else {
            pre.right = node;
        }
        node.left = pre;
        pre = node;
        dfsNode(node.right);
    }

    if (root == null){
        return null;
    }
    var pre = new Node();
    var head = new Node();

    dfsNode(root);
    head.left = pre;
    pre.right = head;
    return head;
};



let root  = new Node(4);
let l1 = new Node(2);
let l2 = new Node(1);
let l3 = new Node(3);
let r1 = new Node(5);
root.left = l1;
root.right = r1;
l1.left = l2;
l1.right = l3;

let head = treeToDoublyList(root);
 console.log(head.val)
 console.log(head.right.val)
 console.log(head.right.left.val)
 // console.log(head.right.right.val)
 // console.log(head.right.right.right)