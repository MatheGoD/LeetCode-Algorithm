function numRescueBoats(people: number[], limit: number): number {
  let peopleSorted = people.sort((a, b) => a - b)
  let left = 0
  let right = people.length-1
  while(left < right) {
      if(peopleSorted[left] + peopleSorted[right] <= limit) left += 1
      right -= 1
  }
  return people.length - left
};