import { depthFirstTraversal, depthFirstTraversalRecursive } from "./DepthFirstTraversal.js";
import { undirectedGraph } from "./UndirectedGraph/TraverseUndirectedGraph.js";

const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [], 
    f: [],
}


const undirectedGraphAr = [
    ['a','b'],
    ['b','e'],
    ['f', 'c'],
    ['c','b']
]
// depthFirstTraversal(graph, 'a')
// depthFirstTraversalRecursive(graph, 'a')

console.log(undirectedGraph(undirectedGraphAr, 'a', 'f' ))