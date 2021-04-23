import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "./../../theme/theme";
import { CollectionPartsContainer } from "./../../containers";
import { range } from "../../utils";
import { BrowserRouter } from "react-router-dom";

function renderComponent(props) {
  return {
    ...render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CollectionPartsContainer {...props} />
        </ThemeProvider>
      </BrowserRouter>,
    ),
  };
}

describe("Collection parts container", () => {
  it("displays skeleton items on loading", () => {
    const { getAllByTestId, getByText } = renderComponent({
      loading: true,
      data: null,
    });

    expect(getAllByTestId(/collection-parts-skeleton/i)).toHaveLength(3);
    expect(getByText(/collection movies/i)).toBeTruthy();
  });

  it("render full content after loading", () => {
    const mockedData = {
      parts: range(1, 3).map((item) => ({
        id: item,
        title: `dummy title ${item}`,
        release_date: `2100-100-100`,
        overview: `dummy overview ${item}`,
        poster_path: `/dummysrc${item}`,
      })),
    };
    const { getAllByTestId, getByText, getAllByText } = renderComponent({
      loading: false,
      data: mockedData,
    });

    const posters = getAllByTestId(/collection-parts-poster/i);
    expect(posters).toHaveLength(3);

    expect(getAllByText(/^2100$/i)).toHaveLength(3);

    range(1, 3).map((item) => {
      expect(getByText(`dummy title ${item}`)).toBeTruthy();
      expect(getByText(`dummy overview ${item}`)).toBeTruthy();
      expect(posters[item - 1]).toHaveAttribute(
        "src",
        `https://image.tmdb.org/t/p/w200/dummysrc${item}`,
      );
    });
  });
});
