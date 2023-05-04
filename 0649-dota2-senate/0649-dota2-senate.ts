function predictPartyVictory(senate: string): string {
  const radiant = [];
  const dire = [];
  const n = senate.length;

  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') {
      radiant.push(i);
    } else {
      dire.push(i);
    }
  }

  const banned = new Set<number>();
  let round = 0;

  while (radiant.length > 0 && dire.length > 0) {
    round++;

    const currentRadiant = radiant.shift();
    const currentDire = dire.shift();

    if (banned.has(currentRadiant)) {
      radiant.push(currentRadiant);
    } else if (banned.has(currentDire)) {
      dire.push(currentDire);
    } else {
      if (currentRadiant < currentDire) {
        radiant.push(currentRadiant + n);
      } else {
        dire.push(currentDire + n);
      }
      banned.add(currentRadiant);
      banned.add(currentDire);
    }
  }

  return radiant.length > 0 ? 'Radiant' : 'Dire';
}