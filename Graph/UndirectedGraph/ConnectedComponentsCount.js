const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;
    for(let node in graph){
        if(explore(node, graph, visited) === true){
            return true
        }
    }

    return count
}

const explore = (node, graph, visited) => {

    if(visited.has(node)) return false;

    visited.add(node);

    for(let neihgbour of graph[node]){
        explore(neihgbour, graph, visited)
    }

    return true;
}
