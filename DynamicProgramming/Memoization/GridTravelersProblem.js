export const GridTravelersProblem = (m, n, memo = {}) => {

    const key = `${m},${n}`;

    if(key in memo) return  memo[key];

    if(m === 0 || n === 0) return 0;
    if(m === 1 && n === 1) return 1;

    const down = GridTravelersProblem(m - 1 , n, memo);
    const right = GridTravelersProblem(m, n - 1, memo);
    memo[key] = down + right;
    return  memo[key];
}

export const GridTravelersProblemReverse = (m, n, memo = {}) => {

    const key = `${m},${n}`;
    if((`${m},${n}` in memo) || (`${n},${m}` in memo)) return  memo[key];

    if(m === 0 || n === 0) return 0;
    if(m === 1 && n === 1) return 1;

    const down = GridTravelersProblem(m - 1 , n, memo);
    const right = GridTravelersProblem(m, n - 1, memo);
    memo[key] = down + right;
    return  memo[key];
}