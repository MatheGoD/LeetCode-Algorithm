function removeStars(s: string): string {
    const stack = [];
    for (const c of s) {
        if (c === '*' && stack.length) {
            stack.pop();
        }
        else {
            stack.push(c);
        }
    }
    return stack.join('');
};