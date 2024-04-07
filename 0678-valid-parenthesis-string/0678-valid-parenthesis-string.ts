function checkValidString(s: string): boolean {
    let low = 0, high = 0;
    
    for (let char of s) {
        low += char === '(' ? 1 : -1;
        high += char !== ')' ? 1 : -1;
        
        if (high < 0) break;
        
        low = Math.max(low, 0);
    }
    
    return low === 0;
}
