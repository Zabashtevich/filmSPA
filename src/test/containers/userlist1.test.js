import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { combineReducers, createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import theme from "./../../theme/theme";
import userData from "../../reducers/user-data";
import { UserlistContainer } from "../../containers";
import { useModalContext, useProcessContext } from "../../context";

jest.mock("./../../context", () => ({
  useProcessContext: jest.fn(),
  useModalContext: jest.fn(),
}));

function renderWithRedux({
  initialState,
  store = createStore(combineReducers({ userData }), initialState),
}) {
  return {
    ...render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <UserlistContainer />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>,
    ),
  };
}

describe("Userlist container", () => {
  const showErrorModal = jest.fn();

  const initialState = {
    userDataLoading: false,
    lists: { favorites: [], votes: [], userlists: [] },
  };
  it("displays createList after loading", () => {
    useProcessContext.mockReturnValue([{ processing: false }]);
    useModalContext.mockReturnValue([, showErrorModal]);

    const { getByTestId } = renderWithRedux({ initialState });

    expect(getByTestId(/create-userlist-inner/i));
  });
});
