// Call the binarySearch Function not search function.

// Public interface for binary search - users should call this function
const binarySearch = function(arr,targetNum){
    // Initialize recursive search with full array range
    return search(arr,targetNum, 0, arr.length - 1)
}

// Private helper function that performs recursive binary search
const search = function(arr,targetNum, left, right){
    // Base case: search window is invalid, target not found
    if(left > right){
        return -1
    }
    // Calculate middle index of current search window
    let mid = Math.floor((left + right) / 2);

    // Check if middle element is the target
    if(arr[mid] == targetNum){
        // Target found, return its index
        return mid; 
    }

    // If target is greater than middle element
    else if(arr[mid] < targetNum){
        // Recursively search the right half of the array
        return search(arr,targetNum, mid + 1, right);
    }
    // If target is less than middle element
    else {
        // Recursively search the left half of the array
        return search(arr,targetNum, left, mid - 1);
    }
}
