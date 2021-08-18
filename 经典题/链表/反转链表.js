
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let newHead;
    let cur = head;
    while(cur){
        //先保存下一个节点，等下没了
        let tempNext = cur.next;
        //当前节点指向前一个节点
        cur.next = newHead;
        //新的头结点就是当前的节点
        newHead = cur;
        //下一轮的当前节点
        cur = tempNext;
    }
    return newHead;
};