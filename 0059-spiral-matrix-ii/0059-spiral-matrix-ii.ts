function generateMatrix(n: number): number[][] {
    const matrix: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let num = 1;
    let rowStart = 0, rowEnd = n - 1, colStart = 0, colEnd = n - 1;
    
    while (rowStart <= rowEnd && colStart <= colEnd) {
        for (let i = colStart; i <= colEnd; i++) {
            matrix[rowStart][i] = num++;
        }
        rowStart++;
        
        for (let i = rowStart; i <= rowEnd; i++) {
            matrix[i][colEnd] = num++;
        }
        colEnd--;
        
        if (rowStart <= rowEnd) {
            for (let i = colEnd; i >= colStart; i--) {
                matrix[rowEnd][i] = num++;
            }
            rowEnd--;
        }
        
        if (colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                matrix[i][colStart] = num++;
            }
            colStart++;
        }
    }
    
    return matrix;
}
