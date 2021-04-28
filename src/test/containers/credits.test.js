import "@testing-library/jest-dom";
import { combineReducers, createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import theme from "./../../theme/theme";
import userData from "./../../reducers/user-data/index";
import { CreditsContainer } from "../../containers";
import { useCreditsContext, usePaginContext } from "../../context";

jest.mock("./../../context", () => ({
  useCreditsContext: jest.fn(),
  usePaginContext: jest.fn(),
}));

function renderWithRedux({
  initialState,
  store = createStore(combineReducers({ userData }), initialState),
}) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CreditsContainer />
        </Provider>
      </ThemeProvider>,
    ),
  };
}

describe("Credits container", () => {
  const setPagin = jest.fn();
  const loadingState = {
    userData: {
      userDataLoading: true,
      userDataExist: false,
      profile: null,
      lists: { userlists: null, favorites: null, votes: null },
    },
  };
  const initialState = {
    userData: {
      userDataLoading: false,
      userDataExist: true,
      loggedIn: true,
      profile: {},
      lists: { userlists: [], favorites: [], votes: [{ id: 1000, value: 10 }] },
    },
  };

  it("displays skeletons on loading", () => {
    useCreditsContext.mockReturnValue([{ loading: true, items: null }]);
    usePaginContext.mockReturnValue([{ active: 1 }, setPagin]);

    const { getAllByTestId, getByTestId } = renderWithRedux({
      initialState: loadingState,
    });

    expect(getByTestId(/credits-container/i)).toBeTruthy();

    expect(getAllByTestId(/credits-skeleton/i)).toBeTruthy();
    expect(getAllByTestId(/credits-skeleton/i)).toHaveLength(25);
  });

  it("is not calling setPagin while loading", () => {
    useCreditsContext.mockReturnValue([{ loading: true, items: null }]);
    usePaginContext.mockReturnValue([{ active: 1 }, setPagin]);

    const {} = renderWithRedux({
      initialState: loadingState,
    });

    expect(setPagin).not.toHaveBeenCalled();
  });

  it("renders items after loading", () => {
    useCreditsContext.mockReturnValue([{ loading: false, items: null }]);
    usePaginContext.mockReturnValue([{ active: 1 }, setPagin]);

    const {} = renderWithRedux({
      initialState: initialState,
    });
  });
});
