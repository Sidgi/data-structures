export const classicFibonaci = (n) => {
    if(n <= 2) return 1;
    return classicFibonaci(n-1) + classicFibonaci(n-2);
}

export const memoFibonaci = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = memoFibonaci(n-1, memo) + memoFibonaci(n-2, memo);
    return memo[n];
}