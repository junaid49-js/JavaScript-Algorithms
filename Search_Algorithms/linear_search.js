const linearSearch = function(arr,targetNum){
    if (arr.length === 0) return -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === targetNum){
            return i
        }
    }
    return -1
}
