function maxVowels(s: string, k: number): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let maxCount = 0;
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (i >= k && vowels.has(s[i - k])) {
      count--;
    }
    
    if (vowels.has(s[i])) {
      count++;
    }
    
    if (count > maxCount) {
      maxCount = count;
    }
  }
  
  return maxCount;
};