/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const plus = (BigInt(digits.join(""))+1n).toString();
  const answer = []
  for (let i = 0 ; i < plus.length ; i++){
    answer.push(Number(plus[i]))
  }
  return answer
};