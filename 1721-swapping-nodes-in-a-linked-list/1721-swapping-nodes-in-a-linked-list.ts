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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let n = getLength(head);
 
    if(n-k+1 === k) return head;

    let prev = new ListNode();
    prev.next = head;

    let n1 = prev;
    for(let i=1; i<k ; i++){
        n1 = n1.next;
    }

    let n2= prev;
    for(let j=1 ; j<=n-k; j++){
        n2 = n2.next;
    }
   
    if(n2.next === n1){
        let t = n1;
        n1 = n2;
        n2 = t;
    }

    if(n1.next === n2){
        let x = n2.next;

        n2.next = x.next;
        n1.next = x;
        x.next = n2;
    }

    else{
        let t1 = n1.next, t2= n2.next;
        let x1 = t1.next, x2 =t2.next;

        n1.next = t2;
        t2.next = x1;

        n2.next = t1;
        t1.next = x2;
    }

    return prev.next;
};


function getLength(head){
    let node = head;
    let length = 0; 
    while(node){
        length++;
        node = node.next;
    }
   return length;
}