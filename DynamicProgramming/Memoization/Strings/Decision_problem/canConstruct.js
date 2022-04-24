/**
 * @name { Can construct Problem }
 * @description {Write a function canConstruct(target, wordBank) that accepts a target string and and array of strings }
 * The functin should return a boolean indicating whether or not the target constructed by concatenating elements 
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

/**
 * 
 * @param {string} target 
 * @param {array[string]} wordBank 
 * @returns boolean
 * @example canConstruct('', ['cat','dog','pig']) -> false
 * @example canConstruct('abcdef', ['ab','abc','cd','def','abcd' ]) -> true
 * @example canConstruct('skateboard', ['ska','sk','boar']) -> false
 */
export function canConstruct(target, wordBank){

    if(target === '') return true;

    for(let word of wordBank){
        if(target[0] === word[0]){
            if(target.includes(word,0)){
                const remainder = target.substring(word.length)
                let isConstructable = canConstruct(remainder, wordBank);
                if(isConstructable) return true
            }
        }
    }

    return false;
}

export function canConstructMemoized(target, wordBank, memo = {}){

    if(target in memo) return memo[target];
    if(target === '') return true;

    for(let word of wordBank){
        if(target[0] === word[0]){
            if(target.includes(word,0)){
                const remainder = target.substring(word.length)
                let isConstructable = canConstruct(remainder, wordBank);
                memo[target] = isConstructable;
                if(isConstructable) return true
            }
        }
    }

    memo[target] = false;
    return memo[target];
}

// Alvin's solutions

/**
 * 
 * @param {string} target 
 * @param {array[string]} wordBank 
 * @returns boolean
 * @example canConstruct('', ['cat','dog','pig']) -> false
 * @example canConstruct('abcdef', ['ab','abc','cd','def','abcd' ]) -> true
 * @example canConstruct('skateboard', ['ska','sk','boar']) -> false
 */

export const canConstructAlvin = (target, wordBank) => {
    if(target === '') return true;

    for( let word of wordBank) {
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank) === true){
                return true
            }
        }
    }
    return false;
}


export const canConstructAlvinMemoized = (target, wordBank, memo ={}) => {
    if(target in memo) return memo[target];
    if(target === '') return true;

    for( let word of wordBank) {
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank) === true){
                memo[target] = true;
                return  true;
            }
        }
    }
    memo[target] = false
    return  false;
}