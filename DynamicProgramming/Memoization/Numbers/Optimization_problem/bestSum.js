/**
 * Best sum or shortest path to make a sum 
 * arrayNumbers array of number that should make the targetsum
 * targetsum target some that should made up
 */


// m - targetSum
// n - arrayOfNumbers

// Brute force 
// Time O(n^m * m)
// Space O(m * m)

export const bestSum = (targetSum, arrayOfNumbers) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null; 

    let shortestCombination = null;

    for(let num of arrayOfNumbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, arrayOfNumbers);
        if(remainderCombination !== null){
            const combination = [...remainderCombination, num];
            if(shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination
            }
        }
    }

    return shortestCombination;
}


/**
 * Time memoized O(m^2*n)
 * Space O(m^2)
 */

 export const bestSumMemoized = (targetSum, arrayOfNumbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null; 

    let shortestCombination = null;

    for(let num of arrayOfNumbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSumMemoized(remainder, arrayOfNumbers, memo);
        if(remainderCombination !== null){
            const combination = [...remainderCombination, num];
            if(shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

// 8 [3,5,6,1] -> 3,5
// 6 [3,5,6,1] -> 6  
// targetSum - m, arrayOfNumbers.length - n
// height of tree - m ,
// Time O(m * n * n)
// Space O(m * m * m)



export const shortestSum = (targetSum, arrayOfNumbers, memo = {}) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null; 
    if(targetSum in memo) return memo[targetSum];

    for(let i = 0; i < arrayOfNumbers.length; i++){
        const remainder = targetSum - arrayOfNumbers[i];
        const shortestPath = shortestSum(remainder, arrayOfNumbers, memo);
        if(shortestPath !== null){
            memo[targetSum] = [...shortestPath,  arrayOfNumbers[i]];
            for(let j = i; j< arrayOfNumbers.length; j++){
                const childsRemainder = targetSum - arrayOfNumbers[j];
                const shortestPathChild = shortestSum(childsRemainder, arrayOfNumbers, memo);
                if(shortestPathChild !== null){
                    if(shortestPathChild.length < shortestPath.length)
                    memo[targetSum] = [...shortestPathChild, arrayOfNumbers[j]]
                }
            }
            return memo[targetSum]
        } 
    }

    memo[targetSum] = null;
    return null;
}

export const howSumMemoized = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return []
    if(targetSum < 0) return null;


    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSumMemoized(remainder, numbers, memo);
        if(remainderResult !== null){
            memo[targetSum] = [...remainderResult, num]
            return  memo[targetSum]
        }
    }

    memo[targetSum] = null;
    return null
}

// if(shortestPath.length > 0){
//     shortestPath[targetSum] = [...shortestPath];
//     shortestSum(targetSum, arrayOfNumbers, memo, shortestPath)
// }

// if(targetSum in memo){
//     if(memo[targetSum].length > (shortestPath.length + 1)){
//         return [...shortestPath,  arrayOfNumbers[i]]
//     }else{
//         return memo[targetSum];
//     }
// }