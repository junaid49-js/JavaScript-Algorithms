const factorsOfANumber = (number) => {
  if (number < 1 || !Number.isInteger(number)) {
    return [];
  }

  const factors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }
  return factors;
};
