function maximum69Number (num: number): number {
  const numStr = num.toString();
  const numDigits = numStr.length
  if (!numStr.includes('6')){
    return num
  }
  
  for (let i = 0 ; i < numDigits ; i++){
    if(numStr[i] === '6'){
      return (num + 3*(Math.pow(10,(numDigits-(i+1)))))
    }
  }
};
