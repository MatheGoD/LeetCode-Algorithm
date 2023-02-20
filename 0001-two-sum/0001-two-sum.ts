function twoSum(nums: number[], target: number): number[] {
    for(let i = 0 ; i < nums.length ; i++){
        let newTarget = target - nums[i];
        for(let j = i; j < nums.length ; j++){
            if(nums[j+1] === newTarget) return [i,j+1]
        }
    }
};