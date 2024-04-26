function minFallingPathSum(grid: number[][]): number {
  const n = grid.length;

  const dp: number[][] = grid.map(row => row.slice());

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const minPrevRow = Math.min(
        ...dp[i - 1].slice(0, j), 
        ...dp[i - 1].slice(j + 1) 
      );
      dp[i][j] += minPrevRow;
    }
  }

  return Math.min(...dp[n - 1]);
}