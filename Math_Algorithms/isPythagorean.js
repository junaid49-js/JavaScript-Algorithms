function isPythagorean(a, b, c) {
  const sides = [a, b, c].sort((x, y) => x - y);
  return sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2;
}

console.log(isPythagorean(3, 4, 5)); // true
