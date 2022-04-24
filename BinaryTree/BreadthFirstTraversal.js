

export const breadthFirstTraversal = (root) => {
    if(root===null) return [];

    const values = [];
    const queue = [root];

    while(queue.length > 0) {

        const current = queue.shift();

        if(current !== null){
            values.push(current.value)
            queue.push(current.left)
            queue.push(current.right)
        }

    }

    return values;
}




export const breadthFirstTraversalRecursive = (root) => {
    if(root===null) return [];

    const values = [];
    const queue = [];

    const left = root.left;
    const right = root.right;
    return queueImplementation(root);

}

const queueImplementation = (node) => {

    if(node === null) return [];


    return [node.value, ...queueImplementation(node.left), ...queueImplementation(node.right)];
}