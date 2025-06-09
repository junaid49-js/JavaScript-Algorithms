const getLCM = function(a,b){
    let greaterNum = Math.max(a,b);
    let smallerNum = Math.min(a,b);
    for(let lcm = greaterNum; lcm <= a*b; greaterNum += greaterNum){
        if(lcm % smallerNum == 0){
            return lcm
        }
    }
}
