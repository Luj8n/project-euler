function calculate(input) {
    let previousNumber = 0;
    let currentNumber = 1;
    let sum = 0;
    while (true) {
        currentNumber += previousNumber;
        previousNumber = currentNumber - previousNumber;
        if (currentNumber > input) break;
        if (currentNumber % 2 == 0) sum += currentNumber;
    }
    return sum;
}

console.log(calculate(4000000));
