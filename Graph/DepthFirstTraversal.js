export const depthFirstTraversal = (graph, source) => {
    const stack = [source];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
}


export const depthFirstTraversalRecursive = (graph, source) => {

    console.log(source)
    const current = graph[source];

    if(!current) return;
    if(current.length === 0 ) return;

    current.map(neighbor=>{
        return depthFirstTraversalRecursive(graph, neighbor);
    })
}

export const depthFirstTraversalRecursiveTwo = (graph, source) => {

    console.log(source)
    const current = graph[source];

   for( let neighbor of graph[source]){
        depthFirstTraversalRecursiveTwo(graph, neighbor);
   }
}