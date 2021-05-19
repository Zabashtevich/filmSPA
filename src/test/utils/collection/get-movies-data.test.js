import { getMoviesData } from "../../../utils";

it("Fetching data with correct url", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: "dummy data" }),
    }),
  );

  process.env.REACT_APP_API_KEY = "123";

  const movieDetails = await getMoviesData([{ id: 1 }, { id: 2 }]);

  expect(global.fetch).toHaveBeenCalledWith(
    `https://api.themoviedb.org/3/movie/1?api_key=123&append_to_response=credits,recommendations,images,videos,reviews,account_states`,
  );
  expect(global.fetch).toHaveBeenCalledWith(
    `https://api.themoviedb.org/3/movie/2?api_key=123&append_to_response=credits,recommendations,images,videos,reviews,account_states`,
  );
  expect(global.fetch).toHaveBeenCalledTimes(2);

  expect(movieDetails).toEqual([
    { data: "dummy data" },
    { data: "dummy data" },
  ]);
});
