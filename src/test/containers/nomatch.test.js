import { render } from "@testing-library/react";
import { MemoryRouter, Switch, Route } from "react-router";
import { ThemeProvider } from "styled-components";

import { NomatchContainer } from "./../../containers";
import theme from "./../../theme/theme";

function renderComponent(path) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[{ pathname: path }]}>
          <Switch>
            <Route path="/" exact>
              <div>dummy page</div>
            </Route>

            <Route path="*">
              <NomatchContainer />
            </Route>
          </Switch>
        </MemoryRouter>
      </ThemeProvider>,
    ),
  };
}

describe("Nomatch container", () => {
  it("not rendered when path processed by switcher", () => {
    const { getByText } = renderComponent("/");

    expect(getByText(/dummy page/i)).toBeTruthy();
  });

  it("rendered on missing route", () => {
    const { getByText } = renderComponent("/dummypath");

    expect(getByText(/404 page not found/i)).toBeTruthy();
    expect(getByText(/return to main page/i)).toBeTruthy();
  });
});
