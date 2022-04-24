const quickSort = (arr, left = [], right = []) => {
    if(arr.length <= 1 ) return arr;

    let pivet = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i]< pivet){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left),arr[0], ...quickSort(right)]

}

const arr = [5,2,10,4,98,7,30,6,10,15,11,9]

console.log(quickSort(arr))