function factorial(number) {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= i;
  }
  return product;
}

function calculate(input) {
  let numbers = [];
  for (let i = 3; i < input; i++) {
    let digits = i.toString().split("");
    let sum = 0;
    digits.forEach((digit) => {
      sum += factorial(parseInt(digit));
    });
    if (sum == i) numbers.push(i);
  }
  // return numbers.reduce((sum, cur) => sum + cur);
  return numbers;
}

// dont know when to stop
console.log(calculate(10000000));
