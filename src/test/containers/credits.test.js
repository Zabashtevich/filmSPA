import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { CreditsContainer } from "../../containers";
import { CreditsContext } from "../../context/credits-context/context";
import { PaginContext } from "../../context/pagin-context/context";
import userData from "./../../reducers/user-data/index";
import theme from "../../theme/theme";

jest.mock("./../../containers/pagin", () => () => <div />);

function renderWithRedux({
  creditsContext,
  paginContext,
  initialState,
  store = createStore(combineReducers({ userData }), initialState),
}) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <CreditsContext.Provider value={creditsContext}>
          <PaginContext.Provider value={paginContext}>
            <Provider store={store}>
              <CreditsContainer />
            </Provider>
          </PaginContext.Provider>
        </CreditsContext.Provider>
      </ThemeProvider>,
    ),
  };
}

describe("Credits container", () => {
  const setPaginProps = jest.fn();
  it("displays skeletons while loading", () => {
    const loadingState = { userDataLoading: true };

    const { getByTestId, getByText, debug } = renderWithRedux({
      creditsContext: [{ array: null, creditsLoading: true }],
      paginContext: [{ active: null }, setPaginProps],
      initialState: { userData: { loadingState } },
    });

    expect(getByTestId("credits-container")).toBeTruthy();
  });
});
