const isPrime = function(n){
    let divider = [1];
  for(let i = 2; i <= n; i++){
      if(n % i ===0){
          divider.push(i)
      }
  }
  if(divider.length == 2){
      return true;
  }
  return false
}
