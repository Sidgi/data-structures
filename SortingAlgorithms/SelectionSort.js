const testArray = [5,2,10,4,98,7,30,6,10,15,11,9];

const selectionSort = (arr) => {
    const array = arr.slice();
    for(let i = 0; i < array.length - 1; i++){
        let minimum = Infinity; 
        for(let j = i; j < array.length; j ++){
            if(array[j] < minimum){
                minimum = array[j];
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}


const selectionSortWithIndex = (arr) => {
    const array = arr.slice();
    for(let i = 0; i < array.length - 1; i++){
        let minIndex = i; 
        for(let j = i + 1; j < array.length; j ++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
}

console.log(selectionSort(testArray));
console.log(selectionSortWithIndex(testArray));
console.log(testArray);
