function findMaxK(nums: number[]): number {
  const set = new Set<number>(nums);
  let max = -1;

  for (const num of nums) {
    if (set.has(-num) && num > max) {
      max = num;
    }
  }

  return max;
}
