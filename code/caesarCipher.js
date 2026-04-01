export function caesarCipher(str, shift) {
  if (!shift) return str;
  let strArr = [...str];
  let transfromedStrArray = [];

  const lowerClassAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperClassAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const normalizedShift = ((shift % 26) + 26) % 26;
  let hasAlphabet = false;

  for (const alphabetic of strArr) {
    if (lowerClassAlphabet.includes(alphabetic)) {
      hasAlphabet = true;
      const index = lowerClassAlphabet.indexOf(alphabetic);
      const shiftedIndex = (index + normalizedShift) % 26;
      transfromedStrArray.push(lowerClassAlphabet[shiftedIndex]);
      continue;
    }

    if (upperClassAlphabet.includes(alphabetic)) {
      hasAlphabet = true;
      const index = upperClassAlphabet.indexOf(alphabetic);
      const shiftedIndex = (index + normalizedShift) % 26;
      transfromedStrArray.push(upperClassAlphabet[shiftedIndex]);
      continue;
    }

    transfromedStrArray.push(alphabetic);
  }

  if (!hasAlphabet) return str;

  return transfromedStrArray.join("");
}
