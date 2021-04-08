import userProfile from "../../reducers/user-profile";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { AccountContainer } from "../../containers";
import theme from "../../theme/theme";
import { combineReducers } from "redux";

function renderWithRedux({
  initialState,
  store = createStore(combineReducers({ userProfile }), initialState),
} = {}) {
  console.log(store);
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

jest.mock("../../containers/credits", () => () => <div>123</div>);
jest.mock("../../containers/filter", () => () => <div>345</div>);

describe("Account container", () => {
  it("mounting while profile loading", () => {
    const loadingState = { store: { profileLoading: false, profile: null } };
    const { debug } = renderWithRedux({
      initialState: { userProfile: { ...loadingState } },
    });
    debug();
  });
});
