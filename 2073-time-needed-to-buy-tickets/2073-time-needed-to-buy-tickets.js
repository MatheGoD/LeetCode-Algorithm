/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let i = 0;
    let time = 0;

    const people = tickets.length;
    while (tickets[k] !== 0) {
        if (tickets[i] !== 0) {
            tickets.with(i, tickets[i]--);
            time++;
        }
        i = (i+1) % people;
    };
    return time;
};