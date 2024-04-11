function removeKdigits(num: string, k: number): string {
  const stack: string[] = [];

  for (let digit of num) {
    while (k > 0 && stack.length > 0 && +stack[stack.length - 1] > +digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  // Remove leading zeros
  while (stack.length > 0 && stack[0] === '0') {
    stack.shift();
  }

  return stack.length === 0 ? '0' : stack.join('');
}
