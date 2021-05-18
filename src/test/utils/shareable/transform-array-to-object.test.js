import { transformArrayToObject } from "../../../utils";

it("Correctly transform array to object", () => {
  const mockedData = [{ field1: [] }, { field2: [] }, { field3: [] }];
  expect(transformArrayToObject(mockedData)).toEqual({
    field1: [],
    field2: [],
    field3: [],
  });
});
