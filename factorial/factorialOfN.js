const factorialOfN = function(n){
    let result;
    if(n == 0 || n == 1){
        result = 1
        return result;
    }
    result = n * factorialOfN(n-1);
    return result
}
