function numSubseq(nums: number[], target: number): number {
    const MOD = 1e9 + 7;
    const n = nums.length;
    const pow2 = new Array(n + 1).fill(1);
    for (let i = 1; i <= n; i++) {
        pow2[i] = pow2[i - 1] * 2 % MOD;
    }
    nums.sort((a, b) => a - b);
    let count = 0;
    let left = 0, right = n - 1;
    while (left <= right) {
        const sum = nums[left] + nums[right];
        if (sum > target) {
            right--;
        } else {
            count = (count + pow2[right - left]) % MOD;
            left++;
        }
    }
    return count;
}