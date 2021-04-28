import "@testing-library/jest-dom";
import { combineReducers, createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { act, render, waitForElementToBeRemoved } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import theme from "./../../theme/theme";
import userData from "./../../reducers/user-data/index";
import { CreditsContainer } from "../../containers";
import { useCreditsContext, usePaginContext } from "../../context";
import { checkReleaseStatus, createVote, range } from "../../utils";
import { useList } from "../../hooks";
import * as utils from "./../../utils";

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

  it("renders item rated by user", () => {
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

    const { getByText } = renderWithRedux({
      initialState: initialState,
    });
  });

  it("renders stars rating panel with correctly working popup and estimate logic", async () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => new Date(0));
    useCreditsContext.mockReturnValue([
      {
        loading: false,
        items: range(1000, 1).map((item) => ({
          id: item,
          vote_average: 5.5,
          vote_count: 5000,
          release_date: "1950-10-10",
          title: `dummy title ${item}`,
          type: "movie",
        })),
      },
    ]);
    usePaginContext.mockReturnValue([{ active: 1 }, setPagin]);
    useList.mockReturnValue([doEstimate]);

    const { getByTestId, queryByTestId, getAllByTestId } = renderWithRedux({
      initialState: initialState,
    });

    expect(doEstimate).not.toHaveBeenCalled();

    expect(getByTestId(/rating/i)).toBeTruthy();
    expect(queryByTestId(/rating-container/i)).toBeNull();

    await act(async () => {
      userEvent.click(getByTestId(/rating/i));
    });

    expect(getByTestId(/rating-container/i)).toBeTruthy();
    expect(getAllByTestId(/rating-star/i)).toHaveLength(10);

    await act(async () => {
      userEvent.click(getAllByTestId(/rating-star/i)[5]);
    });

    await waitForElementToBeRemoved(getByTestId(/rating-container/i)).then(
      () => {
        expect(queryByTestId(/rating-container/i)).toBeNull();
      },
    );

    expect(doEstimate).toHaveBeenCalled();
    expect(doEstimate).toHaveBeenCalledWith({
      votes: [
        createVote(4, {
          id: 1000,
          vote_average: 5.5,
          vote_count: 5000,
          release_date: "1950-10-10",
          title: `dummy title ${1000}`,
          type: "movie",
        }),
      ],
    });
  });

  it("calls setPagin after loading", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => new Date(0));

    useCreditsContext.mockReturnValue([
      {
        loading: false,
        items: range(1000, 1).map((item) => ({
          id: item,
          vote_average: 5.5,
          vote_count: 5000,
          release_date: "1950-10-10",
          title: `dummy title ${item}`,
          type: "movie",
        })),
      },
    ]);
    usePaginContext.mockReturnValue([{ active: 1 }, setPagin]);
    useList.mockReturnValue([doEstimate]);

    const {} = renderWithRedux({
      initialState: initialState,
    });

    expect(setPagin).toHaveBeenCalled();
  });
});
