let factorial = 1;
let factorialOfN = function(n){
    while(n>0){
        factorial = factorial * n;
        n--;
    }
    return factorial;
}
