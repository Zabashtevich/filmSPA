import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "./../../hooks";

it("useFetch calling with correct url", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: "dummy data", sucess: true }),
    }),
  );

  process.env.REACT_APP_API_KEY = "123";

  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch({ type: "movie", target: "123", querries: true }),
  );

  expect(result.current[0]).toBe(null);
  expect(result.current[1]).toBe(true);

  await act(async () => {
    await waitForNextUpdate();
  });

  expect(result.current[0]).toEqual({ data: "dummy data", sucess: true });
  expect(result.current[1]).toBe(false);

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    "https://api.themoviedb.org/3/movie/123?append_to_response=credits,recommendations,images,videos,reviews,account_states&api_key=123",
  );
});
