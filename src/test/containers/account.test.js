import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import { AccountContainer } from "../../containers";
import { useCreditsContext } from "../../context";
import theme from "./../../theme/theme";

jest.mock("./../../containers/credits", () => () => <div />);
jest.mock("./../../containers/filter", () => () => <div />);
jest.mock("./../../context", () => ({ useCreditsContext: jest.fn() }));

function renderComponent(props) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <AccountContainer {...props} />
      </ThemeProvider>,
    ),
  };
}

describe("Account container", () => {
  const setCreditsProps = jest.fn();

  it("is not rendering on loading", () => {
    useCreditsContext.mockReturnValue([, setCreditsProps]);

    const { getByTestId, queryByTestId } = renderComponent({
      loading: true,
      profile: null,
      votes: null,
    });

    expect(getByTestId(/account-container/i)).toBeTruthy();
    expect(queryByTestId(/account-column/i)).toBeNull();
  });

  it("renders poster and content columns", () => {
    useCreditsContext.mockReturnValue([, setCreditsProps]);

    const { getByTestId, getByRole, getByText } = renderComponent({
      loading: false,
      profile: { displayName: "dummy name", photoURL: "www.dummysrc.com" },
      votes: [],
    });

    expect(getByTestId(/account-column/i)).toBeTruthy();
    expect(getByRole("img")).toBeTruthy();
    expect(getByRole("img")).toHaveAttribute("src", "www.dummysrc.com");
    expect(getByText(/dummy name/i)).toBeTruthy();
    expect(getByText(/your profile activity/i)).toBeTruthy();
  });

  it("calls setCredits after loading", () => {
    useCreditsContext.mockReturnValue([, setCreditsProps]);

    const {} = renderComponent({
      loading: false,
      profile: { displayName: "dummy name", photoURL: "www.dummysrc.com" },
      votes: [],
    });

    expect(setCreditsProps).toHaveBeenCalled();
  });
});
