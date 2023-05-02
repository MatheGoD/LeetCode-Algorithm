function arraySign(nums: number[]): number {
  const product = nums.reduce((a,b) => a*b,1);
  
  if (product > 0) {
    return 1
  } else if (product < 0) {
    return -1
  } else {
    return 0
  }
}