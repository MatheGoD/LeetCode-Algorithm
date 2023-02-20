function canConstruct(ransomNote: string, magazine: string): boolean {
  const freq = new Array(26).fill(0); 
        for (let i = 0; i < magazine.length; i++) {
            freq[magazine.charCodeAt(i) - 97]++; 
        }
        for (let i = 0; i < ransomNote.length; i++) {
            const idx = ransomNote.charCodeAt(i) - 97; 
    if (freq[idx] > 0) {
      freq[idx]--; 
    } else {
      return false; 
    }
  }
  return true;
};