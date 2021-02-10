function calculate(max) {
  let exceed = 0;
  for (let n = 1; n <= max; n++) {
    for (let r = 1; r <= n; r++) {
      let res = nCr(n, r);
      if (res > 1000000) exceed++;
    }
  }
  return exceed;
}

const factorial = (number) => {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= i;
  }
  return product;
};

const nCr = (n, r) => {
  return factorial(n) / (factorial(r) * factorial(n - r));
};

const nPr = (n, r) => {
  return factorial(n) / factorial(r);
};

console.log(calculate(100));
