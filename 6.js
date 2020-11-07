function calculate(input) {
  let difference = 0;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i <= input; i++) {
    sum1 += Math.pow(i, 2);
    sum2 += i;
  }
  sum2 = Math.pow(sum2, 2);
  difference = sum2 - sum1;
  console.log(difference);
}

calculate(100);
