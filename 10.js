function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) return false;
    }
    return number > 1;
}

function calculate(input) {
    let primeSum = 0;
    for (let i = 2; i < input; i++) {
        if (isPrime(i)) primeSum += i;
    }
    return primeSum;
}

console.log(calculate(2000000));
