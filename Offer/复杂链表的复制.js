
// Definition for a Node.
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

function copyNode(node){
    if (node == null){
        return null;
    }
    let newNode = new Node();
    newNode.val = node.val;
    return newNode;
}

var copyRandomList = function(head) {
    if(head == null){
        return null;
    }
    cur = head;
    let resHead = copyNode(head);
    let pre = resHead;
    //构建map对象，存储原节点和复制节点的映射
    let map = new Map();
    map.set(head,resHead);
    while(cur){
        pre.next = copyNode(cur.next);
        map.set(cur.next, pre.next);
        cur = cur.next;
        pre = pre.next;
    }
    cur = head;
    while(cur){
        map.get(cur).random = map.get(cur.random);
        cur = cur.next;
    }
    return resHead;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
node1.next = node2;
node2.next = node3;
node2.random = node5;
node3.next = node4;
node4.next = node5;
node5.next = null;

let node = copyRandomList(node1);
console.log(node.next.random)
