import { sum } from "../Components/sum";

test("sum of two positive number", () => {
  expect(sum(3, 4)).toBe(7);
});
