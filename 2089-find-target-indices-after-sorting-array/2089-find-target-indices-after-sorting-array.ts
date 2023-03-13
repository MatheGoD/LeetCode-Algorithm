function targetIndices(nums: number[], target: number): number[] {
  const targetLocation : number[] = [];
  nums.sort((a,b) => a - b).forEach((el,i) => {
    if(el === target){
      targetLocation.push(i)
    }
  })
  return targetLocation
};