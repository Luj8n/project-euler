function calculate() {
  loop: for (let i = 2; true; i++) {
    if (i % 2 == 0 || isPrime(i)) continue loop;
    let oddComposite = i;
    for (let j = 0; true; j++) {
      let doubleSquare = 2 * j * j;
      let shouldBePrime = oddComposite - doubleSquare;
      if (shouldBePrime < 2) break;
      if (isPrime(shouldBePrime)) continue loop;
    }
    return oddComposite;
  }
}

const isPrime = (number) => {
  for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) return false;
  }
  return number > 1;
};

console.log(calculate());
