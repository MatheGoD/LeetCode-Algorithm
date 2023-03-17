function isHappy(n: number): boolean {
  const stored : Map<number,boolean> = new Map();
  while(n !== 1 && !stored.get(n)){
    stored.set(n,true);
    n = sumOfSquares(n);
  }
  return n === 1
};


function sumOfSquares(n : number) : number {
  return Array.from(String(n), Number).reduce((a,b) => a + Math.pow(b,2),0)
}