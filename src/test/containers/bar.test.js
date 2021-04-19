import { act, fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

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
    const { getAllByText, getAllByRole, getAllByTestId } = renderComponent();

    const links = getAllByRole("link");
    expect(getAllByText(/dummy title/i)).toHaveLength(10);
    expect(links).toHaveLength(10);

    range(1, 10).map((item) => {
      expect(links[item - 1]).toHaveAttribute("href", `/details/movie/${item}`);
    });

    expect(getAllByTestId(/bar-movie/i)).toHaveLength(10);
  });

  it("contains correctly working search input", async () => {
    useTrending.mockReturnValue([null, true]);
    useSearch.mockReturnValue([null, true]);

    const { getByRole } = renderComponent();

    expect(getByRole("textbox")).toHaveValue("");

    await act(async () => {
      fireEvent.change(getByRole("textbox"), {
        target: { value: "dummy movie" },
      });
    });

    expect(getByRole("textbox")).toHaveValue("dummy movie");
    expect(useSearch).toHaveBeenLastCalledWith("dummy movie");
  });

  it("renders searched items after useSearch loading done", async () => {
    useTrending.mockReturnValue([null, true]);
    useSearch.mockReturnValue([
      {
        results: range(1, 10).map((item) => ({
          id: item,
          title: "dummy name",
          media_type: "person",
        })),
      },
      false,
    ]);

    const {
      getAllByText,
      getByText,
      getAllByRole,
      getAllByTestId,
      getByRole,
    } = renderComponent();

    await act(async () => {
      fireEvent.change(getByRole("textbox"), {
        target: { value: "dummy movie" },
      });
    });

    expect(getByText(/results/i)).toBeTruthy();

    const links = getAllByRole("link");

    expect(links).toHaveLength(10);
    range(1, 10).map((item) => {
      expect(links[item - 1]).toHaveAttribute("href", `/actor/${item}`);
    });

    expect(getAllByText(/dummy name/i)).toHaveLength(10);
    expect(getAllByTestId(/bar-person/i)).toHaveLength(10);
  });
});
