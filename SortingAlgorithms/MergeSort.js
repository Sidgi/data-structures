function mergeSort(array){

    if(array.length === 1) return array;

    const middle = Math.floor(array.length/2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle, array.length));

    return merge(left,right)
}


function merge(left, right){

    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){

        if(left[leftIndex] < right[rightIndex]){
            output.push(left[leftIndex])
            leftIndex ++;
        }else {
            output.push(right[rightIndex])
            rightIndex ++;
        }

    }

    return [...output, ...left.slice(leftIndex), ...right.slice(rightIndex), ]
}

console.log(merge([2,10,98],[7,30,35]))

const arr = [5,2,10,4,98,7,30,6,10,15,11,9]
console.log(mergeSort(arr))