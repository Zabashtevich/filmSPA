import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import { CollectionHeaderContainer } from "../../containers";
import theme from "./../../theme/theme";

function renderComponent(props) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <CollectionHeaderContainer {...props} />
      </ThemeProvider>,
    ),
  };
}

describe("Collection header container", () => {
  it("render skeleton item on loading", () => {
    const { getByTestId, queryByText, queryByTestId } = renderComponent({
      data: null,
      loading: true,
      details: null,
    });

    expect(getByTestId(/collection-header-skeleton/i)).toBeTruthy();
    expect(queryByText(/overview/i)).toBeNull();
    expect(queryByTestId(/collection-header-poster/i)).toBeNull();
  });

  it("render full content after loading", () => {
    const mockedData = {
      backdrop_path: "/dummybackdrop",
      poster_path: "/dummyposter",
      title: "dummy title",
      parts: [{}, {}, {}, {}],
      overview: "dummy overview",
    };
    const mockedDetails = { revenue: 1000 };
    const { getByTestId, getByText } = renderComponent({
      data: mockedData,
      loading: false,
      details: mockedDetails,
    });

    expect(getByText(/^overview$/i)).toBeTruthy();
    expect(getByText(/movies amount/i)).toBeTruthy();
    expect(getByText(/dummy overview/i)).toBeTruthy();
    expect(getByText(/revenue/i)).toBeTruthy();
    expect(getByText(/1 000 \$/i)).toBeTruthy();
    expect(getByText(/^4$/i)).toBeTruthy();

    expect(getByTestId(/collection-header-poster/i)).toHaveAttribute(
      "src",
      `https://image.tmdb.org/t/p/w300/dummyposter`,
    );
    expect(getByTestId(/collection-header-thumbnail/i)).toHaveStyle(
      `background-image: url(https://image.tmdb.org/t/p/original/dummybackdrop)`,
    );
  });
});
