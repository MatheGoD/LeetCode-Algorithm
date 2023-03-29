/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function(count) {
    let max = -Infinity,
        min = Infinity,
        mean,
        totalSum = 0,
        freq = 0,
        mode,
        median,
        maxCount = 0;
    
    for(let l = 0, r = 255; l <256; l++, r--){
        if(count[l]){
            totalSum += count[l]*l;
            freq += count[l];
            if(min === Infinity) min = l;
            if(count[l] > maxCount){
                maxCount = count[l];
                mode = l;
            }
        }
        if(count[r]){
            if(max === -Infinity) max = r;
        }
    }
    mean = totalSum / freq;
    
    let runningSum = 0;
    let i = 0
    // Calculate median     
    while(runningSum < freq/2){
        runningSum += count[i];
        i++;
    }
    if(freq%2 || runningSum > freq/2) median = i-1;
    else{
        let prev = i-1;
        while(!count[i]) i++;
        median = (prev + i)/2;
    }
    
    return [min, max, mean, median, mode]
};