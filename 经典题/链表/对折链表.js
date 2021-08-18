/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const dummy = new ListNode(0)
    dummy.next = head

    let slow = dummy
    let quick = dummy

    while (quick && quick.next) {
        slow = slow.next
        quick = quick.next
        quick = quick.next
    }

    let right = slow.next
    slow.next = null
    let left = dummy.next

    right = reverseList(right)

    while (left && right) {
        let lNext = left.next
        let rNext = right.next
        right.next = left.next
        left.next = right
        left = lNext
        right = rNext
    }

    return dummy.next
}

var reverseList = (list) => {
    let prev = null
    let cur = list

    while (cur) {
        let next = cur.next
        cur.next = prev

        prev = cur
        cur = next
    }

    return prev
}