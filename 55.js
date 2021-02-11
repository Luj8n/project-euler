function calculate() {
  let count = 0;
  for (let i = 1; i < 10000; i++) {
    if (iterationsToPalindrome(i) === false) count++;
  }
  return count;
}

const iterationsToPalindrome = (num, iterations = 0) => {
  if (iterations == 50) return false;
  if (iterations != 0 && isPalindrome(num.toString())) return iterations;
  return iterationsToPalindrome(
    num + num.toString().split("").reverse().join("") * 1,
    iterations + 1
  );
};

const isPalindrome = (string) => {
  return string.split("").reverse().join("") == string;
};

console.log(calculate());
