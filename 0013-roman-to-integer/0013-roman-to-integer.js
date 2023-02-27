/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanChar = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let sum = 0;
    for (let i = 0 ; i<s.length ; i++){
        if(romanChar[s[i]] >= romanChar[s[i+1]]){
            sum += romanChar[s[i]]
        } else if(!romanChar[s[i+1]]){
            sum += romanChar[s[i]]
        } else {
          sum -= romanChar[s[i]]
        }
    }
    return sum
};
