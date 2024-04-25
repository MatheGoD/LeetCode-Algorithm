function longestIdealString(s: string, k: number): number {
    const dp = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        const currentChar = s.charCodeAt(i) - 'a'.charCodeAt(0);

        let maxLen = 0;
        for (let diff = -k; diff <= k; diff++) {
            const neighborChar = currentChar + diff;

            if (neighborChar >= 0 && neighborChar < 26) {
                maxLen = Math.max(maxLen, dp[neighborChar]);
            }
        }

        dp[currentChar] = maxLen + 1;
    }

    return Math.max(...dp);
}