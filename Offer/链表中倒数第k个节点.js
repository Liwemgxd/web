/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val){
    this.val = val;
    this.next = null;
}

var getKthFromEnd = function(head, k) {
    let left = head;
    let right = head;
    for(let i = 1; i<=k-1; i++){
        right = right.next;
    }
    while(right.next !== null){
        left = left.next;
        right = right.next;
    }
    return left;
};