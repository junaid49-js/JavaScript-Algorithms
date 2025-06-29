// This program partition the array around the range such that array is divided in three parts. where-
// All elements smaller than lowVal come first.
// All elements in range lowVal to highVal come next. 
// All elements greater than highVal appear in the end. 

const threeWayPartition = (array, lowVal, highVal) => {
    let start_to_lowVal = [];
    let lowVal_to_highVal = [];
    let highVal_to_end = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] < lowVal){
            start_to_lowVal.push(array[i]);
        }
        if(array[i] >= lowVal && array[i] <= highVal){
            lowVal_to_highVal.push(array[i]);
        }
        if(array[i] > highVal){
            highVal_to_end.push(array[i]);
        }
    }
    return [...start_to_lowVal, ...lowVal_to_highVal, ...highVal_to_end]
}
