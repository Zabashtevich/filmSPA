import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { ThemeProvider } from "styled-components";

import { CreditsContainer } from "../../containers";
import userProfile from "../../reducers/user-profile";
import userData from "../../reducers/user-data";
import { PaginContext } from "../../context/pagin-context/context";
import { CreditsContext } from "../../context/credits-context/context";
import theme from "../../theme/theme";

function renderComponent({
  paginValue,
  creditsValue,
  initialState,
  store = createStore(combineReducers({ userProfile, userData }), initialState),
} = {}) {
  return {
    ...render(
      <Router>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <PaginContext.Provider value={paginValue}>
              <CreditsContext.Provider value={creditsValue}>
                <CreditsContainer />
              </CreditsContext.Provider>
            </PaginContext.Provider>
          </ThemeProvider>
        </Provider>
      </Router>,
    ),
  };
}

jest.mock("../../containers/pagin", () => () => <div />);

describe("Credits container", () => {
  const setPagination = jest.fn();
  it("renders skeletons on loading", () => {
    const initialStore = {
      userData: { profileLoading: true, profile: null },
      userProfile: { userDataLoading: true, votes: null },
    };
    const { getByText } = renderComponent({
      paginValue: [{ active: null }, setPagination],
      creditsValue: [{ creditsLoading: true, array: null }],
      initialState: initialStore,
    });
  });
});
