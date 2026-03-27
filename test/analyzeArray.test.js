import { analyzeArray } from "./analyzeArray.js";

describe("analyzeArray", () => {
  it("returns average, min, max, and length for a typical array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  it("handles a single-element array", () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  it("handles arrays with negative numbers", () => {
    expect(analyzeArray([-5, -1, -3])).toEqual({
      average: -3,
      min: -5,
      max: -1,
      length: 3,
    });
  });

  it("handles duplicate values", () => {
    expect(analyzeArray([2, 2, 2, 2])).toEqual({
      average: 2,
      min: 2,
      max: 2,
      length: 4,
    });
  });

  it("returns accurate floating point averages", () => {
    const result = analyzeArray([1, 2, 2]);

    expect(result.average).toBeCloseTo(5 / 3);
    expect(result.min).toBe(1);
    expect(result.max).toBe(2);
    expect(result.length).toBe(3);
  });
});
