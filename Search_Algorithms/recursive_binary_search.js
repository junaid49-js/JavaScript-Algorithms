// Call the binarySearch Function not search function.

const binarySearch = function(arr,targetNum){
    return search(arr,targetNum, 0, arr.length - 1)
}

const search = function(arr,targetNum, left, right){
    if(left > right){
        return -1
    }
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] == targetNum){
        return mid; 
    }
    else if(arr[mid] < targetNum){
        return search(arr,targetNum, mid + 1, right);
    }
    else {
        return search(arr,targetNum, left, mid - 1);
    }
}
