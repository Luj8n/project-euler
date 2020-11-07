function spellOutNumber(input) {
  // max - 9999
  let number = input.toString();
  let output = "";

  for (let i = number.length - 1; i >= 0; i--) {
    if (i == number.length - 1) {
      switch (number[i]) {
        case "1":
          output = "one";
          break;
        case "2":
          output = "two";
          break;
        case "3":
          output = "three";
          break;
        case "4":
          output = "four";
          break;
        case "5":
          output = "five";
          break;
        case "6":
          output = "six";
          break;
        case "7":
          output = "seven";
          break;
        case "8":
          output = "eight";
          break;
        case "9":
          output = "nine";
          break;
      }
    } else if (i == number.length - 2) {
      if (number[i] == "1") {
        switch (number[i + 1]) {
          case "0":
            output = "ten";
            break;
          case "1":
            output = "eleven";
            break;
          case "2":
            output = "twelve";
            break;
          case "3":
            output = "thirteen";
            break;
          case "4":
            output = "fourteen";
            break;
          case "5":
            output = "fifteen";
            break;
          case "6":
            output = "sixteen";
            break;
          case "7":
            output = "seventeen";
            break;
          case "8":
            output = "eighteen";
            break;
          case "9":
            output = "nineteen";
            break;
        }
      } else {
        switch (number[i]) {
          case "2":
            output = "twenty" + output;
            break;
          case "3":
            output = "thirty" + output;
            break;
          case "4":
            output = "forty" + output;
            break;
          case "5":
            output = "fifty" + output;
            break;
          case "6":
            output = "sixty" + output;
            break;
          case "7":
            output = "seventy" + output;
            break;
          case "8":
            output = "eighty" + output;
            break;
          case "9":
            output = "ninety" + output;
            break;
        }
      }
    } else if (i == number.length - 3) {
      output = "and" + output;
      if (number[i + 1] == 0 && number[i + 2] == 0) {
        output = "hundred";
      } else {
        output = "hundred" + output;
      }
      switch (number[i]) {
        case "1":
          output = "one" + output;
          break;
        case "2":
          output = "two" + output;
          break;
        case "3":
          output = "three" + output;
          break;
        case "4":
          output = "four" + output;
          break;
        case "5":
          output = "five" + output;
          break;
        case "6":
          output = "six" + output;
          break;
        case "7":
          output = "seven" + output;
          break;
        case "8":
          output = "eight" + output;
          break;
        case "9":
          output = "nine" + output;
          break;
      }
    } else if (i == number.length - 4) {
      if (number[i + 1] == 0 && number[i + 2] == 0 && number[i + 3] == 0) {
        output = "thousand";
      } else {
        output = "thousand" + output;
      }
      switch (number[i]) {
        case "1":
          output = "one" + output;
          break;
        case "2":
          output = "two" + output;
          break;
        case "3":
          output = "three" + output;
          break;
        case "4":
          output = "four" + output;
          break;
        case "5":
          output = "five" + output;
          break;
        case "6":
          output = "six" + output;
          break;
        case "7":
          output = "seven" + output;
          break;
        case "8":
          output = "eight" + output;
          break;
        case "9":
          output = "nine" + output;
          break;
      }
    }
  }
  return output;
}

function calculate(input) {
  let string = "";
  for (let i = 1; i <= input; i++) {
    string += spellOutNumber(i);
  }
  return string.length;
}

console.log(calculate(1000));
