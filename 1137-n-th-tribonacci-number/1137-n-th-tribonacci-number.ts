function tribonacci(n: number): number {
  const trib = [0, 1, 1];

  if (n < 3) {
    return trib[n];
  }

  for (let i = 3; i <= n; i++) {
    const nextTerm = trib[i - 1] + trib[i - 2] + trib[i - 3];
    trib.push(nextTerm);
  }

  return trib[n];
}