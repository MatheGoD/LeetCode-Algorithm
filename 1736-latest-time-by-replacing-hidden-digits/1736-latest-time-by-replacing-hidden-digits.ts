function maximumTime(time: string): string {
  const timeArr = time.split("");
  
  if (timeArr[0] === '?' && timeArr[1] === '?'){
    timeArr[0] = '2'
  } else if (timeArr[0] === '?' && Number(timeArr[1]) < 4){
    timeArr[0] = '2'
  } else if (timeArr[0] === '?'){
    timeArr[0] = '1'
  };
  
  if (timeArr[0] !== '2' && timeArr[1] === '?'){
    timeArr[1] = '9'
  } else if (timeArr[0] === '2' && timeArr[1] === '?'){
    timeArr[1] = '3'
  }
  
  if (timeArr[3] === '?') timeArr[3] = '5'
  
  if (timeArr[4] === '?') timeArr[4] = '9'
  
  return timeArr.join("")
};