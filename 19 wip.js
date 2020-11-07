let date = new Date();
date.setFullYear(1901, 1, 1);

function calculate() {
  let sundaysInJanuarySum = 0;
  while (date.getFullYear() < 2001) {
    do {
      date.setMonth(date.getMonth() + 1);
    } while (date.getMonth() != 0);

    date.setFullYear(date.getFullYear() + 1);
  }
  return sundaysInJanuarySum;
}

// date.setMonth(date.getMonth() + 1);

// console.log(calculate());
console.log(date.getDate());
