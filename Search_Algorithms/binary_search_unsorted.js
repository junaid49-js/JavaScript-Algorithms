//This Function will return the index of the targetNum in the sorted Array.

const binarySearch = function(unsortedInputArr,targetNum){
    let sortedArr = unsortedInputArr.sort((a,b) => a - b)
    let left = 0;
    let right = sortedArr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(sortedArr[mid] == targetNum){
            return mid;
        }
        else if(sortedArr[mid] < targetNum){
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1
}
