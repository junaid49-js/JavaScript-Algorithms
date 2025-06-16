const getCartesian = function(array1,array2){
    const resultArray = [];


    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            resultArray.push([array1[i],array2[j]])
        }
    }

    return resultArray
}
