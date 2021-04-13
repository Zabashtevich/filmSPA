import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { act, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { ThemeProvider } from "styled-components";

import { CreditsContainer } from "../../containers";
import userProfile from "../../reducers/user-profile";
import userData from "../../reducers/user-data";
import {
  useCreditsContext,
  usePaginContext,
  useProcessContext,
} from "../../context";
import theme from "../../theme/theme";
import { range } from "../../utils";
import { useEstimate } from "./../../hooks";
import userEvent from "@testing-library/user-event";

function renderComponent({
  initialState,
  store = createStore(combineReducers({ userProfile, userData }), initialState),
} = {}) {
  return {
    ...render(
      <Router>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CreditsContainer />
          </ThemeProvider>
        </Provider>
      </Router>,
    ),
  };
}

jest.mock("../../containers/pagin", () => () => <div />);
jest.mock("./../../hooks", () => ({
  __esModule: true,
  useEstimate: jest.fn(),
}));
jest.mock("./../../context", () => ({
  __esModule: true,
  useProcessContext: jest.fn(),
  usePaginContext: jest.fn(),
  useCreditsContext: jest.fn(),
}));

describe("Credits container", () => {
  const setPagination = jest.fn();
  const setEstimate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders skeletons on loading", () => {
    useCreditsContext.mockReturnValue([{ creditsLoading: true, array: null }]);
    usePaginContext.mockReturnValue([{ active: null }, setPagination]);

    const initialStore = {
      userData: { profileLoading: true, profile: null },
      userProfile: { userDataLoading: true, votes: null },
    };
    const { getAllByTestId, getByTestId } = renderComponent({
      initialState: initialStore,
    });

    expect(getByTestId("credits-container")).toBeTruthy();
    expect(getAllByTestId("credits-skeleton")).toHaveLength(25);
  });

  it("displays credits item after userProfile and userData loadings", () => {
    useEstimate.mockReturnValue([setEstimate]);
    useCreditsContext.mockReturnValue([
      {
        creditsLoading: false,
        array: range(1, 25).map((item) => ({
          id: item,
          type: "tv",
          title: `dummy title ${item}`,
          release_date: "2020-10-3",
          vote_average: 5.2,
          vote_count: 1000,
        })),
      },
    ]);
    usePaginContext.mockReturnValue([{ active: 1 }, setPagination]);
    useProcessContext.mockReturnValue([{ processing: false }]);
    const initialStore = {
      userData: { userDataLoading: false, votes: [] },
      userProfile: { profileLoading: false, profile: {} },
    };

    const { getAllByText, getByText } = renderComponent({
      initialState: initialStore,
    });

    expect(getAllByText("2020")).toHaveLength(25);
    expect(getAllByText("5.2")).toHaveLength(25);
    expect(getAllByText("1000")).toHaveLength(25);
    range(1, 25).map((item) => {
      expect(getByText(`dummy title ${item}`)).toBeTruthy();
    });
  });

  it("calls setPagination context after loading", () => {
    useEstimate.mockReturnValue([setEstimate]);
    useCreditsContext.mockReturnValue([
      {
        creditsLoading: false,
        array: range(1, 25).map((item) => ({
          id: item,
          type: "tv",
          title: `dummy title ${item}`,
          release_date: "2020-10-3",
          vote_average: 5.2,
          vote_count: 1000,
        })),
      },
    ]);
    usePaginContext.mockReturnValue([{ active: 1 }, setPagination]);
    useProcessContext.mockReturnValue([{ processing: false }]);

    const initialStore = {
      userData: { userDataLoading: false, votes: [] },
      userProfile: { profileLoading: false, profile: {} },
    };

    const {} = renderComponent({
      initialState: initialStore,
    });

    expect(setPagination).toHaveBeenCalled();
  });

  it("contains correctly working estimate logic", async () => {
    useEstimate.mockReturnValue([setEstimate]);
    useCreditsContext.mockReturnValue([
      {
        creditsLoading: false,
        array: [
          {
            id: 1,
            media_type: "tv",
            title: `dummy title 1`,
            release_date: "2020-10-3",
            vote_average: 5.2,
            vote_count: 1000,
            popularity: 0.5,
          },
        ],
      },
    ]);
    usePaginContext.mockReturnValue([{ active: 1 }, setPagination]);
    useProcessContext.mockReturnValue([{ processing: false }]);

    const initialStore = {
      userData: { userDataLoading: false, votes: [] },
      userProfile: { profileLoading: false, profile: {} },
    };

    const { getByTestId, queryByTestId, getAllByTestId } = renderComponent({
      initialState: initialStore,
    });

    expect(queryByTestId("rating-container")).toBeNull();
    await act(async () => {
      userEvent.click(getByTestId("rating"));
    });
    expect(getByTestId("rating-container")).toBeTruthy();

    expect(getAllByTestId("rating-star")).toHaveLength(10);
    await act(async () => {
      userEvent.click(getAllByTestId("rating-star")[0]);
    });
    expect(setEstimate).toHaveBeenCalled();
    expect(setEstimate).toHaveBeenCalledTimes(1);

    await act(async () => {
      userEvent.click(getAllByTestId("rating-star")[5]);
    });
    expect(setEstimate).toHaveBeenCalled();
    expect(setEstimate).toHaveBeenCalledTimes(2);
  });

  it("blocks the ability to rate the film if movie is not released", () => {
    useEstimate.mockReturnValue([setEstimate]);
    useCreditsContext.mockReturnValue([
      {
        creditsLoading: false,
        array: [
          {
            id: 1,
            media_type: "tv",
            title: `dummy title 1`,
            release_date: "2030-10-3",
            vote_average: 5.2,
            vote_count: 1000,
            popularity: 0.5,
          },
        ],
      },
    ]);
    usePaginContext.mockReturnValue([{ active: 1 }, setPagination]);
    useProcessContext.mockReturnValue([{ processing: false }]);

    const initialStore = {
      userData: { userDataLoading: false, votes: [] },
      userProfile: { profileLoading: false, profile: {} },
    };

    const { queryByTestId } = renderComponent({
      initialState: initialStore,
    });

    expect(queryByTestId("rating")).toBeNull();
  });
});
