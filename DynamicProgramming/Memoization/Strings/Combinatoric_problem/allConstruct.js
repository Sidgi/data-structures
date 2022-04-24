export function allConstruct(target, words ) {

    if(target === '') return [[]];

    const result = []
    for(let word of words) {
        if(target.indexOf(word)===0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, words);
            const targetWays = suffixWays.map(way => [ word, ...way])
            result.push(...targetWays)
        }
    }

    return [];
}


export function allConstructMemoized(target, words, memo = {} ) {

    if(target in memo) return memo[target];
    if(target === '') return [[]];

    const result = [];

    for(let word of words) {
        if(target.indexOf(word)===0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstructMemoized(suffix, words, memo);
            const targetWays = suffixWays.map(way => [ word, ...way])
            result.push(...targetWays)
        }
    }

    memo[target] = result
    return result;
}