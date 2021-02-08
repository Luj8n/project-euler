const addTwoNumbers = (str1, str2) => {
  // not fast, but works :)
  let newNum = [];

  let bigger = str1.length > str2.length ? str1 : str2;
  let smaller = str1.length > str2.length ? str2 : str1;

  bigger = bigger
    .split("")
    .map((char) => parseInt(char))
    .reverse();
  smaller = smaller
    .split("")
    .map((char) => parseInt(char))
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
    .map((char) => parseInt(char))
    .reverse();
  smaller = smaller
    .split("")
    .map((char) => parseInt(char))
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
  // return multipliedLines;
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

const SOE = (n) => {
  // Sieve of eratosthenes: return all primes to n
  // https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Pseudocode
  // a little modified, maybe a little faster
  if (n < 2) return [];
  let A = new Array(n + 1);
  let B = [];
  let stop;
  for (let i = 2; i * i <= n; i++) {
    if (A[i] == undefined) {
      B.push(i);
      stop = i;
      for (let j = i * i; j <= n; j += i) {
        A[j] = false;
      }
    }
  }
  for (let i = stop + 1; i < A.length; i++) {
    if (A[i] == undefined) B.push(i);
  }
  return B;
};

const sumOfMultiples = (number, stop) => {
  // for example: number = 3, maxNumber = 20 (it won't include stop if it is a multiple of the number)
  // it will return 63: 3+6+9+12+15+18 = 3*(1+2+3+4+5+6) = 3*21 = 63
  let limit = Math.floor((stop - 1) / number);
  return number * ((limit * (limit + 1)) / 2);
};

const getRotPerms = (string) => {
  // gets rotated permutations
  let chars = string.split("");
  let perms = [];
  for (let i = 0; i < chars.length; i++) {
    let part1 = [...chars];
    let part2 = part1.splice(0, i);
    let result = [...part1, ...part2].join("");
    perms.push(result);
  }
  return perms;
};

const getPerms = (string) => {
  // gets all permutations
  if (string.length == 1) return [string];
  let chars = string.split("");
  let permutations = [];
  for (let i = 0; i < chars.length; i++) {
    let oneChar = chars[i];
    let charsLeft = [...chars];
    charsLeft.splice(i, 1);
    let otherPemutations = module.getPerms(charsLeft.join(""));
    otherPemutations.forEach((perm) => permutations.push(oneChar + perm));
  }
  return permutations;
};

const isPrime = (number) => {
  for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) return false;
  }
  return number > 1;
};

const factorial = (number) => {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= i;
  }
  return product;
};

const isPalindrome = (string) => {
  return string.split("").reverse().join("") == string;
};

const positionInAlphabet = (char) => {
  // returns 1 if char is "a"
  return char.charCodeAt(0) - 96;
};

const isTriangleNumber = (num, i) => {
  if ((num == 0 && i == 1) || num < 0) return false;
  if (num == 0) return true;
  return isTriangleNumber(num - i, i + 1);
};