import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from "react-router";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { Provider } from "react-redux";

import { ActorContainer } from "../../containers";
import theme from "./../../theme/theme";
import { useFetch } from "../../hooks";
import { useCreditsContext } from "../../context";
import userData from "./../../reducers/user-data";

jest.mock("./../../hooks", () => ({ useFetch: jest.fn() }));
jest.mock("./../../context", () => ({ useCreditsContext: jest.fn() }));
jest.mock("./../../containers/credits", () => () => <div />);

function renderWithRedux({
  initialState,
  store = createStore(combineReducers({ userData }), initialState),
}) {
  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ pathname: "/actor/123" }]}>
          <ThemeProvider theme={theme}>
            <Route component={ActorContainer} path="/actor/:slug" />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>,
    ),
  };
}

describe("Actor container", () => {
  const setCredits = jest.fn();
  const mockedData = {
    name: "dummy name",
    biography: "dummy biography",
    profile_path: "/dummyposter",
    combined_credits: { cast: [{}, {}, {}] },
    gender: 0,
    birthday: "2100-100-100",
    place_of_birth: "dummy place",
    known_for_department: "dummy department",
  };
  const loadingState = {
    userDataLoading: true,
    userDataExist: false,
    loggedIn: false,
    profile: null,
    lists: { userlists: null, favorites: null, votes: null },
  };
  const initialState = {
    userDataLoading: false,
    userDataExist: true,
    loggedIn: true,
    profile: {},
    lists: { userlists: [], favorites: [], votes: [] },
  };

  it("displays skeleton on loading", () => {
    useFetch.mockReturnValue([null, true]);
    useCreditsContext.mockReturnValue([, setCredits]);

    const { getByTestId } = renderWithRedux({
      initialState: { userData: loadingState },
    });

    expect(getByTestId(/actor-column-skeleton/i)).toBeTruthy();
    expect(getByTestId(/actor-content-skeleton/i)).toBeTruthy();
  });

  it("calls useFetch with correct params", () => {
    useFetch.mockReturnValue([null, true]);
    useCreditsContext.mockReturnValue([, setCredits]);

    const {} = renderWithRedux({ initialState: { userData: loadingState } });

    expect(useFetch).toHaveBeenCalled();
    expect(useFetch).toHaveBeenCalledWith({
      type: "person",
      target: "123",
      querries: true,
    });
  });

  it("renders full content after useFetch loading", () => {
    useFetch.mockReturnValue([mockedData, false]);
    useCreditsContext.mockReturnValue([, setCredits]);

    const { getByText, getByTestId } = renderWithRedux({
      initialState: { userData: loadingState },
    });

    expect(getByText(/dummy name/i)).toBeTruthy();
    expect(getByText(/overview/i)).toBeTruthy();
    expect(getByText(/dummy biography/i)).toBeTruthy();

    expect(getByText(/^3$/i)).toBeTruthy();
    expect(getByText(/male/i)).toBeTruthy();
    expect(getByText(/^2100$/i)).toBeTruthy();
    expect(getByText(/dummy place/i)).toBeTruthy();
    expect(getByText(/dummy department/i)).toBeTruthy();
    expect(getByTestId(/actor-poster/i)).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300/dummyposter",
    );
  });

  it("calls setCredits after getting data and loading profile", () => {
    useFetch.mockReturnValue([mockedData, false]);
    useCreditsContext.mockReturnValue([, setCredits]);

    const {} = renderWithRedux({ initialState: { userData: initialState } });

    expect(setCredits).toHaveBeenCalled();
    expect(setCredits).toHaveBeenCalledTimes(1);
    expect(setCredits).toHaveBeenCalledWith({
      loading: false,
      items: [],
    });
  });
});
