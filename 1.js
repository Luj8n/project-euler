function sumOfMultiples(number, maxNumber) {
  let limit = Math.floor((maxNumber - 1) / number);
  return number * ((limit * (limit + 1)) / 2);
}

function calculate() {
  return (
    sumOfMultiples(3, 1000) + sumOfMultiples(5, 1000) - sumOfMultiples(15, 1000)
  );
}

console.log(calculate());
