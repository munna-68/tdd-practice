export function analyzeArray(arr) {
  let min = arr[0];
  let max = arr[0];

  let total = arr.reduce((acc, current) => acc + current, 0);

  for (const currentNumber of arr) {
    if (currentNumber < min) min = currentNumber;
    if (currentNumber > max) max = currentNumber;
  }

  return {
    average: total / arr.length,
    min,
    max,
    length: arr.length,
  };
}
