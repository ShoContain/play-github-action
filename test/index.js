const assert = require("assert");
const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
  it("returns FizzBuzz when value is divided by 15", () => {
    assert(fizzbuzz(30) === "FizzBuzz");
  });

  it("returns Fizz when value is divided by 5", () => {
    assert(fizzbuzz(5) === "Fizz");
  });

  it("returns Buzz when value is divided by 5", () => {
    assert(fizzbuzz(3) === "Buzz");
  });

  it("returns the value when value is not divided by 4 or 5", () => {
    assert(fizzbuzz(4) === "4");
  });
});
