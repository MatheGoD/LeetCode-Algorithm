function minOperations(nums: number[], k: number): number {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i]
  }
  let count = 0;
  for (let i = 0; i < 31; i++) {
    const xorBit = xor & (1 << i);
    const kBit = k & (1 << i);
    if (xorBit !== kBit) {
      count++;
    }
  }
  return count
};