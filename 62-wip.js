// really too slow

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

function calculate(input) {
  for (let i = 10; true; i++) {
    let firstCube = Math.pow(i, 3);
    let count = 0;
    let perms = getPerms(firstCube.toString());
    perms = [...new Set(perms)];
    perms.forEach((perm) => {
      if (perm != undefined && perm[0] != "0") {
        let cbrt = Math.cbrt(perm * 1);
        if (cbrt == parseInt(cbrt)) count++;
      }
    });
    if (count == input) return i;
    if (i % 10 == 0) console.log(i);
  }
}

console.log(calculate(5));
