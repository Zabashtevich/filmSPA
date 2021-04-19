import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";

import theme from "./../../theme/theme";
import { DetailsPosterContainer } from "../../containers";
import { MemoryRouter, Route } from "react-router-dom";

function renderComponent(mockedProps) {
  return {
    ...render(
      <MemoryRouter initialEntries={[{ pathname: "/details/movie/123" }]}>
        <ThemeProvider theme={theme}>
          <Route
            path="/details/:direction/:slug"
            component={() => <DetailsPosterContainer {...mockedProps} />}
          />
        </ThemeProvider>
      </MemoryRouter>,
    ),
  };
}

describe("Details poster container", () => {
  it("displays skeleton while loading", () => {
    const { debug } = renderComponent({ data: "haha", loading: true });
    debug();
  });
});
