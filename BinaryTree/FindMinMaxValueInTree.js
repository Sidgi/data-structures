export const findMinValueInTree = (root) => {

    if(root === null) return  Number.POSITIVE_INFINITY

    const queue = [];
    let minValue = root.value;
    queue.push(root)
    while(queue.length > 0){
        const current = queue.pop();
        if(current.value < minValue) minValue = current.value
        
        if(current.right) queue.push(current.right);
        if(current.left) queue.push(current.left);
    }

    return minValue;
}

export const findMinValueInTreeRecursive = (root) => {

    if(root === null) return  Number.POSITIVE_INFINITY;

    let minValue = root.value;

    const leftMinV = findMinValueInTreeRecursive(root.left);
    const rightMinV = findMinValueInTreeRecursive(root.right);


    return Math.min(minValue, leftMinV, rightMinV);
}


export const findMaxValueInTree = (root) => {

    if(root === null) return  Number.NEGATIVE_INFINITY

    const queue = [];
    let maxValue = root.value;
    queue.push(root)
    while(queue.length > 0){
        const current = queue.pop();
        if(current.value > maxValue) maxValue = current.value
        
        if(current.right) queue.push(current.right);
        if(current.left) queue.push(current.left);
    }

    return maxValue;
}