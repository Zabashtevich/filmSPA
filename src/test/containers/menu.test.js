import { act, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import theme from "./../../theme/theme";
import { range } from "../../utils";
import { MenuContainer } from "./../../containers";
import userEvent from "@testing-library/user-event";

function renderComponent(props) {
  return {
    ...render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MenuContainer {...props} />
        </ThemeProvider>
      </BrowserRouter>,
    ),
  };
}

describe("Menu container", () => {
  const mockedData = range(1, 3).map((item) => ({
    id: item,
    name: `dummy name ${item}`,
  }));
  it("displays skeleton", () => {
    const { getAllByTestId, getByText } = renderComponent({
      loading: true,
      userlists: null,
    });

    expect(getAllByTestId(/menu-skeleton/i)).toHaveLength(3);
  });

  it("renders full content after loading", () => {
    const { getByText } = renderComponent({
      loading: false,
      userlists: mockedData,
    });

    range(1, 3).map((item) => {
      expect(getByText(`dummy name ${item}`)).toBeTruthy();
    });

    expect(getByText(/menu/i)).toBeTruthy();
    expect(getByText(/your lists:/i)).toBeTruthy();
    expect(getByText(/go to main page/i)).toBeTruthy();
    expect(getByText(/go to account page/i)).toBeTruthy();
  });

  it("hides and shows menu on arrow button click", async () => {
    const { getByTestId } = renderComponent({
      loading: false,
      userlists: mockedData,
    });

    expect(getByTestId(/menu-container/i)).not.toHaveStyle(
      "transform: translateX(calc(-350px + -2rem))",
    );

    await act(async () => {
      userEvent.click(getByTestId(/menu-arrow/i));
    });

    expect(getByTestId(/menu-container/i)).toHaveStyle(
      "transform: translateX(calc(-350px + -2rem))",
    );
  });
});
