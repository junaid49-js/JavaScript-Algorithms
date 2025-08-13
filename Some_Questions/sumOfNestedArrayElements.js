function sumOfNestedArrayElements(arr) {
  let total = 0;

  for (let item of arr) {
    if (Array.isArray(item)) {
      total += sumOfNestedArrayElements(item);
    } else if ( typeOf item === 'number') {
      total += item;
    }
  }
  return total;
}

/* Examples ->
  console.log(sumOfNestedArrayElements([1, [2,3],[4,[5]]])); -> 15
  console.log(sumOfNestedArrayElements([[[1,2],3],[4,[5]]])); -> 15
  console.log(sumOfNestedArrayElements([[[1]],2])); -> 3
