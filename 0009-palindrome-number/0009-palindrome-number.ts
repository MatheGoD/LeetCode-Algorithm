function isPalindrome(x: number): boolean {
    if (x == 0) {
        return true
    } else {
        const result = x.toString().split("").reverse().join("")
        if (result.charAt(0) === "0" || result.at(-1) === "-") {
            return false
        }
        if (Number(result) == x) {
            return true
        }
        if(Number(result) !== x) {
            return false
        } 
    }
};