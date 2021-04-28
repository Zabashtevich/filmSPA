import "@testing-library/jest-dom";
import { combineReducers, createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import theme from "./../../theme/theme";
import userData from "./../../reducers/user-data/index";
import { CreditsContainer } from "../../containers";
import { useCreditsContext, usePaginContext } from "../../context";
import { range } from "../../utils";
import { useList } from "../../hooks";
import { BrowserRouter } from "react-router-dom";

jest.mock("./../../context", () => ({
  useCreditsContext: jest.fn(),
  usePaginContext: jest.fn(),
}));

jest.mock("./../../hooks", () => ({ useList: jest.fn() }));

function renderWithRedux({
  initialState,
  store = createStore(combineReducers({ userData }), initialState),
}) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <CreditsContainer />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>,
    ),
  };
}

describe("Credits container", () => {
  const doEstimate = jest.fn();
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
    useCreditsContext.mockReturnValue([
      {
        loading: false,
        items: range(1000, 25).map((item) => ({
          id: item,
          vote_average: 5.5,
          vote_count: 5000,
          release_date: "2019-10-10",
          title: `dummy title ${item}`,
          type: "movie",
        })),
      },
    ]);
    usePaginContext.mockReturnValue([{ active: 1 }, setPagin]);
    useList.mockReturnValue([doEstimate]);

    const {
      queryByTestId,
      getAllByTestId,
      getAllByText,
      getAllByRole,
      getByText,
    } = renderWithRedux({
      initialState: initialState,
    });

    expect(queryByTestId(/credits-skeleton/i)).toBeNull();

    expect(getAllByTestId(/credits-item/i)).toBeTruthy();
    expect(getAllByTestId(/credits-item/i)).toHaveLength(25);

    const links = getAllByRole("link");

    expect(links).toBeTruthy();
    expect(links).toHaveLength(25);

    range(1000, 25).map((item, index) => {
      expect(links[index]).toHaveAttribute("href", `/details/movie/${item}`);

      expect(getByText(`dummy title ${item}`)).toBeTruthy();
    });

    expect(getAllByText(/^2019$/i)).toBeTruthy();
    expect(getAllByText(/^2019$/i)).toHaveLength(25);

    expect(getAllByText(/^5.5$/i)).toBeTruthy();
    expect(getAllByText(/^5.5$/i)).toHaveLength(25);

    expect(getAllByText(/^5000$/i)).toBeTruthy();
    expect(getAllByText(/^5000$/i)).toHaveLength(25);
  });
});
