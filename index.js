function getSumOfNumbers(input) {
  if (input === "") return 0;
  const numbers = input.split(/,|\n/).map(Number);
  return numbers.reduce((sum, n) => sum + (Number.isNaN(n) ? 0 : n), 0);
}

module.exports = getSumOfNumbers;
