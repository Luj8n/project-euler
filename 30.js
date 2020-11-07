function calculate(input) {
    let max;
    for (let i = 2; true; i++) {
        let num = "";
        for (let j = 0; j < i; j++) {
            num += "9";
        }
        num = parseInt(num);

        let sum = 0;
        num.toString()
            .split("")
            .forEach((element) => {
                sum += Math.pow(parseInt(element), input);
            });

        if (num > sum) {
            max = num;
            break;
        }
    }
    let numbers = [];
    for (let i = 10; i <= max; i++) {
        let sum = 0;
        i.toString()
            .split("")
            .forEach((element) => {
                sum += Math.pow(parseInt(element), input);
            });
        if (i == sum) {
            numbers.push(i);
        }
    }
    let sum = 0;
    numbers.forEach((element) => {
        sum += element;
    });
    return sum;
}

console.log(calculate(5));
