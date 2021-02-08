function isPalindrome(string) {
  return string.split("").reverse().join("") == string;
}

function calculate(input) {
  let doubleP = [];
  for (let i = 1; i < input; i++) {
    let base10 = i.toString();
    let base2 = i.toString(2);
    if (isPalindrome(base10) && isPalindrome(base2)) {
      doubleP.push(i);
    }
  }
  return doubleP.reduce((sum, cur) => sum + cur);
}

console.log(calculate(1000000));
