import { createVote } from "../../utils";

it("Creating correct user vote", () => {
  jest.spyOn(global.Date, "now").mockImplementation(() => new Date(0));

  const mockedMovie = {
    id: 1,
    media_type: "tv",
    title: "dummy title",
    release_date: "2100-10-10",
    vote_count: 1000,
    vote_average: 5.2,
    popularity: 0.5,
  };

  expect(createVote(mockedMovie, 5)).toEqual({
    date: new Date(0),
    id: 1,
    type: "tv",
    title: "dummy title",
    release_date: "2100-10-10",
    vote_count: 1000,
    vote_average: 5.2,
    popularity: 0.5,
    value: 5,
  });
});
