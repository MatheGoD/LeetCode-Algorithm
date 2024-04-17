/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function smallestFromLeaf(root: TreeNode | null): string {
    if (!root) return '';

    let result = '';

    const dfs = (node: TreeNode | null, currentPath: string) => {
        if (!node) return;
        
        currentPath = String.fromCharCode(node.val + 'a'.charCodeAt(0)) + currentPath;
        
        if (!node.left && !node.right) { // Leaf node
            if (!result || currentPath < result) {
                result = currentPath;
            }
            return;
        }
        
        dfs(node.left, currentPath);
        dfs(node.right, currentPath);
    };
    
    dfs(root, '');

    return result;
}