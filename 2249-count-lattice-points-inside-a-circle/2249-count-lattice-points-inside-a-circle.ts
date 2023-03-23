function countLatticePoints(circles: number[][]): number {
  let maxX = 0, maxY = 0;
  for (let [x, y, r] of circles) {
    maxX = Math.max(maxX, x + r);
    maxY = Math.max(maxY, y + r);
  }
  
  let count = 0;
  for (let x = 0; x <= maxX; x++) {
    for (let y = 0; y <= maxY; y++) {
      for (let [xi, yi, ri] of circles) {
        let distance = Math.sqrt((x - xi) ** 2 + (y - yi) ** 2);
        if (distance <= ri) {
          count++;
          break;
        }
      }
    }
  }
  
  return count;
};