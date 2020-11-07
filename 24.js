function getAllPermutations(letters) {
    // input is and array of letters (characters)
    let permutations = [];
    if (letters.length == 1) return letters;
    for (let i = 0; i < letters.length; i++) {
        let firstLetter = letters[i];
        let left = [...letters];
        left.splice(i, 1);
        let otherPemutations = getAllPermutations(left);
        otherPemutations.forEach((el) =>
            permutations.push(`${firstLetter}${el}`)
        );
    }
    return permutations;
}

function calculate(input, input2) {
    let array = input.split("");
    let permutations = getAllPermutations(array);
    permutations.sort();
    return permutations[input2 - 1];
}

console.log(calculate("0123456789", 1000000));
