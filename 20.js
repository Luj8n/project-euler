function factorial(number) {
    if (number == 1) return 1;
    return multiplyTwoNumbers(number, factorial(number - 1));
}

function addTwoNumbers(number1, number2) {
    // simple summation:
    //+321
    // 123
    // ---
    // 424
    number1 = number1.split("");
    number1.reverse();
    number1 = number1.map((digit) => parseInt(digit));

    number2 = number2.split("");
    number2.reverse();
    number2 = number2.map((digit) => parseInt(digit));

    let sum = [];
    let carry = 0;
    let smallerNumber = number2.length < number1.length ? number2 : number1;
    let biggerNumber = number2.length < number1.length ? number1 : number2;
    for (let i = 0; i <= biggerNumber.length; i++) {
        if (number2.length == 0) {
            sum = [...number1];
            break;
        }
        if (i < smallerNumber.length) {
            sum[i] = (biggerNumber[i] + smallerNumber[i] + carry) % 10;
            carry = biggerNumber[i] + smallerNumber[i] + carry > 9 ? 1 : 0;
        } else if (i < biggerNumber.length) {
            sum[i] = (biggerNumber[i] + carry) % 10;
            carry = biggerNumber[i] + carry > 9 ? 1 : 0;
        } else if (carry == 1) {
            sum[i] = 1;
        }
    }

    sum.reverse();
    return sum.join("");
}

function multiplyTwoNumbers(input1, input2) {
    // requires function addTwoNumbers
    // this is slow if both numbers are bigger than 10^6
    let number1, number2;
    if (input1 > input2) {
        number1 = input2;
        number2 = input1;
    } else {
        number1 = input1;
        number2 = input2;
    }
    let currentSum = number2.toString();

    for (let i = 1; i < number1; i++) {
        currentSum = addTwoNumbers(currentSum, number2.toString());
    }

    return currentSum;
}

function calculate(input) {
    let number = factorial(input);
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);
    }
    return sum;
}

console.log(calculate(100));
