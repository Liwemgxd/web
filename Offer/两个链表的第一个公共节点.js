

function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * 哈希集合法
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const visited = new Set();
    let temp = headA;
    while (temp !== null) {
        visited.add(temp);
        temp = temp.next;
    }
    temp = headB;
    while (temp !== null) {
        if (visited.has(temp)) {
            return temp;
        }
        temp = temp.next;
    }
    return null;
};

/**
 * 双指针法
 * @param headA
 * @param headB
 * @return {null|*}
 */
var getIntersectionNode1 = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};



function buildList(arr){
    let len  = arr.length;
    head = new ListNode(arr[0]);
    let temp = head;
    for (let i = 1; i < len; i++) {
        temp.next = new ListNode(arr[i]);
        temp = temp.next
    }
    return head;
}