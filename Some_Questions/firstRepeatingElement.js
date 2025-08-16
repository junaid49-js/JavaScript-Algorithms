function firstRepeatingElement(arr){
  const seen = new Set();

  for(let item of arr){
    if(seen.hs(item)){
      return item;
    }
    seen.add(item);
  }
  return null;
}
