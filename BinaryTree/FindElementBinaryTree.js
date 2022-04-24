
/**
 * Breadth first search
 * @param {BinaryTreeNode} rootNode The root node of Binary Tree
 * @param {BinaryTreeNode} targetNode The node that should be found
 * @returns {boolean}
 */
export const findElementBinaryTreeBFS = (rootNode, targetNode) => {

    if(rootNode === null) return false;

    const queue = [];
    queue.push(rootNode);
    while(queue.length > 0){
        const current = queue.pop()
        if(current.value === targetNode) return true
        if(current.left) queue.unshift(current.left);
        if(current.right) queue.unshift(current.right);

    }
    return false;
}

export const findElementBinaryTreeDFS = (rootNode, targetNode) => {

    if(rootNode === null || !targetNode) return [];

    const stack = [];
    stack.push(rootNode);
    while(stack.length > 0){
        const current = stack.pop();
        if(current.value === targetNode) return true;
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);

    }
    return false;
}

export const findElementBinaryTreeRecursive = (rootNode, targetNode) => {

    let found = false;

    if(rootNode === null || targetNode === null) return false;

    if(rootNode.value === targetNode ){
        return true;
    }

    if(!found){
        const left = findElementBinaryTreeRecursive(rootNode.left, targetNode);
        const right = findElementBinaryTreeRecursive(rootNode.right, targetNode);
        if(right || left) return true
    }

    return found
}