const isPowerOf2 = function(n){
    let power = 0;
    if(n < 1){
        return false;
    }
    while(n > 1){
        n= n/2;
        power++
    }
    if(n == 1){
        return true;
    }
    return false
}
