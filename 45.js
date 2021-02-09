function calculate() {
  for (let i = 286; true; i++) {
    let T = triangleNumber(i);
    if (isPentagonNumber(T) && isHexagonNumber(T)) return T;
  }
}

const triangleNumber = (number) => {
  return (number * (number + 1)) / 2;
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

console.log(calculate());
