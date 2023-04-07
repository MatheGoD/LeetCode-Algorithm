function sortedSquares(nums: number[]): number[] {
  return nums.map((el) => Math.pow(el,2)).sort((a,b) => a-b)
};