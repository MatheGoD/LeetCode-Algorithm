function findContentChildren(g: number[], s: number[]): number {
  let count = 0;
  s.sort((a,b) => a - b)
  for (let i = 0 ; i < g.length ; i++){
    for (let j = 0 ; j < s.length ; j++){
      if(s[j] >= g[i]) {
      count++
      s.splice(j,1)
      break;
      }
    }
  }
  return count
};