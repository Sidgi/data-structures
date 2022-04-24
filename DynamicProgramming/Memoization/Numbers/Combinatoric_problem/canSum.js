export function canSum(targetSum, arrayOfNumbers, differenceSet = new Set()){

    for(let i = 0; i < arrayOfNumbers.length; i++){
        const remainder = targetSum - arrayOfNumbers[i];
        if(remainder === 0)  return true;
        if(differenceSet.has(arrayOfNumbers[i])) return true
        differenceSet.add(remainder);
    }

    return false
}   

export function canSumRecursive(targetSum, numbers, memo = {}){
 
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers){
        const remainder = targetSum - num;
        if(canSumRecursive(remainder, numbers, memo) === true) {
            memo[remainder] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
}   