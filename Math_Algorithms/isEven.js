// Declare a function with number to check if it is an even number as an argument
const isEven = (number) => {
  // if remainder of the number divided by 2 is 0 than the number is even
  if(number % 2 === 0){
    return true;
  }
  // if none of condition matches than the number is not even
 return false;
}
