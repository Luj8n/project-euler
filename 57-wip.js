// doesnt work for some reason, the answer is wrong

const GCD = (a, b) => {
  // from geeksforgeeks
  if (b == 0) return a;
  return GCD(b, a % b);
};

const LCM = (a, b) => {
  // from geeksforgeeks
  return (a / GCD(a, b)) * b;
};

const addFractions = (a, b) => {
  // fraction is an object
  // example of fraction: {numerator: someNumber, denominator: someNumber}
  // den can't be negative, but num can be
  let newDen = LCM(a.denominator, b.denominator);
  let newNum = a.numerator * (newDen / a.denominator) + b.numerator * (newDen / b.denominator);
  return { numerator: newNum, denominator: newDen };
};

const multiplyFractions = (a, b) => {
  let newDen = a.denominator * b.denominator;
  let newNum = a.numerator * b.numerator;
  let divideBy = GCD(newDen, newNum);
  newDen /= divideBy;
  newNum /= divideBy;
  return { numerator: newNum, denominator: newDen };
};

const divideFractions = (a, b) => {
  return multiplyFractions({ ...a }, { numerator: b.denominator, denominator: b.numerator });
};

const sqrtOf2 = (iterations) => {
  // the more iterations, the more precise
  function func(iLeft) {
    if (iLeft == 1) return { numerator: 1, denominator: 2 };
    return divideFractions(
      { numerator: 1, denominator: 1 },
      addFractions({ numerator: 2, denominator: 1 }, func(iLeft - 1))
    );
  }
  return addFractions({ numerator: 1, denominator: 1 }, func(iterations));
};

function calculate(input) {
  let count = 0;
  for (let i = 1; i <= input; i++) {
    let { numerator: num, denominator: den } = sqrtOf2(i);
    if (num.toString().length > den.toString().length) {
      count++;
    }
  }
  return count;
}

console.log(calculate(1000));
