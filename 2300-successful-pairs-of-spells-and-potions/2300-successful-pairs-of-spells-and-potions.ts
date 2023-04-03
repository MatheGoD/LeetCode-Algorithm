function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  const answer = [];
  potions.sort((a,b) => a-b)
  for (let i = 0 ; i < spells.length ; i++){
    const leastPotionStrength = Math.ceil(success/spells[i]);
    const successful = potions.length - findIndex(potions,leastPotionStrength)
    answer.push(successful)
  }
  return answer
};

function findIndex(potions : number[], target: number) :number {
  let left : number = 0;
  let right : number = potions.length - 1;
  let mid : number;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (potions[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}