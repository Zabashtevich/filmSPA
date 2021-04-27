import {
  act,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import theme from "../../theme/theme";
import { HeaderContainer } from "../../containers";
import userData from "../../reducers/user-data";
import userEvent from "@testing-library/user-event";

function renderComponentwithRedux({
  initialState,
  store = createStore(combineReducers({ userData }), initialState),
}) {
  return {
    ...render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <HeaderContainer />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>,
    ),
  };
}

describe("Header container", () => {
  const loadingState = {
    userData: {
      userDataLoading: true,
      userDataExist: false,
      profileExist: false,
      isReady: false,
      profile: null,
      lists: { userlists: null, favorites: null, votes: null },
    },
  };

  const mockedState = {
    userData: {
      profile: {
        displayName: "Zabashtevich",
        photoURL: null,
        email: "dummy@email.ru",
      },
      userDataLoading: false,
      userDataExist: true,
      profileExist: true,
      isReady: true,
      lists: { userlists: null, favorites: null, votes: null },
    },
  };
  it("doesnt render profile part when userProfile is loading or missing", () => {
    const { queryByTestId } = renderComponentwithRedux({
      initialState: loadingState,
    });

    expect(queryByTestId("header-profile")).toBeNull();
  });

  it("render header without profile", () => {
    const { getByText, getByTestId } = renderComponentwithRedux({
      initialState: loadingState,
    });

    expect(getByText(/tmdb/i)).toBeTruthy();
    expect(getByText(/trending/i)).toBeTruthy();
    expect(getByText(/search/i)).toBeTruthy();

    expect(getByTestId(/header-search/i)).toBeTruthy();
  });

  it("render header with profile", () => {
    const { getByTestId, getByAltText } = renderComponentwithRedux({
      initialState: mockedState,
    });

    expect(getByTestId(/header-profile/i)).toBeTruthy();
    expect(getByAltText(/user avatar/i)).toBeTruthy();
    expect(getByAltText(/user avatar/i)).toHaveAttribute(
      "src",
      "https://dummyimage.com/50x50/aaa/aaa",
    );
  });

  it("contains correctly working profile popup display logic", async () => {
    const {
      getByTestId,
      getByAltText,
      getByText,
      queryByText,
    } = renderComponentwithRedux({
      initialState: mockedState,
    });

    await act(async () => {
      userEvent.click(getByTestId(/header-profile/i));
    });

    expect(getByAltText(/user avatar/i)).toHaveStyle(
      "border: 1px solid rgba(255,255,255,0.6)",
    );

    expect(getByText(/zabashtevich/i)).toBeTruthy();
    expect(getByText(/dummy@email.ru/i)).toBeTruthy();
    expect(getByText(/to account/i)).toBeTruthy();
    expect(getByText(/to userlists/i)).toBeTruthy();
    expect(getByText(/logout/i)).toBeTruthy();

    await act(async () => {
      userEvent.click(getByTestId(/header-profile/i));
    });

    await waitFor(() => {
      expect(queryByText(/dummy@email.ru/i)).toBeNull();
      expect(queryByText(/to account/i)).toBeNull();
      expect(queryByText(/to userlists/i)).toBeNull();
      expect(queryByText(/logout/i)).toBeNull();
    });
  });

  it("switch search active state on search/close click", async () => {
    const { getByTestId, queryByTestId } = renderComponentwithRedux({
      initialState: mockedState,
    });

    expect(getByTestId("header-search")).toBeTruthy();

    await act(async () => {
      userEvent.click(getByTestId("header-search"));
    });

    await waitForElementToBeRemoved(getByTestId("header-search")).then(() => {
      expect(queryByTestId("header-search")).toBeNull();
      expect(getByTestId("header-close")).toBeTruthy();
    });

    await act(async () => {
      userEvent.click(getByTestId("header-close"));
    });

    await waitForElementToBeRemoved(getByTestId("header-close")).then(() => {
      expect(queryByTestId("header-close")).toBeNull();
      expect(getByTestId("header-search")).toBeTruthy();
    });
  });

  it("displays auth links when user profile loaded but not exist", () => {
    const { getByText, queryByAltText } = renderComponentwithRedux({
      initialState: {
        userData: {
          profile: null,
          userDataLoading: false,
          userDataExist: false,
          profileExist: false,
          isReady: false,
          lists: { userlists: null, favorites: null, votes: null },
        },
      },
    });

    expect(getByText(/login/i)).toBeTruthy();
    expect(getByText(/signup/i)).toBeTruthy();
    expect(getByText(/login/i)).toHaveAttribute(
      "href",
      "/authentication/login",
    );
    expect(getByText(/signup/i)).toHaveAttribute(
      "href",
      "/authentication/signup",
    );

    expect(queryByAltText(/user avatar/i)).toBeNull();
  });
});
