/**
 * 
 * @param {*} root 
 * @returns 
 */
export const DFS = (root) => {
    if(root === null) return [];
    const result = [];
    const stack = [];
    stack.push(root);
    while(stack.length>0){
        const current = stack.pop();
        result.push(current.value);
        if(current.right) stack.push(current.right);
        if(current.left)  stack.push(current.left);
    }

    return result;
}

/**
 * 
 */

export const DFSRecursive = (root) => {

    if(!root) return [];

    const rightV = DFSRecursive(root.right);
    const leftV = DFSRecursive(root.left);

    return [root.value, ...leftV, ...rightV]
}