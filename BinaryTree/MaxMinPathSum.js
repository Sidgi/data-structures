export const maxPathSum = (root) => {
    if(root === null) return Number.NEGATIVE_INFINITY;
    if(!root.left && !root.right) return root.value;
    return root.value += Math.max(maxPathSum(root.left), maxPathSum(root.right));
}