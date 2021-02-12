function calculate(input) {
  let count = 0;
  for (let i = 1; i < input; i++) {
    if (squareDigitChain(i).end == 89) count++;
  }
  return count;
}

const squareDigitChain = (num, iterations = 0) => {
  // more info in problem 92 (https://projecteuler.net/problem=92)
  if (num == 89 || num == 1) return { end: num, iterations };
  let sum = 0;
  num
    .toString()
    .split("")
    .forEach((digit) => (sum += digit * digit));
  return squareDigitChain(sum, iterations + 1);
};

console.log(calculate(10000000));
