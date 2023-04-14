function sumBase(n: number, k: number): number {
  const nBaseK = n.toString(k);
  
  let sum = 0;
  
  for(let i = 0 ; i < nBaseK.length ; i++){
    sum += Number(nBaseK[i])
  }
  
  return sum
};