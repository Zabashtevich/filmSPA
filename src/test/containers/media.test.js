import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MediaContainer } from "./../../containers";
import theme from "../../theme/theme";
import { range } from "../../utils";

function renderComponent(data) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MediaContainer data={data} />
        </BrowserRouter>
      </ThemeProvider>,
    ),
  };
}

describe("Media container", () => {
  it("renders full content", () => {
    const mockedData = range(1, 10).map((item) => ({
      file_path: `/dummysrc${item}`,
    }));

    const { getByText, getAllByRole } = renderComponent({
      images: {
        posters: mockedData,
      },
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
