function minimumMoves(s: string): number {
  let answer = 0;
  let i = 0;
  while (i < s.length){
    if(s[i] === 'X'){
      answer++
      i += 3
    } else {
      i++
    }
  }
  return answer
};