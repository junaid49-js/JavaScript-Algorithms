// Declare a function for linear search and provide array and number to search in the arguments
const linearSearch = function(arr,targetNum){
    // Edge case: if array is empty, return -1
    if (arr.length === 0) return -1;
    // Run a for loop from 0 till i is less than the length of array
    for(let i = 0; i < arr.length; i++){
        // if ith element is the targeted number then return i
        if(arr[i] === targetNum){
            return i
        }
    }
    // If the targeted number never gets found return -1
    return -1
}
