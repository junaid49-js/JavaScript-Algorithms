function findAllIndices(arr, target){
  return arr.reduce((indices, val, idx) => {
    if(val === target) indices.push(idx);
    return indices;
  }, []);
}

/* Examples - 
  findAllIndices([1,2,3,2,4,2], 2) -> Output - [1,3,5]
  
  findAllIndices(['a','b','a','c'], 'a') -> Output - [0,2]
