import { ThemeProvider } from "styled-components";

import theme from "./../../theme/theme";
import { FooterContainer } from "../../containers";
import { render } from "@testing-library/react";

function renderComponent() {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <FooterContainer />
      </ThemeProvider>,
    ),
  };
}

describe("Footer container", () => {
  it("render the full <FooterContainer />", () => {
    const { getByText } = renderComponent();

    expect(getByText(/faq/i)).toBeTruthy();
    expect(getByText(/contact us/i)).toBeTruthy();
    expect(getByText(/help centre/i)).toBeTruthy();
    expect(getByText(/corporate information/i)).toBeTruthy();

    expect(getByText(/jobs/i)).toBeTruthy();
    expect(getByText(/terms of use/i)).toBeTruthy();
    expect(getByText(/account/i)).toBeTruthy();
    expect(getByText(/ways to watch/i)).toBeTruthy();

    expect(getByText(/media centre/i)).toBeTruthy();
    expect(getByText(/legal notices/i)).toBeTruthy();
    expect(getByText(/buy gift cards/i)).toBeTruthy();
    expect(getByText(/speed test/i)).toBeTruthy();
  });
});
