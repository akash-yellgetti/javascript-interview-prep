/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    var dummy = {
      val : -1,
      next : null
    };
    var curr = dummy;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            curr.next = l2;
            l2 = l2.next;
        } else {
            curr.next = l1;
            l1 = l1.next;
        }
        curr = curr.next;
    }
    
    curr.next = l1 || l2;

    return dummy.next;
};

let list1 = [1,2,4], list2 = [1,3,4]

console.log(mergeTwoLists(list1, list2))