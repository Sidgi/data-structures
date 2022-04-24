import {a} from './BinaryTree.js';
import {findElementBinaryTreeBFS, findElementBinaryTreeDFS, findElementBinaryTreeRecursive} from './FindElementBinaryTree.js';
import {DFS, DFSRecursive} from './DepthFirstTraversal.js';
import {breadthFirstTraversal, breadthFirstTraversalRecursive} from './BreadthFirstTraversal.js';
import {CalculateSumOfBinaryTree} from './CalculateSumOfBinaryTree.js';
import {findMinValueInTree, findMaxValueInTree, findMinValueInTreeRecursive} from './FindMinMaxValueInTree.js';
import { maxPathSum } from './MaxMinPathSum.js';

// DFS(a)

// console.log(DFSRecursive(a))

// console.log(breadthFirstTraversal(a))
console.log(findElementBinaryTreeBFS(a, 'm'))
console.log(findElementBinaryTreeDFS(a, 'm'))
console.log(findElementBinaryTreeRecursive(a, 'l'))
console.log(CalculateSumOfBinaryTree(a))
console.log(findMinValueInTree(a))
console.log(findMinValueInTreeRecursive(a))
console.log(findMaxValueInTree(a))

console.log(maxPathSum(a))