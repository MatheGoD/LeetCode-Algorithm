function closetTarget(words: string[], target: string, startIndex: number): number {
    let left = startIndex
    let right = startIndex
    let step = 0
    let n = words.length
    
    while(step <= n){
        if(words[left]===target||words[right]===target){
            return step
        } else {
            right = (right + 1) % n
            left = (left - 1 + n) % n
        }
        step ++
    }
    return -1
};