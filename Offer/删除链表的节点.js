/**
 * Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
 }

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var deleteNode = function(head, val) {
    let cur = head;
    while(cur.next.val !== val){
        cur = cur.next;
    }
    let delNode = cur.next;
    cur.next = delNode.next;
};

let head = [4,5,1,9]
let val = 5
deleteNode(head,val)