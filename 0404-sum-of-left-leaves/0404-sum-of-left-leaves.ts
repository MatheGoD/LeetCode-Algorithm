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

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let sum = 0;

    const dfs = (node: TreeNode | null, isLeft: boolean) => {
        if (!node) {
            return;
        }

        if (!node.left && !node.right && isLeft) {
            sum += node.val;
        }

        dfs(node.left, true);
        dfs(node.right, false);
    };

    dfs(root, false);

    return sum;
}