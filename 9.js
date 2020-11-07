function calculate(input) {
  for (let a = 1; a <= input; a++) {
    for (let b = a + 1; b < input; b++) {
      let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      if (Number.isInteger(c) && a + b + c == input) {
        return a * b * c;
      }
    }
  }
}

console.log(calculate(1000));
