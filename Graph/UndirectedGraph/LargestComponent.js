const largestComponent = (graph) => {

    const visited = new Set();
    let largest = Number.NEGATIVE_INFINITY;
    for(let node in graph){
        const componentCount = explore(node, graph, visited);
        if(componentCount > largest){
            largest = componentCount;
        }
    }

    return largest;
}


const explore = (current, graph, visited, totalCount = 0) => {

    if(visited.has(String(current))) return 0;


    if(!visited.has(String(current))){
        visited.add(String(current))
        totalCount = 1;
    }

    for(let neighbour of graph[current]){
        totalCount += explore(neighbour, graph, visited, totalCount)
    }

    return totalCount;

}


const graph = {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0','8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2'],
}

console.log(largestComponent(graph))