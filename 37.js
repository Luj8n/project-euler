const isPrime = (number) => {
  for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) return false;
  }
  return number > 1;
};

function calculate() {
  let found = 0;
  let specPrimes = [];
  loop: for (let i = 8; found != 11; i++) {
    // whole number
    if (!isPrime(i)) continue loop;
    let digits = i.toString().split("");

    // from left to right
    for (let j = 1; j < digits.length; j++) {
      if (!isPrime(parseInt(digits.slice(j, digits.length).join("")))) continue loop;
    }

    // from right to left
    for (let j = 1; j < digits.length; j++) {
      if (!isPrime(parseInt(digits.slice(0, digits.length - j).join("")))) continue loop;
    }
    specPrimes.push(i);
    found++;
  }

  return specPrimes.reduce((sum, cur) => sum + cur);
}

console.log(calculate());
