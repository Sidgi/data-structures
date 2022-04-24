import { bestSum, bestSumMemoized, shortestSum } from "./Optimization_problem/bestSum.js";
import { canSum, canSumRecursive } from "./Combinatoric_problem/canSum.js";
import { classicFibonaci, memoFibonaci } from "../Fibonacci.js";
import { GridTravelersProblem, GridTravelersProblemReverse } from "../GridTravelersProblem.js";
import { howSum, howSumMemoized } from "./Decision_problem/howSum.js";


// console.log(classicFibonaci(7));
// console.log(memoFibonaci(50));
// console.log(GridTravelersProblem(1,1));
// console.log(GridTravelersProblem(2,3));
// console.log(GridTravelersProblem(3,2));
// console.log(GridTravelersProblem(3,3));


// console.time('Reverse Memoized Grid Travler problem')
// console.log(GridTravelersProblemReverse(38,38));
// console.timeEnd('Reverse Memoized Grid Travler problem')

// console.time('Not Memoized Grid Travler problem')
// console.log(GridTravelersProblem(38,38));
// console.timeEnd('Not Memoized Grid Travler problem')

// console.log(canSum(8,[2,4,4,10,11]));
// console.log(canSumRecursive(8,[2,4,4,10,11]))

// console.log(canSum(300,[7,14]));
// console.log(canSumRecursive(300,[7,14]))
// console.log(howSum(8,[7,14]))
// console.log((8,[7,14]))
// console.log(shortestSum(300,[7,14]))
console.log(shortestSum(8,[2,4,4,10,11]));
console.log(shortestSum(7,[6,2]));
console.log(shortestSum(7,[5,3,4,7]));
console.log(shortestSum(8,[2,5,3]));
console.log(bestSum(8,[1,4,5]));
console.log(shortestSum(100,[1,2,5,25]));
console.log(bestSumMemoized(100,[1,2,5,25]));
console.log(howSum(8,[2,4,4,10,11]));

