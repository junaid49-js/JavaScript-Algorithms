const linearSearch = function(arr,num){
    if (arr.length === 0) return -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i
        }
    }
    return -1
}
