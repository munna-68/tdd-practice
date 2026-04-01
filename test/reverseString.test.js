import { reverseString } from "../code/reverseString.js";

describe("reverseString", () => {
  it("reverses a regular string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("returns an empty string when given an empty string", () => {
    expect(reverseString("")).toBe("");
  });

  it("returns the same string for a single character", () => {
    expect(reverseString("a")).toBe("a");
  });

  it("reverses strings that include spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  it("returns the same value for a palindrome", () => {
    expect(reverseString("racecar")).toBe("racecar");
  });
});
