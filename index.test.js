const getSumOfNumbers = require("./index");

describe("getSumOfNumbers", () => {
  test("returns 0 for empty input", () => {
    expect(getSumOfNumbers("")).toBe(0);
  });

  test("sums numbers separated by comma", () => {
    expect(getSumOfNumbers("1,2,3")).toBe(6);
  });

  test("sums numbers separated by newline", () => {
    expect(getSumOfNumbers("1\n2\n3")).toBe(6);
  });

  test("handles single custom delimiter", () => {
    expect(getSumOfNumbers("//;\n1;2")).toBe(3);
  });

  test("handles multiple custom delimiters", () => {
    expect(getSumOfNumbers("//[*][%]\n1*2%3")).toBe(6);
  });

  test("returns error message for negative numbers", () => {
    expect(getSumOfNumbers("1,-2,3,-4")).toBe(
      "negative numbers not allowed -2,-4"
    );
  });
});
