import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import { TrendingContainer } from "../../containers";
import { usePaginContext } from "../../context";
import { useTrending } from "../../hooks";
import { range } from "../../utils";
import theme from "./../../theme/theme";

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

jest.mock("./../../containers/tabs", () => () => <div />);
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

  it("displays skeletons on loading", () => {
    useTrending.mockReturnValue([null, true]);
    usePaginContext.mockReturnValue([{ active: 1 }, setPagination]);

    const { getAllByTestId } = renderComponent();

    expect(getAllByTestId("trending-skeleton")).toHaveLength(20);
  });

  it("renders content after loading", () => {
    const mockedResponse = range(1, 20).map((item) => ({
      id: item,
      title: `dummy title ${item}`,
      vote_average: 5.5,
      poster_path: null,
      media_type: "tv",
    }));
    useTrending.mockReturnValue([{ results: mockedResponse }, false]);
    usePaginContext.mockReturnValue([{ active: 1 }, setPagination]);

    const { getAllByRole, getByText, getAllByText } = renderComponent();

    const items = getAllByRole("link");
    expect(items).toHaveLength(20);
    range(1, 20).map((item) => {
      expect(items[item - 1]).toHaveAttribute("href", `/details/tv/${item}`);
    });

    const posters = getAllByRole("img");
    expect(posters).toHaveLength(20);
    range(1, 20).map((item) => {
      expect(posters[item - 1]).toHaveAttribute(
        "src",
        "https://dummyimage.com/300x450/aaa/aaa",
      );
    });

    range(1, 20).map((item) => {
      expect(getByText(`dummy title ${item}`)).toBeTruthy();
    });

    expect(getAllByText("5.5")).toHaveLength(20);
  });

  it("calls setPagination after loading", () => {
    useTrending.mockReturnValue([
      {
        results: [
          {
            id: 1,
            title: `dummy title 1`,
            vote_average: 5.5,
            poster_path: null,
            media_type: "tv",
          },
        ],
      },
      false,
    ]);
    usePaginContext.mockReturnValue([{ active: 1 }, setPagination]);

    const {} = renderComponent();

    expect(setPagination).toHaveBeenCalled();
  });
});
