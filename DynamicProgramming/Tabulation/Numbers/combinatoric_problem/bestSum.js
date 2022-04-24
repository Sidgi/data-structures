const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);

    table[0] = [];

    for(let i = 0; i < table.length; i++){

        if(table[i]!== null){
            for(let num of numbers){
                if(i+num <= targetSum){
                    const newValue = [...table[i], num];
                    if(table[i+num]){
                        if(table[i+num].length > newValue.length){
                            table[i+num] = newValue
                        }
                    }else{
                        table[i+num] = newValue
                    }
                }
            
            }
        }

    }

    return table;
}


// console.log(bestSum(7, [2,3]))
// console.log(bestSum(7, [5,3,4,7]))
console.log(bestSum(8, [2,3,5]))
// console.log(bestSum(7, [2,4]))
// console.log(bestSum(300, [7,14]))