const binarySearch = function(arr,targetNum){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] == targetNum){
            return mid;
        }
        else if(arr[mid] < targetNum){
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1
}
