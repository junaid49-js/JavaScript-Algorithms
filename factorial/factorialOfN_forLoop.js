const factorialOfN = function(n){
    let result = 1;
    for (let i = n; i > 1; i--){
        result = result * i
    }
    return result
}
