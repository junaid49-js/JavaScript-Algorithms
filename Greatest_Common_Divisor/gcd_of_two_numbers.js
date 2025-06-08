const gcd = function(a, b){
    let result = Math.min(a,b);
    
    while (result > 0){
        if(a % result == 0 && b % result == 0){
            return result
        }
        result--;
    }
    return result
}
