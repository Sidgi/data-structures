const shortestPath = (edges, nodeA, nodeB) => {

    const graph = buildGraphEdges(edges);
}


const graph = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v'],
]

const buildGraphEdges = (edges) => {
    let graph = {};

    for(let edge of edges){
        const [a,b] = edge;
        if(a in graph){
            graph[a] = []
        }
    }
}

const edges = [
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v'],
]


shortestPath(edges, 'w', 'z');


// const graph = {
//     0:[],
//     1:[],
//     5:[],
//     8:[],
//     2:[],
//     3:[],
//     4:[],
// } 

