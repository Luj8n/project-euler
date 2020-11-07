function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) return false;
    }
    return number > 1;
}

function calculate(input) {
    let circularPrimes = [];
    for (let i = 123; i < input; i++) {
        let string = i.toString();
        for (let j = 0; j < string.length; j++) {
            let part1 = string.slice(j, string.length - 1);
            let part2 = string;
            part2.replace(part1, "");
            console.log(string, "|", part1, "|", part2, "|");
        }
    }
    return circularPrimes;
}

console.log(calculate(124));
