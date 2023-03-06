/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minimumDifference(nums, k) {
  nums.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    let diff = nums[i + k - 1] - nums[i];
    if (diff < minDiff) {
      minDiff = diff;
    }
  }
  return minDiff;
}