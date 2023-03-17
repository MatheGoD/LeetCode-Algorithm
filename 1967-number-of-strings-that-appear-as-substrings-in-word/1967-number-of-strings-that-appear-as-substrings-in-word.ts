function numOfStrings(patterns: string[], word: string): number {
  let count = 0;
  for (let str of patterns){
    word.includes(str) ? count++ : null 
  }
  return count
};