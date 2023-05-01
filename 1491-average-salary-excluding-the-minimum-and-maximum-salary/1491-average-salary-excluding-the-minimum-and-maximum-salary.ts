function average(salary: number[]): number {
  const min = Math.min(...salary);
  const max = Math.max(...salary);
  
  const filtered = salary.filter((el) => el !== min && el !== max)
  
  return filtered.reduce((a,b) => a + b)/filtered.length
};