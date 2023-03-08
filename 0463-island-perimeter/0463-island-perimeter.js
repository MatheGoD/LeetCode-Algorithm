/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let answer = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        answer += 4;
        if (i > 0 && grid[i-1][j] == 1) answer--;
        if (j > 0 && grid[i][j-1] == 1) answer--;
        if (j < grid[i].length-1 && grid[i][j+1] == 1) answer--;
        if (i < grid.length-1 && grid[i+1][j] == 1) answer--;
      }
    }
  }
  return answer;
};