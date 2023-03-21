function lengthOfLastWord(s: string): number {
  const sArr = s.split(" ");
  for(let i = sArr.length-1 ; i >= 0 ; i--){
    if(sArr[i]) return sArr[i].length
  }
};