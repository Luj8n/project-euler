function calculate(max) {
  for (let i = 1; i <= max; i++) {
    let iP = pentagonNumber(i);
    for (let j = 1; j <= max; j++) {
      let jP = pentagonNumber(j);
      let sum = iP + jP;
      let diff = Math.abs(iP - jP);
      if (isPentagonNumber(sum) && isPentagonNumber(diff)) return diff;
    }
  }
}

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

// increased till it was found
console.log(calculate(10000));
