function collatzSeqLength(number, currentLength) {
  if (number == 1) return currentLength;
  if (number % 2 == 0) return collatzSeqLength(number / 2, currentLength + 1);
  else return collatzSeqLength(number * 3 + 1, currentLength + 1);
}

function calculate(input) {
  let longestLength = {
    number: undefined,
    currentLength: 0,
  };
  for (let i = 1; i < input; i++) {
    let length = collatzSeqLength(i, 1);
    if (length > longestLength.currentLength) {
      longestLength = {
        number: i,
        currentLength: length,
      };
    }
  }
  return longestLength.number;
}

console.log(calculate(1000000));
