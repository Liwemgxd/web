//Definition for singly-linked list.
function ListNode(val) {
    this.val = (val===undefined ? 0 : val)
    this.next = null;
}

function buildList(arr){
    let head = new ListNode(arr[1]);
    let preNode = new ListNode();
    preNode.next = head;
    let node;
    for (let i = 1; i < arr.length; i++) {
        node = new ListNode(arr[i]);
        head.next = node;
        head = head.next;
    }
    return preNode.next;
}

function printList(head){
    let arr = [];
    while (head){
        arr.push(head.val);
    }
    console.log(arr.toString())
}

let arr = [1,2,3,4];
let head = buildList(arr);
printList(head)