function calculate(input) {
  for (let j = 1; true; j++) {
    let numbers = [];
    for (let i = 1; i <= input; i++) {
      numbers.push(j * i);
    }
    // sort all numbers from [numbers] and put them in [sortedNumbers]
    let sortedNumbers = numbers.map((el) =>
      el.toString().split("").sort().join("")
    );

    // check if the numbers in [sortedNumbers] are the same
    if (sortedNumbers.every((n) => n === sortedNumbers[0])) {
      return j;
    }
  }
}

console.log(calculate(6));

// hackerrank version (https://www.hackerrank.com/contests/projecteuler/challenges/euler052/problem) (not fully working) -------------------------------------

// function processData(input) {
//   const N = input.split(" ")[0];
//   const K = input.split(" ")[1];

//   let output = "";

//   let testedNumbers = [];

//   for (let j = 1; j <= N; j++) {
//     if (!testedNumbers.includes(j)) {
//       let numbers = [];
//       for (let i = 1; i <= K; i++) {
//         numbers.push(j * i);
//       }
//       let sortedNumbers = numbers.map((el) =>
//         el.toString().split("").sort().join("")
//       );

//       if (sortedNumbers.every((n) => n === sortedNumbers[0])) {
//         testedNumbers = [...testedNumbers, ...numbers];
//         output +=
//           output === "" ? `${numbers.join(" ")}` : `\n${numbers.join(" ")}`;
//       }
//     }
//   }

//   console.log(output);
// }

// processData("125875 2");
