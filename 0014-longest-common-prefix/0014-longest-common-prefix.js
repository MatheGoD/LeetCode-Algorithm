/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const firstWord = strs.shift().split("");
    
    for(let i = 0 ; i < strs.length ; i++){
        firstWord.forEach((el,index) =>{
            if(!strs[i][index]?.includes(el)){
                firstWord.splice(index)
            }
        })
    }
  return firstWord.join("")
};