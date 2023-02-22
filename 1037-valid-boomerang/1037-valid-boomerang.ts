function isBoomerang(points: number[][]): boolean {
    const x1 = points[0][0]
    const x2 = points[1][0]
    const x3 = points[2][0]
    const y1 = points[0][1]
    const y2 = points[1][1]
    const y3 = points[2][1]
    
    return (x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2)!==0) 
};