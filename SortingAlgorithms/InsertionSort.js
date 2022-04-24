export function insertionSort(arr){
    const array = arr.slice();
    for(let i = 1; i < array.length; i++){
        for(let j = i; j > 0; j--){
            if(array[j] < array[j-1]){
                [array[j], array[j-1]] = [array[j-1], array[j]]
            }else{
                break
            }
        }
    }

    return array;

}


export const insertionSortSecondSolution = (arr)=>{
    const array = arr.slice();
    for (let i = 1; i < array.length; i++){
      let j = i - 1;
      let current = array[i];
      while(j >= 0 && array[j] > current){
        array.splice(j + 1, 1);
        array.splice(j, 0, current);
        j--;
      }
    }
    return array
  }
  
