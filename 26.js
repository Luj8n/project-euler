function calculate(input) {
    let map = [];
    let offset = Math.floor(input / 2);

    for (let i = 0; i < input; i++) {
        map[i] = [];
        for (let j = 0; j < input; j++) {
            map[i][j] = 0;
        }
    }

    let x = 0;
    let y = 0;

    map[0 + offset][0 + offset] = 1;

    let step = 1;

    for (let i = 2; i <= input * input; i++) {
        switch (step) {
            case 1:
                x += 1;
                step = 2;
                break;
            case 2:
                if (map[y + offset][x + offset - 1] == 0) {
                    step = 3;
                    x -= 1;
                } else y += 1;
                break;
            case 3:
                if (map[y + offset - 1][x + offset] == 0) {
                    step = 4;
                    y -= 1;
                } else x -= 1;
                break;
            case 4:
                if (map[y + offset][x + offset + 1] == 0) {
                    step = 5;
                    x += 1;
                } else y -= 1;
                break;
            case 5:
                if (map[y + offset + 1][x + offset] == 0) {
                    step = 2;
                    y += 1;
                } else x += 1;
                break;
        }

        map[y + offset][x + offset] = i;
    }

    let sum = 0;

    for (let i = 0; i < input; i++) {
        sum += map[i][i];
    }

    for (let i = 0; i < input; i++) {
        sum += map[i][input - i - 1];
    }

    return sum - 1;
}

console.log(calculate(1001));
