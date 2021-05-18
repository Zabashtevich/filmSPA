import { getOffsetStart } from "../../../utils";

it("Correctly calculating  pagin's offset start", () => {
  expect(getOffsetStart(1, 100)).toBe(0);
  expect(getOffsetStart(2, 100)).toBe(0);
  expect(getOffsetStart(5, 100)).toBe(0);
  expect(getOffsetStart(10, 100)).toBe(5);
  expect(getOffsetStart(50, 100)).toBe(45);
  expect(getOffsetStart(84, 100)).toBe(79);
  expect(getOffsetStart(100, 100)).toBe(91);
});
