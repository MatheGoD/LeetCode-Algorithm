function islandPerimeter(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    let perimeter = 0;

    // Helper function to count surrounding water cells for a land cell
    const countSurroundingWater = (row: number, col: number): number => {
        let waterCount = 0;
        if (row - 1 < 0 || grid[row - 1][col] === 0) waterCount++; // Top
        if (row + 1 >= rows || grid[row + 1][col] === 0) waterCount++; // Bottom
        if (col - 1 < 0 || grid[row][col - 1] === 0) waterCount++; // Left
        if (col + 1 >= cols || grid[row][col + 1] === 0) waterCount++; // Right
        return waterCount;
    };

    // Iterate through each cell in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) { // If current cell is land
                perimeter += countSurroundingWater(i, j);
            }
        }
    }

    return perimeter;
}
