function generateTriangleNumber(number) {
  return (number * (number + 1)) / 2;
}

function calculate(minDivisors) {
  for (let i = 1; true; i++) {
    let triangleNumber = generateTriangleNumber(i);
    let divisors = 0; // 1 and itself
    for (let j = 1; j <= Math.sqrt(triangleNumber); j++) {
      if (triangleNumber % j == 0) {
        if (triangleNumber / j == j) {
          divisors += 1;
        } else {
          divisors += 2;
        }
      }
    }
    if (divisors >= minDivisors) {
      return triangleNumber;
    }
  }
}

console.log(calculate(500));
