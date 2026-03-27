import { calculator } from "./calculator.js";

describe("calculator", () => {
  it("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it("subtracts two numbers", () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  it("multiplies numbers including zero", () => {
    expect(calculator.multiply(7, 0)).toBe(0);
  });

  it("handles negative numbers", () => {
    expect(calculator.add(-3, -2)).toBe(-5);
    expect(calculator.subtract(-3, 2)).toBe(-5);
    expect(calculator.multiply(-3, 2)).toBe(-6);
  });

  it("returns floating point results when needed", () => {
    expect(calculator.divide(7, 2)).toBeCloseTo(3.5);
  });

  it("returns a defined value and does not throw when dividing by zero", () => {
    expect(() => calculator.divide(5, 0)).not.toThrow();
    expect(calculator.divide(5, 0)).toBeDefined();
  });
});
