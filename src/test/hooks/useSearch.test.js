import { act, renderHook } from "@testing-library/react-hooks";

import { useSearch } from "./../../hooks";

describe("useSearch", () => {
  it("not calling with emply value", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: "dummy data" }),
      }),
    );

    const { result } = renderHook(() => useSearch(""));

    expect(result.current[0]).toBe(null);
    expect(result.current[1]).toBe(true);

    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("calling on value change", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: "dummy data" }),
      }),
    );
    process.env.REACT_APP_API_KEY = "123";

    const { result, waitForNextUpdate } = renderHook(() =>
      useSearch("dummy search"),
    );

    expect(result.current[0]).toBe(null);
    expect(result.current[1]).toBe(true);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/search/multi?api_key=123&query=dummy search",
    );

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current[0]).toEqual({ data: "dummy data" });
    expect(result.current[1]).toBe(false);
  });
});
