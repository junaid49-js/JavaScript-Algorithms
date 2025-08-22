//The Function expects a sorted Array in input.
// Performs binary search on a sorted array to find the target number

const binarySearch = function(arr,targetNum){
    // Initialize left pointer to start of array
    let left = 0;
    // Initialize right pointer to end of array
    let right = arr.length - 1;

    // Continue searching while the search window is valid
    while(left <= right){
        // Calculate middle index of current search window
        let mid = Math.floor((left + right) / 2);
        // Check if middle element is the target
        if(arr[mid] == targetNum){
            // If target found, return its index
            return mid;
        }
        // If target is greater than middle element
        else if(arr[mid] < targetNum){
            // Discard left half, search right half
            left = mid + 1;
        }
        // If target is less than middle element
        else {
            // Discard right half, search left half
            right = mid - 1;
        }
    }
    // Target not found in array
    return -1
}
