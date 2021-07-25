/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val){
    this.val = val;
    this.next = null;
}

var reverseList = function(head) {
    if (head == null || head.next == null){
        return head;
    }
    let endNode = head;
    while(endNode.next !== null){
        endNode = endNode.next;
    } //此时，endNode指向尾节点

    while(head.next !== endNode){
        let temp = head.next;
        head.next = endNode.next;
        endNode.next = head;
        head = temp;
    }
    head.next = endNode.next;
    endNode.next = head;
    return endNode;
};