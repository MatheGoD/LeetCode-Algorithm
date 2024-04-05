function makeGood(s: string): string {
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === s[i+1]?.toLowerCase() && s[i] !== s[i+1]) {
      if (s.length <= 2) {
        s = "";
        break;
      } else {
        s = s.slice(0, i) + s.slice(i+2);
        i = -1;
      }
    }
  }
  return s
};
