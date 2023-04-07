function selfDividingNumbers(left: number, right: number): number[] {
  const selfDividingNum = [];
  
  for(let i = left ; i <= right ; i++){
    
    const numStr = i.toString();
    
    if(!numStr.includes('0')){
      let remainder = [];
      for(let j = 0 ; j <numStr.length ; j++){
        remainder.push(i % Number(numStr[j])) 
      }
      if (remainder.every((el)=> el === 0)) selfDividingNum.push(i)
    }
  }
  return selfDividingNum
};
