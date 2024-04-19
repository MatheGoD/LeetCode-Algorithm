function numIslands(grid: string[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    const dfs = (row: number, col: number): void => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0';

        dfs(row - 1, col); 
        dfs(row + 1, col); 
        dfs(row, col - 1); 
        dfs(row, col + 1); 
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') { 
                count++; 
                dfs(i, j); 
            }
        }
    }

    return count;
}