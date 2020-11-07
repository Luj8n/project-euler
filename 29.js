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

function addNumbersTogether(numbers) {
    // requires addTwoNumbers
    let sum = "";
    numbers.forEach((number) => {
        sum = addTwoNumbers(sum, number);
    });
    return sum;
}

function multiplyTwoNumbers(number1, number2) {
    // requires addNumbersTogether
    // simple summation:
    // x321
    //   23
    //  ---
    //  963 - multipliedLine
    // 6420
    // ----
    // 7383

    let multipliedLines = [];

    number1 = number1.split("");
    number1.reverse();
    number1 = number1.map((digit) => parseInt(digit));

    number2 = number2.split("");
    number2.reverse();
    number2 = number2.map((digit) => parseInt(digit));

    let smallerNumber = number2.length < number1.length ? number2 : number1;
    let biggerNumber = number2.length < number1.length ? number1 : number2;

    for (let i = 0; i < smallerNumber.length; i++) {
        let tempProduct = [];
        let carry = 0;
        for (let j = 0; j <= biggerNumber.length; j++) {
            if (j == biggerNumber.length) {
                if (carry != 0) {
                    tempProduct[j] = carry;
                }
                break;
            }
            tempProduct[j] = (smallerNumber[i] * biggerNumber[j] + carry) % 10;
            carry = Math.floor((smallerNumber[i] * biggerNumber[j] + carry) / 10);
        }

        for (let j = 0; j < i; j++) {
            tempProduct.unshift(0);
        }
        tempProduct.reverse();
        multipliedLines.push(tempProduct);
    }

    multipliedLines = multipliedLines.map((arr) => {
        let number = "";
        arr.forEach((num) => (number += num.toString()));
        return number;
    });

    return addNumbersTogether(multipliedLines);
}

function mathPow(number, power) {
    // requires multiplyTwoNumbers
    let mainNumber = number.toString();
    let currentSum = "";

    for (let i = 1; i <= power; i++) {
        if (i != 1) {
            currentSum = multiplyTwoNumbers(mainNumber, currentSum);
        } else {
            currentSum = mainNumber;
        }
    }

    return currentSum;
}

function calculate(a, b) {
    let map = new Map();
    for (let i = 2; i <= a; i++) {
        for (let j = 2; j <= b; j++) {
            // if (mathPow(i, j) != Math.pow(i, j)) {
            //     console.log(i, j);
            // }
            let result = mathPow(i, j);
            map.set(result, true);
        }
    }
    return map.size;
}

console.log(calculate(100, 100));
