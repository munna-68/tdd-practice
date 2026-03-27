import { caesarCipher } from "./caesarCipher.js";

describe("caesarCipher", () => {
  it("shifts letters by the given factor", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

  it("wraps from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  it("preserves letter casing", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  it("keeps punctuation and spaces unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  it("returns the original string when shift is zero", () => {
    expect(caesarCipher("No Change", 0)).toBe("No Change");
  });

  it("wraps correctly for shifts larger than 26", () => {
    expect(caesarCipher("abc", 29)).toBe("def");
  });
});
