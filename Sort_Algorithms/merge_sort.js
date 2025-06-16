const mergeSort = function(array){
    if(array.length < 2){
        return array
    }

    const mid = Math.floor(array.length / 2);
    const leftArray = array.slice(0,mid);
    const rightArray = array.slice(mid)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const merge = function(leftArray, rightArray){
    const sortedArray = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0] <= rightArray[0]){
            console.log(`pushing left ${leftArray[0]} to sorted`)
            sortedArray.push(leftArray.shift())
        } else {
            console.log(`pushing right ${rightArray[0]} to sorted`)
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray]
}
