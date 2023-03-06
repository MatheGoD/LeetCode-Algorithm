/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
  return reverseNumber(reverseNumber(num)) === num ? true : false
};

function reverseNumber(n) {
  let reversed = 0;
  while (n > 0) {
    const digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }
  return reversed;
}