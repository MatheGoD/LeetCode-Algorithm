/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const aliceSum = aliceSizes.reduce((a,b) => a+b);
    const bobSum = bobSizes.reduce((a,b) => a+b);
    const diff = (aliceSum - bobSum) >> 1;
    const setAlice = new Set(aliceSizes);
    
    for (const candy of bobSizes) {
    if (setAlice.has(candy + diff)) return [candy + diff, candy];
  }
};
