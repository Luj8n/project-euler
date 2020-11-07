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
    let sum = 0;
    for (let i = 1; i < input; i++) {
        let tempSum = sumOfProperDivisors(i);
        if (sumOfProperDivisors(tempSum) == i && tempSum != i) {
            sum += i;
        }
    }
    return sum;
}

console.log(calculate(10000));
