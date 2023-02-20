function maximumWealth(accounts: number[][]): number {
    const newArr = [];
    
    accounts.forEach((el)=> {
        newArr.push(el.reduce((a,b) => a+b))
    })

    return Math.max(...newArr)
};