// wont work this way

function calculate(input) {
  for (let i = 1; true; i++) {
    let primes = SOE(Math.pow(10, i));
    primes = primes.filter((num) => num.toString().length == i);
    // go through the nth digit of the primes
    for (let j = 0; j < i; j++) {
      // check every number (0 - 9)
      for (let k = 0; k <= 9; k++) {
        let found = 0;
        let good = [];
        // go through every prime
        for (let p = 0; p < primes.length; p++) {
          if (primes[p].toString()[j] == k) {
            good.push(primes[p]);
            found++;
          }
        }
        if (found >= input) return good;
      }
    }
    console.log(i);
  }
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

console.log(calculate(7));
