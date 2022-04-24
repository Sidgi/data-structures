 export const CalculateSumOfBinaryTreeRecursive = (root) => {

    if(root === null) return 0

    return root.value + CalculateSumOfBinaryTree(root.left) +  CalculateSumOfBinaryTree(root.right);

 }


 export const CalculateSumOfBinaryTree = (root) => {

    if(root === null) return 0

    let totalSum = 0;
    const queue = [];
    queue.push(root);

    while(queue.length > 0){
        const current = queue.shift();
        totalSum += current.value;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }

    return totalSum;

 }