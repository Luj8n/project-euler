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

function mathPow(number, power) {
  // requires function addTwoNumbers
  let currentSum = "";

  for (let i = 1; i <= power; i++) {
    if (i != 1) {
      currentSum = addTwoNumbers(currentSum, currentSum);
    } else {
      currentSum = number.toString();
    }
  }

  return currentSum;
}

function calculate(number, power) {
  let sumOfDigits = 0;

  let product = mathPow(number, power);

  for (let i = 0; i < product.length; i++) {
    sumOfDigits += parseInt(product[i]);
  }

  return sumOfDigits;
}

console.log(calculate(2, 1000));
