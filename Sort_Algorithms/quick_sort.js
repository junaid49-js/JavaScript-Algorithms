const quickSort = function(array){
    if(array.length < 2){
        return array
    }
    let pivot = array[0];
    let leftArray = [];
    let rightArray = [];
    for(let i = 1; i < array.length; i++){
        if(array[i] > pivot){
            rightArray.push(array[i]);
        }else if(array[i] < pivot){
            leftArray.push(array[i]);
        }
    }
    return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
}
