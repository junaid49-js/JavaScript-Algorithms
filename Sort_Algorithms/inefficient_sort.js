const mySortAlgo = function(array){
    let sortedArray = [];
    let smallestNumberYet;
    
    while(array.length > 0){
        smallestNumberYet = Math.min(...array);
        sortedArray.push(smallestNumberYet);
        indexOfSmallestNumberYet = array.indexOf(smallestNumberYet);
        array.splice(indexOfSmallestNumberYet,1);
    }
    
    
    return sortedArray;
}
