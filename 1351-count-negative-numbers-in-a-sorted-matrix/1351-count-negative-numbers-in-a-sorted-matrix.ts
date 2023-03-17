function countNegatives(grid: number[][]): number {
  let count = 0;
  grid.forEach((el) => {
    for(let i = el.length-1 ; i >= 0 ; i--){
      if (el[i] >= 0) break;
      count++
    }
  })
  return count++
};