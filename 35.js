function isPrime(number) {
  for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) return false;
  }
  return number > 1;
}

function calculate(input) {
  let circularPrimes = [];
  for (let i = 2; i < input; i++) {
    let iArray = i.toString().split("");
    let nums = [];
    for (let j = 0; j < iArray.length; j++) {
      let part1 = [...iArray];
      let part2 = part1.splice(j, part1.length - j);
      let result = parseInt([...part2, ...part1].join(""));
      nums.push(result);
    }
    let arePrime = true;
    nums.forEach((num) => {
      if (!isPrime(num)) {
        arePrime = false;
      }
    });
    if (arePrime) circularPrimes = [...circularPrimes, ...nums];
  }
  return [...new Set(circularPrimes)].length;
}

console.log(calculate(1000000));
