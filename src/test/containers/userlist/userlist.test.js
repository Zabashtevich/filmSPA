import "@testing-library/jest-dom";
import { act, render } from "@testing-library/react";
import { combineReducers, createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import theme from "../../../theme/theme";
import userData from "../../../reducers/user-data";
import { UserlistContainer } from "../../../containers";
import { useModalContext, useProcessContext } from "../../../context";
import userEvent from "@testing-library/user-event";

jest.mock("./../../../context", () => ({
  useProcessContext: jest.fn(),
  useModalContext: jest.fn(),
  useCreditsContext: jest.fn(),
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
    userData: {
      userDataLoading: false,
      lists: { favorites: [], votes: [], userlists: [] },
    },
  };
  it("displays createList after loading", () => {
    useProcessContext.mockReturnValue([{ processing: false }]);
    useModalContext.mockReturnValue([, showErrorModal]);

    const { getByTestId, queryByText } = renderWithRedux({ initialState });

    expect(getByTestId(/create-userlist-inner/i)).toBeTruthy();
    expect(queryByText(/userlist-favorite/i)).toBeNull();
    expect(queryByText(/userlist-item/i)).toBeNull();
  });

  it("correctly switching menu active category", async () => {
    const initialState = {
      userData: {
        userDataLoading: false,
        lists: {
          favorites: [],
          votes: [],
          userlists: [{ id: 1, name: "dummy userlist" }],
        },
      },
    };

    const { getByTestId, getByText, findByTestId } = renderWithRedux({
      initialState,
    });

    expect(getByTestId(/create-userlist-inner/i)).toBeTruthy();

    await act(async () => {
      userEvent.click(getByText(/favorites/i));
    });

    expect(findByTestId(/userlist-favorite/i)).toBeTruthy();

    await act(async () => {
      userEvent.click(getByText(/dummy userlist/i));
    });

    expect(findByTestId(/userlist-item/i)).toBeTruthy();
  });
});
