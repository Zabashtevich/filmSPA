import userProfile from "../../reducers/user-profile";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { AccountContainer } from "../../containers";
import theme from "../../theme/theme";
import { combineReducers } from "redux";
import "@testing-library/jest-dom";

function renderWithRedux({
  initialState,
  store = createStore(combineReducers({ userProfile }), initialState),
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

jest.mock("../../containers/credits", () => () => <div />);
jest.mock("../../containers/filter", () => () => <div />);

describe("Account container", () => {
  it("correctly mounting while profile loading", () => {
    const loadingState = { profileLoading: true, profile: null };
    const { getByTestId } = renderWithRedux({
      initialState: { userProfile: { ...loadingState } },
    });

    expect(getByTestId("account-container")).toBeTruthy();
  });

  it("render content after sucess loading", () => {
    const loadingState = {
      profileLoading: false,
      profile: { photoURL: "./dummy/url.mock", displayName: "dummyName" },
    };
    const { getByText, getByRole } = renderWithRedux({
      initialState: { userProfile: { ...loadingState } },
    });

    expect(getByText(/your profile activity/i)).toBeTruthy();
    expect(getByRole("img")).toHaveAttribute("src", "./dummy/url.mock");
    expect(getByText("dummyName")).toBeTruthy();
  });
});
