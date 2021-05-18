import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { useCreditsContext } from "./../../../context";
import UserlistFavorite from "../../../containers/userlist/items/userlist-favorite";
import theme from "../../../theme/theme";

jest.mock("./../../../context", () => ({ useCreditsContext: jest.fn() }));
jest.mock("./../../../containers/credits", () => () => (
  <div>mocked credits</div>
));

function renderComponent(props) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <UserlistFavorite {...props} />
      </ThemeProvider>,
    ),
  };
}

describe("Userlist favorite", () => {
  const setCredits = jest.fn();

  it("render placeholder when favorite list is empty", () => {
    useCreditsContext.mockReturnValue([, setCredits]);

    const { getByText } = renderComponent({
      loading: false,
      lists: { favorites: [] },
    });

    expect(getByText(/your favorite movies/i)).toBeTruthy();
    expect(getByText(/You did not add any movies to list/i)).toBeTruthy();
  });

  it("render placeholder when favorite list is empty", () => {
    useCreditsContext.mockReturnValue([, setCredits]);

    const { getByText } = renderComponent({
      loading: false,
      lists: { favorites: [{}] },
    });

    expect(getByText(/your favorite movies/i)).toBeTruthy();
    expect(getByText(/mocked credits/i)).toBeTruthy();
  });
});
