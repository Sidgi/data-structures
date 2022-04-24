/**
 * @name { Can construct Problem }
 * @description {Write a function countConstruct(target, wordBank) that accepts a target string and and array of strings }
 * The functin should return a number indicating count of possible ways it can construct the target by concatenating elements 
 * of the wordBank array
 */


// Time complexity 
// m - target.length , n - wordBank.length
// Recursive tree length - m 
// Branches or children 
// Time complexity O(n^m * m)
// Space O(m^2) 

//Memoized complexity
// Time O(n*m^2)
// Space O(m^2)

export const countConstruct = (target, wordBank, counter = 0) => {
    if(target === '' ) return 1;

    for(let word of wordBank){
        if(target[0]=== word[0]){
            if(target.includes(word,0)){
                const remainder = target.slice(word.length)
                counter  += countConstruct(remainder, wordBank, counter);
            }
        } 
    }

    return counter;
}

/**
 * CountConstruct Memoized
 */

export const countConstructMemoized = (str, words, memo = {}) => {

    if(str in memo) return memo[str];
    if(str === '') return 1;

    let total = 0
    for(let word of words){
        if(str.indexOf(word) === 0){
            const remainder = str.slice(word.length);
            total  += countConstruct(remainder, words);
        }
    }


    memo[str] = total;
    return total;
}

// countConstruct Alvin

/**
 * 
 */

export const countConstructAlvin = (target, wordBank) => {

    if(target === '') return 1;

    let totalCount = 0;

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const numWays = countConstructAlvin(target.slice(word.length), wordBank)
            totalCount+= numWays;
        }
    }

    return totalCount;
}