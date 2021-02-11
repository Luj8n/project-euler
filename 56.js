const addTwoNumbers = (str1, str2) => {
  // not fast, but works :)
  let newNum = [];

  let bigger = str1.length > str2.length ? str1 : str2;
  let smaller = str1.length > str2.length ? str2 : str1;

  bigger = bigger
    .split("")
    .map((char) => 1 * char)
    .reverse();
  smaller = smaller
    .split("")
    .map((char) => 1 * char)
    .reverse();

  let carry = 0;
  for (let i = 0; i <= bigger.length; i++) {
    if (i < smaller.length) {
      newNum.push((bigger[i] + smaller[i] + carry) % 10);
      carry = Math.floor((bigger[i] + smaller[i] + carry) / 10);
    } else if (i == bigger.length) {
      if (carry == 1) newNum.push(1);
    } else {
      newNum.push((bigger[i] + carry) % 10);
      carry = Math.floor((bigger[i] + carry) / 10);
    }
  }
  newNum.reverse();
  return newNum.join(""); // returns a string
};

const addNumbersTogether = (numbers) => {
  // not fast, but works :)
  // numbers is an array of strings
  let sum = "0";
  numbers.forEach((number) => {
    sum = addTwoNumbers(sum, number);
  });
  return sum; // returns a string
};

const multTwoNumbers = (str1, str2) => {
  // not fast, but works :)
  let multipliedLines = [];

  let bigger = str1.length > str2.length ? str1 : str2;
  let smaller = str1.length > str2.length ? str2 : str1;

  bigger = bigger
    .split("")
    .map((char) => 1 * char)
    .reverse();
  smaller = smaller
    .split("")
    .map((char) => 1 * char)
    .reverse();

  for (let i = 0; i < smaller.length; i++) {
    let tempNum = [];
    let carry = 0;
    for (let j = 0; j <= bigger.length; j++) {
      if (j == bigger.length) {
        if (carry != 0) tempNum.push(carry);
        break;
      }
      tempNum.push((smaller[i] * bigger[j] + carry) % 10);
      carry = Math.floor((smaller[i] * bigger[j] + carry) / 10);
    }
    tempNum.reverse();
    for (let j = 0; j < i; j++) {
      tempNum.push(0);
    }
    multipliedLines.push(tempNum.join(""));
  }
  return addNumbersTogether(multipliedLines);
};

const pow = (str, power) => {
  // not fast, but works :)
  let result = "1";
  while (power > 0) {
    if (power % 2 != 0) result = multTwoNumbers(result, str);
    power = Math.floor(power / 2);
    str = multTwoNumbers(str, str);
  }
  return result;
};

function calculate(input) {
  let maxDigitSum = 0;
  for (let a = 1; a < input; a++) {
    for (let b = 1; b < input; b++) {
      let resString = pow(a.toString(), b);
      let digitSum = resString.split("").reduce((sum, cur) => sum + 1 * cur, 0);
      if (digitSum > maxDigitSum) {
        maxDigitSum = digitSum;
      }
    }
  }
  return maxDigitSum;
}

console.log(calculate(100));
