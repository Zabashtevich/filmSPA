import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MediaContainer } from "./../../containers";
import theme from "../../theme/theme";
import { range } from "../../utils";

function renderComponent(props) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MediaContainer {...props} />
        </BrowserRouter>
      </ThemeProvider>,
    ),
  };
}

describe("Media container", () => {
  it("renders skeletons on loading", () => {
    const { getAllByTestId } = renderComponent({
      data: null,
      loading: true,
    });

    expect(getAllByTestId(/media-skeleton/i)).toBeTruthy();
  });

  it("renders full content", () => {
    const mockedData = range(1, 10).map((item) => ({
      file_path: `/dummysrc${item}`,
    }));

    const { getByText, getAllByRole } = renderComponent({
      data: {
        images: {
          posters: mockedData,
        },
      },
      loading: false,
    });

    expect(getByText(/media/i)).toBeTruthy();
    expect(getByText(/see full gallery/i)).toBeTruthy();

    const posters = getAllByRole("img");

    expect(posters).toHaveLength(10);
    range(1, 10).map((item) => {
      expect(posters[item - 1]).toHaveAttribute(
        "src",
        `https://image.tmdb.org/t/p/w200/dummysrc${item}`,
      );
    });
  });
});
