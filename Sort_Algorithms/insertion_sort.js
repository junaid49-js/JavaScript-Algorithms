const insertionSort = function(array){
    //for loop to iterate through the array
    for(let i = 1;i < array.length; i++){
        //we took i = 1 to assume the first element is already sorted
        //now we will assign a variable for numbers to insert
        let numberToInsert = array[i];
        //assign another iterator for the second loop, it will be for our assumed sorted array
        let j = i - 1;
        //let's make a loop for this iterator, we will use a while loop
        //this loop will only engage when the number to insert is larger than the last number of the assumed sorted array
        //Keep shifting elements to the right as long as we're within bounds and the current sorted element is greater than numberToInsert
        while(j >= 0 && array[j] > numberToInsert){
            //if the number to insert is smaller than a number in the sorted array, the sorted array number will take its place
            array[j + 1] = array[j];
            //then the index will be decremented
            j--;
        }
        //if the number to insert is larger than any number in the sorted array, before or after the while loop, it will take place in the index of (j + 1)
        array[j + 1] = numberToInsert
    }
    //return the sorted array
    return array
}
