function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) return false;
    }
    return number > 1;
}

function calculate(input) {
    let primesFound = 0;
    let nPrime = 0;
    for (let i = 2; primesFound < input; i++) {
        if (isPrime(i)) primesFound++;
        if (primesFound == input) nPrime = i;
    }
    return nPrime;
}

console.log(calculate(10001));
