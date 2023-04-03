function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  const answer = [];
  potions.sort((a,b) => a-b)
  for (let i = 0 ; i < spells.length ; i++){
    let successful = 0;
    for (let j = 0 ; j < potions.length ; j++){
      if(spells[i]*potions[j] >= success) {
        successful = potions.length - j
        break;
      }
    }
    answer.push(successful)
  }
  return answer
};