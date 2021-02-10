function calculate() {
  let good = [];
  for (let i = 1000; i <= 9999; i++) {
    if (!isPrime(i)) continue;
    let perms = getPerms(i.toString());
    perms = perms.filter((perm) => perm > i && isPrime(1 * perm));
    perms = [...new Set(perms)];
    if (perms.length < 2) continue;
    perms = perms.map((perm) => 1 * perm);
    perms.sort();
    for (let j = 0; j < perms.length - 1; j++) {
      let nums = special(i, perms[j], perms, j);
      if (nums) good.push(nums);
    }
  }
  return good[1].join("");
}

function special(first, second, perms, index) {
  for (let i = index + 1; i < perms.length; i++) {
    if (perms[i] - second == second - first) return [first, second, perms[i]];
  }
  return false;
}

const isPrime = (number) => {
  for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) return false;
  }
  return number > 1;
};

const getPerms = (string) => {
  // gets all permutations
  if (string.length == 1) return [string];
  let chars = string.split("");
  let permutations = [];
  for (let i = 0; i < chars.length; i++) {
    let oneChar = chars[i];
    let charsLeft = [...chars];
    charsLeft.splice(i, 1);
    let otherPemutations = getPerms(charsLeft.join(""));
    otherPemutations.forEach((perm) => permutations.push(oneChar + perm));
  }
  return permutations;
};

console.log(calculate());
