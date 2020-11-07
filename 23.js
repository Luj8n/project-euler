function sumOfProperDivisors(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }
    return sum;
}

function calculate(input) {
    let abundantNumbers = [];
    for (let i = 1; i <= input; i++) {
        if (sumOfProperDivisors(i) > i) abundantNumbers.push(i);
    }
    let madeNumbers = new Map();

    for (let i = 0; i < abundantNumbers.length; i++) {
        for (let j = 0; j < abundantNumbers.length; j++) {
            madeNumbers.set(abundantNumbers[i] + abundantNumbers[j], true);
        }
    }

    let sum = 0;
    for (let i = 1; i <= input; i++) {
        if (!madeNumbers.has(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(calculate(28123));
