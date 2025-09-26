const getSumOfNumbers = require("./index");

describe("getSumOfNumbers", () => {
  test("returns 0 for empty input", () => {
    expect(getSumOfNumbers("")).toBe(0);
  });
});
