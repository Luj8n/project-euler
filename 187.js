function calculate(input) {
  let primes = SOE(input - 1);
  let compositesCount = 0;
  for (let i = 0; true; i++) {
    if (primes[i] >= input / 2) break;
    for (let j = i; true; j++) {
      let product = primes[i] * primes[j];
      if (product >= input) break;
      compositesCount++;
    }
  }
  return compositesCount;
}

const SOE = (n) => {
  // Sieve of eratosthenes: return all primes to n
  // https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Pseudocode
  // a little modified, maybe a little faster
  if (n < 2) return [];
  let A = new Array(n + 1);
  let B = [];
  let stop;
  for (let i = 2; i * i <= n; i++) {
    if (A[i] == undefined) {
      B.push(i);
      stop = i;
      for (let j = i * i; j <= n; j += i) {
        A[j] = false;
      }
    }
  }
  for (let i = stop + 1; i < A.length; i++) {
    if (A[i] == undefined) B.push(i);
  }
  return B;
};

console.log(calculate(100000000));
