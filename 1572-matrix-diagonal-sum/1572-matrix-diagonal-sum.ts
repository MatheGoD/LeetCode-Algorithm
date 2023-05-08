function diagonalSum(mat: number[][]): number {
  let sum = 0;
  const n = mat.length;
  const center = (n % 2 === 0) ? -1 : n >> 1; // calculate center index
  
  for (let i = 0; i < n; i++) {
    if (i !== center) {
      sum += mat[i][i] + mat[i][n - 1 - i];
    } else {
      sum += mat[i][i];
    }
  }
  
  return sum;
};