import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import theme from "./../../theme/theme";
import { GalleryContainer } from "../../containers";
import { usePaginContext } from "../../context";

jest.mock("./../../context", () => ({
  __esModule: true,
  usePaginContext: jest.fn(),
}));

function renderComponent(props) {
  return {
    ...render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GalleryContainer {...props} />
        </ThemeProvider>
      </BrowserRouter>,
    ),
  };
}

describe("Gallery container", () => {
  const setPagin = jest.fn();
  it("displays skeletons on loading", () => {
    usePaginContext.mockReturnValue([{ active: 1 }, setPagin]);
    const { getByTestId, getAllByTestId } = renderComponent({
      data: null,
      loading: true,
    });

    expect(getByTestId(/gallery-header-skeleton/i)).toBeTruthy();
    expect(getAllByTestId(/gallery-menu-skeleton/i)).toHaveLength(3);
    expect(getAllByTestId(/gallery-poster-skeleton/i)).toHaveLength(20);
  });
});
