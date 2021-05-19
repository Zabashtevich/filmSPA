import { getFiltredArray } from "../../../utils";

it("Returning filtered array according to the selected filter settings", () => {
  const mockedMovies = [
    {
      id: 1,
      title: "dummy title 1",
      popularity: 0.2,
      vote_count: 3000,
      vote_average: 5,
      value: 4,
      release_date: "2010-10-10",
      type: "tv",
    },
    {
      id: 2,
      title: "dummy title 2",
      popularity: 0.3,
      vote_count: 4000,
      vote_average: 6,
      value: 7,
      release_date: "2000-10-10",
      type: "movie",
    },
    {
      id: 3,
      title: "dummy title 3",
      popularity: 0.2,
      vote_count: 1000,
      vote_average: 3,
      value: 1,
      release_date: "2011-10-10",
      type: "tv",
    },
    {
      id: 4,
      title: "dummy title 4",
      popularity: 0.7,
      vote_count: 5000,
      vote_average: 2,
      value: 2,
      release_date: "2005-10-10",
      type: "movie",
    },
    {
      id: 5,
      title: "dummy title 5",
      popularity: 0.9,
      vote_count: 2500,
      vote_average: 1,
      value: 2,
      release_date: "2013-10-10",
      type: "tv",
    },
  ];

  expect(
    getFiltredArray(mockedMovies, {
      sortBy: "date",
      type: "all",
      primaryYear: "all",
      secondaryYear: "all",
    }),
  ).toEqual([
    {
      id: 5,
      title: "dummy title 5",
      popularity: 0.9,
      vote_count: 2500,
      vote_average: 1,
      value: 2,
      release_date: "2013-10-10",
      type: "tv",
    },
    {
      id: 3,
      title: "dummy title 3",
      popularity: 0.2,
      vote_count: 1000,
      vote_average: 3,
      value: 1,
      release_date: "2011-10-10",
      type: "tv",
    },
    {
      id: 1,
      title: "dummy title 1",
      popularity: 0.2,
      vote_count: 3000,
      vote_average: 5,
      value: 4,
      release_date: "2010-10-10",
      type: "tv",
    },
    {
      id: 4,
      title: "dummy title 4",
      popularity: 0.7,
      vote_count: 5000,
      vote_average: 2,
      value: 2,
      release_date: "2005-10-10",
      type: "movie",
    },
    {
      id: 2,
      title: "dummy title 2",
      popularity: 0.3,
      vote_count: 4000,
      vote_average: 6,
      value: 7,
      release_date: "2000-10-10",
      type: "movie",
    },
  ]);

  expect(
    getFiltredArray(mockedMovies, {
      sortBy: "voteCount",
      type: "tv",
      primaryYear: "2011",
      secondaryYear: "all",
    }),
  ).toEqual([
    {
      id: 5,
      title: "dummy title 5",
      popularity: 0.9,
      vote_count: 2500,
      vote_average: 1,
      value: 2,
      release_date: "2013-10-10",
      type: "tv",
    },
    {
      id: 3,
      title: "dummy title 3",
      popularity: 0.2,
      vote_count: 1000,
      vote_average: 3,
      value: 1,
      release_date: "2011-10-10",
      type: "tv",
    },
  ]);

  expect(
    getFiltredArray(mockedMovies, {
      sortBy: "voteAverage",
      type: "movie",
      primaryYear: "2005",
      secondaryYear: "all",
    }),
  ).toEqual([
    {
      id: 4,
      title: "dummy title 4",
      popularity: 0.7,
      vote_count: 5000,
      vote_average: 2,
      value: 2,
      release_date: "2005-10-10",
      type: "movie",
    },
  ]);

  expect(
    getFiltredArray(mockedMovies, {
      sortBy: "yourVoteValue",
      type: "all",
      primaryYear: "2000",
      secondaryYear: "2010",
    }),
  ).toEqual([
    {
      id: 2,
      title: "dummy title 2",
      popularity: 0.3,
      vote_count: 4000,
      vote_average: 6,
      value: 7,
      release_date: "2000-10-10",
      type: "movie",
    },
    {
      id: 1,
      title: "dummy title 1",
      popularity: 0.2,
      vote_count: 3000,
      vote_average: 5,
      value: 4,
      release_date: "2010-10-10",
      type: "tv",
    },
    {
      id: 4,
      title: "dummy title 4",
      popularity: 0.7,
      vote_count: 5000,
      vote_average: 2,
      value: 2,
      release_date: "2005-10-10",
      type: "movie",
    },
  ]);
});
