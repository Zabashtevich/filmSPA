import { calculateOffset } from "./../../../utils";

it("Calculating correct filter offset", () => {
  expect(calculateOffset("all")).toEqual({ year: 1950, amount: 72 });
  expect(calculateOffset("1970")).toEqual({ year: "1970", amount: 52 });
});
