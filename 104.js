// calculates in like 5 minutes :)

function calculate() {
  let k = 2;
  let cur = [1];
  let prev = [1];
  while (true) {
    let temp = cur;
    cur = addTwoNumbers(cur, prev);
    prev = temp;
    k++;
    if (oneToNinePandigital(cur.slice(-9)) && oneToNinePandigital(cur.slice(0, 9))) return k;
  }
}

const oneToNinePandigital = (arr) => {
  // a little modified
  for (let i = 1; i <= 9; i++) {
    if (!arr.includes(i)) return false;
  }
  return true;
};

const addTwoNumbers = (bigger, smaller) => {
  // modified for this problem to be faster
  let newNum = [];

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
  return newNum;
};

console.log(calculate());
