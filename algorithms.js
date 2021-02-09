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
  // gets rotated permutations, for example: input is "abc", it will return ["abc", "bca", "cab"]
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

const collatzSeqLength = (number, currentLength) => {
  // usage: collatzSeqLength(someNumber, 1);
  if (number == 1) return currentLength;
  if (number % 2 == 0) return collatzSeqLength(number / 2, currentLength + 1);
  else return collatzSeqLength(number * 3 + 1, currentLength + 1);
};

const oneToNinePandigital = (string) => {
  string = string.split("");
  for (let i = 1; i <= 9; i++) {
    if (!string.includes(i.toString())) return false;
  }
  return true;
};

const triangleNumber = (number) => {
  return (number * (number + 1)) / 2;
};

const isTriangleNumber = (num, i) => {
  // made from the quadratic formula
  // return false if it's not a triangle number,
  // if it is, returns which number it was made from
  let part = Math.sqrt(8 * num + 1);
  if (parseInt(part) !== part) return false;
  let n = (part - 1) / 2;
  if (parseInt(n) !== n) return false;
  return n;
};

const pentagonNumber = (number) => {
  return (number * (3 * number - 1)) / 2;
};

const isPentagonNumber = (num) => {
  // made from the quadratic formula
  // return false if it's not a pentagon number,
  // if it is, returns which number it was made from
  let part = Math.sqrt(24 * num + 1);
  if (parseInt(part) !== part) return false;
  let n = (1 + part) / 6;
  if (parseInt(n) !== n) return false;
  return n;
};

const hexagonNumber = (number) => {
  return number * (2 * number - 1);
};

const isHexagonNumber = (num) => {
  // made from the quadratic formula
  // return false if it's not a pentagon number,
  // if it is, returns which number it was made from
  let part = Math.sqrt(8 * num + 1);
  if (parseInt(part) !== part) return false;
  let n = (1 + part) / 4;
  if (parseInt(n) !== n) return false;
  return n;
};

const GCD = (a, b) => {
  // from geeksforgeeks
  if (b == 0) return a;
  return GCD(b, a % b);
};

const LCM = (a, b) => {
  // from geeksforgeeks
  return (a / GCD(a, b)) * b;
};

const pythagoreanTriples = (P) => {
  // return all triples, such that their sum is P
  let triples = [];
  for (let a = 1; a < P; a++) {
    for (let b = 1; b <= a; b++) {
      let cSquare = a * a + b * b;
      let c = Math.sqrt(cSquare);
      if (parseInt(c) !== c) continue;
      if (c == P - a - b) triples.push({ a, b, c });
    }
  }
  return triples;
};

let start = Date.now();
// --------------------------------

// test the performance of algorithms here

// --------------------------------
let end = Date.now();

console.log(end - start); // it will print how much it took to complete the task
