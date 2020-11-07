function reverseString(str) {
  return str.split("").reverse().join("");
}

function calculate(input) {
  for (let i = 10000; i < 1000000; i++) {
    if (i.toString() == reverseString(i.toString())) {
      // i is a palindrome
      for (let j = 100; j <= 999; j++) {
        if (Number.isInteger(i / j) && Math.round(i / j).toString().length == 3)
          console.log(j, i / j, i);
      }
    }
  }
}

calculate();
