const { readFileSync } = require("fs");

function positionInAlphabet(letter) {
    // returns 0 if letter is "a"
    return letter.charCodeAt(0) - 96;
}

function calculate() {
    let text = readFileSync("./22.txt", "utf8");
    let words = text
        .split(",")
        .map((name) => name.replace('"', "").replace('"', "").toLowerCase())
        .sort();
    let scoreSum = 0;

    for (let i = 0; i < words.length; i++) {
        let value = 0;
        words[i].split("").forEach((letter) => {
            value += positionInAlphabet(letter);
        });
        scoreSum += (i + 1) * parseInt(value);
    }
    return scoreSum;
}

console.log(calculate());
