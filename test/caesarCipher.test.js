import { caesarCipher } from "../code/caesarCipher.js";

describe("caesarCipher", () => {
  describe("basic shifting", () => {
    it("shifts letters by the given factor", () => {
      expect(caesarCipher("abc", 3)).toBe("def");
    });

    it("shifts a single letter", () => {
      expect(caesarCipher("a", 1)).toBe("b");
    });

    it("returns the original string when shift is zero", () => {
      expect(caesarCipher("No Change", 0)).toBe("No Change");
    });
  });

  describe("wrapping behavior", () => {
    it("wraps from z to a", () => {
      expect(caesarCipher("xyz", 3)).toBe("abc");
    });

    it("wraps from Z to A for uppercase", () => {
      expect(caesarCipher("XYZ", 3)).toBe("ABC");
    });

    it("wraps correctly for shifts larger than 26", () => {
      expect(caesarCipher("abc", 29)).toBe("def");
    });

    it("handles shift of exactly 26 (full rotation)", () => {
      expect(caesarCipher("hello", 26)).toBe("hello");
    });
  });

  describe("negative shifts", () => {
    it("shifts letters backward with negative factor", () => {
      expect(caesarCipher("def", -3)).toBe("abc");
    });

    it("wraps from a to z with negative shift", () => {
      expect(caesarCipher("abc", -3)).toBe("xyz");
    });

    it("handles large negative shifts", () => {
      expect(caesarCipher("def", -29)).toBe("abc");
    });
  });

  describe("case preservation", () => {
    it("preserves lowercase letters", () => {
      expect(caesarCipher("hello", 3)).toBe("khoor");
    });

    it("preserves uppercase letters", () => {
      expect(caesarCipher("HELLO", 3)).toBe("KHOOR");
    });

    it("preserves mixed case", () => {
      expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    });
  });

  describe("non-alphabetic characters", () => {
    it("keeps spaces unchanged", () => {
      expect(caesarCipher("hello world", 3)).toBe("khoor zruog");
    });

    it("keeps punctuation unchanged", () => {
      expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    });

    it("keeps numbers unchanged", () => {
      expect(caesarCipher("abc123", 3)).toBe("def123");
    });

    it("handles special characters", () => {
      expect(caesarCipher("a@b#c$", 1)).toBe("b@c#d$");
    });
  });

  describe("edge cases", () => {
    it("returns empty string for empty input", () => {
      expect(caesarCipher("", 5)).toBe("");
    });

    it("handles string with only non-alphabetic characters", () => {
      expect(caesarCipher("123!@#", 5)).toBe("123!@#");
    });
  });
});
