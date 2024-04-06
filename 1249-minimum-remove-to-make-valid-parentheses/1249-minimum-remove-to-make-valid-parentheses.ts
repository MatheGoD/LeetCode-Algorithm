function minRemoveToMakeValid(s: string): string {
    const stack: number[] = [];
    const invalidIndices: Set<number> = new Set();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                invalidIndices.add(i);
            } else {
                stack.pop();
            }
        }
    }

    while (stack.length > 0) {
        invalidIndices.add(stack.pop()!);
    }

    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!invalidIndices.has(i)) {
            result += s[i];
        }
    }

    return result;
}
