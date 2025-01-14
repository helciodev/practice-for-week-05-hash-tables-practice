const hexadecimalNumsObjs = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};

function hexadecimalToDecimal(hex) {
  let result = 0;
  let i = hex.length - 1;
  for (char of hex) {
    result += Math.pow(16, i) * hexadecimalNumsObjs[char];
    i--;
  }
  return result;
}

module.exports = {
  hexadecimalToDecimal,
};
