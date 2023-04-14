function checkPerfectNumber(num: number): boolean {
  const halfNum = Math.trunc(num/2);
  let sum = 0;
  for (let i = 1 ; i <= halfNum ; i++){
    if(num % i === 0) sum += i
  }
  return sum === num
};