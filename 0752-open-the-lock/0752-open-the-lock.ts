function openLock(deadends: string[], target: string): number {
  if (deadends.includes("0000") || deadends.includes(target)) {
    return -1;
  }

  const queue: string[] = ["0000"];
  const visited: Set<string> = new Set();
  const deadendsSet = new Set(deadends);

  let steps = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const current = queue.shift();

      if (current === target) {
        return steps;
      }

      if (deadendsSet.has(current) || visited.has(current)) {
        continue;
      }

      visited.add(current);

      for (let j = 0; j < 4; j++) {
        const curDigits = current.split("");

        const inc = [...curDigits];
        inc[j] = (parseInt(inc[j]) + 1) % 10 + "";
        
        const dec = [...curDigits];
        dec[j] = (parseInt(dec[j]) - 1 + 10) % 10 + "";

        const nextStates = [inc.join(""), dec.join("")];

        for (const state of nextStates) {
          if (!deadendsSet.has(state) && !visited.has(state)) {
            queue.push(state);
          }
        }
      }
    }

    steps++;
  }

  return -1; 
}
