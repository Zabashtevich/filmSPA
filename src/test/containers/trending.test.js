import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { TrendingContainer } from "../../containers";
import { useTrending } from "../../hooks";
import { usePaginContext } from "../../context";
import theme from "./../../theme/theme";
import { range } from "../../utils";
import userEvent from "@testing-library/user-event";

function renderComponent() {
  return {
    ...render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <TrendingContainer />
        </ThemeProvider>
      </BrowserRouter>,
    ),
  };
}

jest.mock("./../../containers/pagin", () => () => <div />);

jest.mock("./../../hooks", () => ({
  __esModule: true,
  useTrending: jest.fn(),
}));

jest.mock("./../../context", () => ({
  __esModule: true,
  usePaginContext: jest.fn(),
}));

describe("Trending container", () => {
  const setPagination = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("displays skeletons while loading", () => {
    usePaginContext.mockReturnValue([{ active: 1 }, setPagination]);
    useTrending.mockReturnValue([null, true]);

    const { getAllByTestId } = renderComponent();

    expect(getAllByTestId("trending-skeleton")).toHaveLength(20);
    expect(setPagination).not.toHaveBeenCalled();
  });

  it("displays content after loading", () => {
    const mockedResponse = range(1, 20).map((item) => ({
      id: item,
      media_type: "movie",
      title: `dummy title ${item}`,
      poster_path: "/dummysrc",
      vote_average: 5.5,
    }));

    usePaginContext.mockReturnValue([{ active: 1 }, setPagination]);
    useTrending.mockReturnValue([{ results: mockedResponse }, false]);

    const { getAllByText, getAllByRole, getByText } = renderComponent();

    expect(getAllByText("5.5")).toHaveLength(20);

    const links = getAllByRole("link");
    expect(links).toHaveLength(20);
    links.map((item, index) => {
      expect(item).toHaveAttribute("href", `/details/movie/${index + 1}`);
    });

    const posters = getAllByRole("img");
    posters.map((item) => {
      expect(item).toHaveAttribute(
        "src",
        "https://image.tmdb.org/t/p/w200/dummysrc",
      );
    });

    range(1, 20).map((item) => {
      expect(getByText(`dummy title ${item}`)).toBeTruthy();
    });
  });

  it("calls useTrending after switching menu", () => {
    usePaginContext.mockReturnValue([{ active: 1 }, setPagination]);
    useTrending.mockReturnValue([null, true]);

    const { getByText } = renderComponent();

    expect(useTrending).toHaveBeenCalledWith("all", "day", 1);

    userEvent.click(getByText("movie"));
    expect(useTrending).toHaveBeenCalledWith("movie", "day", 1);

    userEvent.click(getByText("week"));
    expect(useTrending).toHaveBeenCalledWith("movie", "week", 1);

    userEvent.click(getByText("tv"));
    expect(useTrending).toHaveBeenCalledWith("tv", "week", 1);

    userEvent.click(getByText("person"));
    expect(useTrending).toHaveBeenCalledWith("person", "week", 1);
  });

  it("calls setPagination after receiveng data from fetch", () => {
    usePaginContext.mockReturnValue([{ active: 1 }, setPagination]);
    useTrending.mockReturnValue([
      {
        results: [
          {
            id: 1,
            media_type: "movie",
            title: "dummy title",
            poster_path: "/dummysrc",
            vote_average: 5.5,
          },
        ],
      },
      false,
    ]);

    const {} = renderComponent();

    expect(setPagination).toHaveBeenCalled();
    expect(setPagination).toHaveBeenCalledTimes(1);
  });
});
