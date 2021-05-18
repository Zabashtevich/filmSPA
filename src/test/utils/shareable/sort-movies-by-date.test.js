import { sortMoviesByDate } from "../../../utils";

it("Correctly sorting items by release date", () => {
  const mockedData = [
    { id: 1, release_date: "2100-10-10" },
    { id: 2, release_date: "2101-10-10" },
    { id: 3, release_date: "2102-10-10" },
    { id: 4, release_date: "2103-10-10" },
    { id: 5, release_date: "2106-10-10" },
    { id: 6, release_date: "2105-10-10" },
    { id: 7, release_date: "" },
    { id: 8, release_date: "" },
  ];

  expect(sortMoviesByDate(mockedData)).toEqual([
    { id: 7, release_date: "" },
    { id: 8, release_date: "" },
    { id: 5, release_date: "2106-10-10" },
    { id: 6, release_date: "2105-10-10" },
    { id: 4, release_date: "2103-10-10" },
    { id: 3, release_date: "2102-10-10" },
    { id: 2, release_date: "2101-10-10" },
    { id: 1, release_date: "2100-10-10" },
  ]);
});
