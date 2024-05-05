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

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode): void {
    if (node.next === null) {
        throw new Error("Cannot delete the last node");
    }

    const nextNode = node.next;

    node.val = nextNode.val;

    node.next = nextNode.next;
}