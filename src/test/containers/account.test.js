import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { combineReducers } from "redux";
import "@testing-library/jest-dom";

import { AccountContainer } from "../../containers";
import userData from "../../reducers/user-data";
import theme from "../../theme/theme";

function renderWithRedux({
  initialState,
  store = createStore(combineReducers({ userData }), initialState),
} = {}) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AccountContainer />
        </Provider>
      </ThemeProvider>,
    ),
    store,
  };
}

// jest.mock("../../containers/credits", () => () => <div />);
jest.mock("../../containers/filter", () => () => <div />);

describe("Account container", () => {
  it("correctly mounting while profile loading", () => {
    const loadingState = {
      userDataLoading: true,
      userDataExist: false,
      loggedIn: false,
      profile: null,
      lists: { userlists: null, favorites: null, votes: null },
    };
    const { getByTestId } = renderWithRedux({
      initialState: { userData: { ...loadingState } },
    });

    expect(getByTestId("account-container")).toBeTruthy();
  });

  it("render content after sucess loading", () => {
    const loadingState = {
      userDataLoading: false,
      userDataExist: true,
      loggedIn: true,
      profile: { displayName: "dummy name", photoURL: "/dummysrc" },
      lists: { userlists: null, favorites: null, votes: null },
    };
    const { getByText, getByRole } = renderWithRedux({
      initialState: { userData: { ...loadingState } },
    });

    expect(getByText(/your profile activity/i)).toBeTruthy();
    expect(getByRole("img")).toHaveAttribute("src", "/dummysrc");
    expect(getByText("dummy name")).toBeTruthy();
  });
});
