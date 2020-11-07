let coins = [1, 2, 5, 10, 20, 50, 100, 200];

let ways = 0;

function recursive(currentCoinIndex, moneyLeft) {
    if (moneyLeft > 0 && currentCoinIndex < coins.length) {
        // keep the coin
        recursive(currentCoinIndex, moneyLeft - coins[currentCoinIndex]);
        // don't keep the coin
        recursive(currentCoinIndex + 1, moneyLeft);
    } else if (moneyLeft == 0) {
        ways++;
    }
}

recursive(0, 200);

console.log(ways);
