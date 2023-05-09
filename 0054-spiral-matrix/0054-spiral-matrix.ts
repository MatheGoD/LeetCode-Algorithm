function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  const result: number[] = [];
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = m - 1;
  let direction = "right";

  while (left <= right && top <= bottom) {
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = "down";
    } else if (direction === "down") {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = "left";
    } else if (direction === "left") {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = "up";
    } else if (direction === "up") {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = "right";
    }
  }
  return result;
};