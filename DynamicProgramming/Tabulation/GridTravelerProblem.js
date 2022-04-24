/**
 * @description How many ways you can have to traverl on the 2 dimensial grid m*n
 * Time complexity O(m*n)
 * Space complexity O(m*n)
 * @param {number} m 
 * @param {number} n 
 */

const GridTravelersProblem = (m,n) => {

    const table = Array(m+1).fill().map(()=>Array(n+1).fill(0));

    table[1][1] = 1;

    for(let i = 0; i<=m; i++){
        for(let j = 0; j<=n; j++){
            const current = table[i][j];
            if(j+1 <= n) table[i][j+1] += current;
            if(i+1 <= m) table[i+1][j] += current;
        }
    }
    console.log(table[m][n])
    return table[m][n]
}


GridTravelersProblem(2,3)
GridTravelersProblem(3,3)
GridTravelersProblem(18,18)