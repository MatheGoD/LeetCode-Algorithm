function simplifiedFractions(n: number): string[] {
  const answer : string[] = [];
  for (let i = 2 ; i <= n ; i++){
    for (let j = 1 ; j < i ; j ++){
      let gcf = findGCF(i,j);
      let denom = Math.trunc(i/gcf)
      let num = Math.trunc(j/gcf);
      let simplifiedFrac = `${num}/${denom}`
      answer.includes(simplifiedFrac) ? null : answer.push(simplifiedFrac)
    }
  }
  return answer
};

function findGCF(num1 : number, num2 : number) : number {
  let smallerNum = Math.min(num1, num2);
  let GCF = 1;
  for (let i = 2; i <= smallerNum; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      GCF = i;
    }
  }
  return GCF;
}