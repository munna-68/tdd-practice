import { capitalize } from "../code/capitalize";

describe("capitalize", () => {
  it("capitalizes the first character of a lowercase string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("returns an empty string when given an empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("keeps the first character capitalized when already uppercase", () => {
    expect(capitalize("World")).toBe("World");
  });

  it("capitalizes only the first character when the rest are lowercase", () => {
    expect(capitalize("javascript")).toBe("Javascript");
  });

  it("leaves strings starting with numbers or symbols unchanged at first character", () => {
    expect(capitalize("1test")).toBe("1test");
    expect(capitalize("!bang")).toBe("!bang");
  });
});
