function smallestEvenMultiple(n: number): number {
  let i = 1
  while(n % 2 !== 0){
    i++
    n *= i
  }
  return n 
};