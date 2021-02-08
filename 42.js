const { readFileSync } = require("fs");

function calculate() {
  let text = readFileSync("./42.txt", "utf8");
  const regex = /"/g;
  text = text.replace(regex, "");
  let words = text.split(",");
  let wordValues = words.map((word) =>
    word
      .toLowerCase()
      .split("")
      .reduce((sum, cur) => sum + positionInAlphabet(cur), 0)
  );
  let triangleCount = 0;
  wordValues.forEach((value) => (triangleCount += isTriangleNumber(value, 1) ? 1 : 0));
  return triangleCount;
}

const isTriangleNumber = (num, i) => {
  if ((num == 0 && i == 1) || num < 0) return false;
  if (num == 0) return true;
  return isTriangleNumber(num - i, i + 1);
};

const positionInAlphabet = (char) => {
  // returns 1 if char is "a"
  return char.charCodeAt(0) - 96;
};

console.log(calculate());
