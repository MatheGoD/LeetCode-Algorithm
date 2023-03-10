/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
  const targetIndex = [];
  nums.forEach ((x,el) => {
    if (x === target) targetIndex.push(el)
  })

  const distance = targetIndex.map((x) => Math.abs(x-start))

  return Math.min(...distance)
};