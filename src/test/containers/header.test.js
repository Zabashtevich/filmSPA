import { act, render, waitForElementToBeRemoved } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import theme from "./../../theme/theme";
import { HeaderContainer } from "../../containers";
import userProfile from "./../../reducers/user-profile";
import userEvent from "@testing-library/user-event";

function renderComponentwithRedux({
  initialState,
  store = createStore(combineReducers({ userProfile }), initialState),
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
  it("doesnt render profile part when userProfile is loading or missing", () => {
    const mockedStore = {
      userProfile: { profile: null, profileLoading: true },
    };
    const { queryByTestId } = renderComponentwithRedux({
      initialState: mockedStore,
    });

    expect(queryByTestId("header-profile")).toBeNull();
  });

  it("render header without profile", () => {
    const mockedStore = {
      userProfile: { profile: null, profileLoading: true },
    };
    const { getByText, getByTestId } = renderComponentwithRedux({
      initialState: mockedStore,
    });

    expect(getByText(/tmdb/i)).toBeTruthy();
    expect(getByText(/trending/i)).toBeTruthy();
    expect(getByText(/search/i)).toBeTruthy();

    expect(getByTestId(/header-search/i)).toBeTruthy();
  });

  it("render header with profile", () => {
    const mockedStore = {
      userProfile: {
        profile: { displayName: "Zabashtevich", photoURL: null },
        profileLoading: false,
      },
    };
    const { getByTestId, getByAltText } = renderComponentwithRedux({
      initialState: mockedStore,
    });

    expect(getByTestId(/header-profile/i)).toBeTruthy();
    expect(getByAltText(/user avatar/i)).toBeTruthy();
    expect(getByAltText(/user avatar/i)).toHaveAttribute(
      "src",
      "https://dummyimage.com/50x50/aaa/aaa",
    );
  });

  it("contains correctly working profile popup display logic", async () => {
    const mockedStore = {
      userProfile: {
        profile: {
          displayName: "Zabashtevich",
          email: "dummy@email.ru",
          photoURL: null,
        },
        profileLoading: false,
      },
    };
    const {
      getByTestId,
      getByAltText,
      getByText,
      queryByText,
      findByText,
    } = renderComponentwithRedux({
      initialState: mockedStore,
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

    waitForElementToBeRemoved(getByText(/zabashtevich/i)).then(() => {
      console.log("hi");
    });
  });

  it("switch search active state on search/close click", () => {
    const mockedStore = {
      userProfile: {
        profile: {
          displayName: "Zabashtevich",
          email: "dummy@email.ru",
          photoURL: null,
        },
        profileLoading: false,
      },
    };
    const {
      getByTestId,
      getByAltText,
      getByText,
      queryByText,
    } = renderComponentwithRedux({
      initialState: mockedStore,
    });
  });
});
