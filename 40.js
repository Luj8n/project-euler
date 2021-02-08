function calculate() {
  let fraction = "";
  let n = 0;
  let product = 1;
  for (let i = 0; n <= Math.pow(10, 6); i++) {
    iString = i.toString();
    fraction += iString;
    n += iString.length;
  }
  for (let i = 0; i <= 6; i++) {
    product *= parseInt(fraction[Math.pow(10, i)]);
  }
  return product;
}

console.log(calculate());
