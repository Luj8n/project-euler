function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) return false;
    }
    return number > 1;
}

function calculate(input) {
    let highestPrimeFactor = 0;
    let i = 2;
    while (i <= input) {
        if (input % i == 0 && isPrime(i)) {
            highestPrimeFactor = i;
            while (input % i == 0) input /= i;
        }
        i++;
    }
    return highestPrimeFactor;
}

console.log(calculate(600851475143));
