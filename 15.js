function calculate(input) {
  let size = input + 1;
  let grid = [];
  // i - row
  // j - collumn
  for (let i = 0; i < size; i++) {
    grid.push([])
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i == 0 || j == 0) {
        grid[i][j] = 1;
      } else {
        grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
      }
    }
  }
  return grid[input][input];
}

console.log(calculate(20));
