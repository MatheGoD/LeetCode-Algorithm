function isBoomerang(points: number[][]): boolean {
    const x1 = points[0][0]
    const x2 = points[1][0]
    const x3 = points[2][0]
    const y1 = points[0][1]
    const y2 = points[1][1]
    const y3 = points[2][1]
    
    const firstSlope = (y2-y1)/(x2-x1)
    const secondSlope = (y3-y2)/(x3-x2)
    
    return (x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2)!==0) 
};