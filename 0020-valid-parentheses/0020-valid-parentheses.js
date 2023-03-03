/**
 * @param {string} s
 * @return {boolean}
 */     
var isValid = function(s) {
    
    const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
    }
 
    if (s.length % 2 === 1) return false

    if (Object.values(pairs).includes(s[0])) return false
    
    if (pairs.hasOwnProperty(s[s.length-1])) return false
    
    
    let stack = []
    
    for(let i=0; i<s.length; i++) {
        if(pairs.hasOwnProperty(s[i])) {
            stack.push(s[i])
        } else if (pairs[stack.pop()] !== s[i]) {
            return false
        }
        
    }
    return stack.length === 0
    
};