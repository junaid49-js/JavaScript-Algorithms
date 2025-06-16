const bubbleSort = (array) => {
    // Declare a variable to track if any element is swapped
    let isSwapped;
    // do while loop, we need to run the program atleast once to check if array is sorted or not, if isSwapped remains false it means the array is sorted
    do{
        // Initialize isSwapped to false
        isSwapped = false;
        // Iterating the array
        for(let i = 0; i < array.length - 1; i++){
            // Checking if an element is larger than the element after it
            if(array[i] > array[i+1]){
                // If the if statement is true then this block of code will execute
                // Declaring and initializing a temporary variable to hold the current number
                let temp = array[i];
                // Swapping the current element with the smaller element
                // Assigning the smaller element in the place of the current element
                array[i] = array[i+1];
                // Assigning the temporary variable which holds the larger element to the next element
                array[i+1] = temp;
                // Since this block of code ran and we swapped two elements, we will assign the isSwapped variable to true value
                isSwapped = true;    
            }
        }
        // The condition on what the do while loop will continue to execute
        // If the swapping happens the do while loop will execute again
    } while(isSwapped)

    // after all of that we return our sorted array    
    return array
}
