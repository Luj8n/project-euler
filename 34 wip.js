function factorial(number) {
    if (number == 1) return 1;
    return number * factorial(number - 1);
}

function calculate(input) {
    let numbers = [];
    for (let i = 3; i < input; i++) {
        let digits = i.toString().split("");
        let sum = 0;
        digits.forEach((digit) => {
            sum += factorial(parseInt(digit));
        });
        // if (sum == i) numbers.push(i);
    }
    return numbers;
}

console.log(calculate(1000));
