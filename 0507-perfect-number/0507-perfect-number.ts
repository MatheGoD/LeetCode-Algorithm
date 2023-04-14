function checkPerfectNumber(num: number): boolean {
  const halfNum = Math.trunc(num/2);
  const divisors = [];
  for (let i = 1 ; i <= halfNum ; i++){
    if(num%i === 0) divisors.push(i)
  }
  return divisors.reduce((a,b) => a+b,0) === num
};