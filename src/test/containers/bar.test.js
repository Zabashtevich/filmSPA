import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import theme from "./../../theme/theme";
import { BarContainer } from "../../containers";
import { useSearch, useTrending } from "../../hooks";
import { range } from "../../utils";

jest.mock("./../../hooks", () => ({
  useTrending: jest.fn(),
  useSearch: jest.fn(),
}));

function renderComponent() {
  return {
    ...render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <BarContainer visible={true} />
        </ThemeProvider>
      </BrowserRouter>,
    ),
  };
}

describe("Bar container", () => {
  it("correctly render on loading", () => {
    useTrending.mockReturnValue([null, true]);
    useSearch.mockReturnValue([null, true]);

    const { getByTestId, getByText } = renderComponent();

    expect(getByTestId(/bar-inner/i)).toBeTruthy();
    expect(getByTestId(/bar-container/i)).toBeTruthy();
    expect(getByText(/trending/i)).toBeTruthy();
  });

  it("displays trending items when loading done and user is not searching", () => {
    useTrending.mockReturnValue([
      {
        results: range(1, 10).map((item) => ({
          id: item,
          title: "dummy title",
          media_type: "movie",
        })),
      },
      false,
    ]);
    const { getAllByText, getAllByRole } = renderComponent();

    const links = getAllByRole("link");
    expect(getAllByText("dummy title")).toHaveLength(10);
    expect(links).toHaveLength(10);

    range(1, 10).map((item) => {
      expect(links[item - 1]).toHaveAttribute("href", `/details/movie/${item}`);
    });
  });
});
