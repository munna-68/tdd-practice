import { add } from "../code/sum";

test("sum of two number", () => {
  expect(add(2, 2)).toBe(4);
});
