const oneToNinePandigital = (string) => {
  string = string.split("");
  for (let i = 1; i <= 9; i++) {
    if (!string.includes(i.toString())) return false;
  }
  return true;
};

function calculate() {
  let nums = [];
  mainLoop: for (let i = 1; true; i++) {
    secondLoop: for (let n = 1; true; n++) {
      let res = "";
      thirdLoop: for (let j = 1; j <= n; j++) {
        res += (i * j).toString();
      }
      if (res.length == 9) {
        if (oneToNinePandigital(res)) nums.push(res);
      }
      if (res.length > 9) {
        if (n == 2) break mainLoop;
        break secondLoop;
      }
    }
  }
  let max = 0;
  nums.forEach((num) => (max = Math.max(max, num * 1)));
  return max;
}

console.log(calculate());
