function calculate() {
  let maxSol = 0;
  let max = 0;
  for (let p = 1; p <= 1000; p++) {
    let triples = pythagoreanTriples(p);
    if (triples.length > max) {
      maxSol = p;
      max = triples.length;
    }
  }
  return maxSol;
}

const pythagoreanTriples = (P) => {
  // return all triples, such that their sum is P
  let triples = [];
  for (let a = 1; a < P; a++) {
    for (let b = 1; b <= a; b++) {
      let cSquare = a * a + b * b;
      let c = Math.sqrt(cSquare);
      if (parseInt(c) !== c) continue;
      if (c == P - a - b) triples.push({ a, b, c });
    }
  }
  return triples;
};

console.log(calculate());
