function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const cols = board[0].length;
    
    const dfs = (row: number, col: number, index: number): boolean => {
        if (index === word.length) {
            return true; // Entire word found
        }
        if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== word[index]) {
            return false; // Out of bounds or mismatched character
        }
        
        // Mark current cell as visited by changing its character temporarily
        const temp = board[row][col];
        board[row][col] = '#'; // Any character that won't be in 'word'
        
        // Explore adjacent cells recursively
        const found = dfs(row + 1, col, index + 1)
            || dfs(row - 1, col, index + 1)
            || dfs(row, col + 1, index + 1)
            || dfs(row, col - 1, index + 1);
        
        // Restore original character before backtracking
        board[row][col] = temp;
        
        return found;
    };
    
    // Traverse the board to find the first character of 'word'
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (dfs(row, col, 0)) {
                return true; // Word found starting from (row, col)
            }
        }
    }
    
    return false; // Word not found in the entire grid
}
