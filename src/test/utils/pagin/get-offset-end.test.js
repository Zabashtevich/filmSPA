import { getOffsetEnd } from "../../../utils";

it("Correct calculating pagin's offset end", () => {
  expect(getOffsetEnd(1, 100)).toBe(10);
  expect(getOffsetEnd(50, 100)).toBe(55);
  expect(getOffsetEnd(60, 100)).toBe(65);
  expect(getOffsetEnd(70, 100)).toBe(75);
  expect(getOffsetEnd(41, 100)).toBe(46);
  expect(getOffsetEnd(95, 100)).toBe(100);
  expect(getOffsetEnd(99, 100)).toBe(100);
});
