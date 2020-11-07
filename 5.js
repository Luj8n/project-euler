function calculate(input) {
  let notFound = true;
  let number = 0;
  for (let i = 1; notFound; i++) {
    for (let j = 1; j <= input; j++) {
      if (!Number.isInteger(i / j)) break;
      if (j == input) {
        number = i;
        notFound = false;
      }
    }
  }
  console.log(number);
}

calculate(20);
