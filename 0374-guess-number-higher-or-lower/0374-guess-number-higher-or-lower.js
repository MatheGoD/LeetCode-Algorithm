/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let correctness = guess(n);
  let boundary;
  while (correctness !== 0){
    if(correctness === 1){
      n = Math.trunc((boundary+n)/2)
      correctness = guess(n)
    } else {
      boundary = n
      n = Math.trunc(n/2)
      correctness = guess(n)
    }
  }
  
  return n
};