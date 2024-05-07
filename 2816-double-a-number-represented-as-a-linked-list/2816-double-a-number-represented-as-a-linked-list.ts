/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function doubleIt(head: ListNode | null): ListNode | null {
    const reverse = function(head: ListNode | null): ListNode | null {
        let curr: ListNode | null = head;
        let nxt: ListNode | null = null;
        let prev: ListNode | null = null;
        while(curr !== null){
            nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }
        return prev;
    };

    let rev: ListNode | null = reverse(head);
    let curr: ListNode | null = rev;
    let prev: ListNode | null = rev;
    let carry: number = 0;
    while(curr !== null){
        curr.val = 2 * curr.val + carry;
        carry = Math.floor(curr.val / 10);
        curr.val %= 10;
        prev = curr;
        curr = curr.next;
    }
    if(carry > 0){
        let newtemp: ListNode = new ListNode(carry);
        prev.next = newtemp;
    }
    return reverse(rev);
};