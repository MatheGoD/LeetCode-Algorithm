function smallerNumbersThanCurrent(nums: number[]): number[] {
  const freq = [];
  nums.forEach((el,i) => {
    let count = 0;
    for(let j = 0 ; j < nums.length ; j++){
      if(i !== j && nums[j] < el) count++
    }
    freq.push(count)
  })
  return freq
};