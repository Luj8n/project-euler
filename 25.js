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

function calculate(input) {
    let previousNumber = "0";
    let currentNumber = "1";
    let index = 1;
    while (true) {
        index++;
        let temp = currentNumber;
        currentNumber = addTwoNumbers(previousNumber, currentNumber);
        previousNumber = temp;
        // currentNumber is a fibonacci number
        if (currentNumber.length >= input) break;
    }
    return index;
}

console.log(calculate(1000));
