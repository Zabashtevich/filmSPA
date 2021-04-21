import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

import theme from "./../../theme/theme";
import { PopularContainer } from "./../../containers";
import { useFetch } from "../../hooks";
import { range } from "../../utils";

function renderComponent(component) {
  return {
    ...render(
      <Router>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </Router>,
    ),
  };
}

jest.mock("./../../hooks", () => ({
  __esModule: true,
  useFetch: jest.fn(),
}));

jest.mock("./../../containers/tabs", () => () => <div />);

describe("Popular container", () => {
  it("show skeletons while data is loading", () => {
    useFetch.mockReturnValue([null, true]);

    const { getByTestId, getAllByTestId } = renderComponent(
      <PopularContainer tabs={{ type: "actor" }} />,
    );

    expect(getByTestId("popular-container")).toBeTruthy();
    expect(getAllByTestId("popular-skeleton")).toHaveLength(20);
  });

  it("calls useFetch hook with correct params", () => {
    useFetch.mockReturnValue([null, true]);

    const { getByTestId, getAllByTestId } = renderComponent(
      <PopularContainer tabs={{ type: "actor" }} />,
    );

    expect(useFetch).toHaveBeenCalled();
    expect(useFetch).toHaveBeenCalledWith("actor", "popular");
  });

  it("render popular items after data loading is done", () => {
    const mockedValue = range(1, 20).map((item) => ({
      id: item,
      poster_path: null,
      title: `dummy title ${item}`,
      vote_average: 5.2,
      vote_count: 1000,
      release_date: "2020-10-3",
    }));

    useFetch.mockReturnValue([
      {
        results: mockedValue,
      },
      false,
    ]);

    const {
      getAllByRole,
      getByText,
      getAllByText,
      toHaveAttribute,
    } = renderComponent(<PopularContainer tabs={{ type: "actor" }} />);

    const links = getAllByRole("link");
    const posters = getAllByRole("img");

    expect(posters).toHaveLength(20);
    posters.map((item) => {
      expect(item).toHaveAttribute(
        "src",
        "https://dummyimage.com/250x375/aaa/aaa",
      );
    });

    range(1, 20).map((item) => {
      expect(getByText(`dummy title ${item}`)).toBeTruthy();
    });
    expect(getAllByText("5.2")).toHaveLength(20);
    expect(getAllByText("1000")).toHaveLength(20);
    expect(getAllByText("2020")).toHaveLength(20);

    expect(links).toHaveLength(20);
    range(1, 20).map((item) => {
      expect(links[item - 1]).toHaveAttribute("href", `/details/actor/${item}`);
    });
  });
});
