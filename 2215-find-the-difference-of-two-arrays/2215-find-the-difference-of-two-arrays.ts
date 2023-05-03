function findDifference(nums1: number[], nums2: number[]): number[][] {
  const answer1 : Set<number> = new Set<number>();
  const answer2 : Set<number> = new Set<number>();
  nums1.forEach((el) => {
    if(!nums2.includes(el)) answer1.add(el)
  })
  nums2.forEach((el) => {
    if(!nums1.includes(el)) answer2.add(el)
  })
  return [[...answer1],[...answer2]]
};
