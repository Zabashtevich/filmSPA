import { AccountContainer } from "../../../containers";
import userProfile from "../../../reducers/user-profile";
import userData from "../../../reducers/user-data";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/theme";

export default function renderWithRedux(
  component,
  {
    initialState,
    store = createStore(
      combineReducers({ userProfile, userData }),
      initialState,
    ),
  } = {},
) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>{component}</Provider>
      </ThemeProvider>,
    ),
    store,
  };
}

describe("Account container", () => {
  it("render correctly while loading", () => {
    const { getByTestId, queryByTestId, queryByAltText } = renderWithRedux(
      <AccountContainer />,
      {
        initialState: { profile: null, profileLoading: true },
      },
    );
    expect(getByTestId("account-container")).toBeTruthy();
    expect(queryByTestId("account-column")).toBeNull();
    expect(queryByAltText("profile image")).toBeNull();
  });

  it("render user data correctly after loading", async () => {
    const afterLoadingState = {
      profile: {
        displayName: "Zabashtevich",
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/tmdb-api-63318.appspot.com/o/unnamed.jpg?alt=media&token=b405c3ee-ba51-4ffd-bc4f-f1cf91e544ae",
      },
      profileLoading: false,
    };

    const {
      getByText,
      getByTestId,
      getByRole,
      getByAltText,
      container,
    } = renderWithRedux(<AccountContainer />, {
      initialState: {
        userProfile: {
          ...afterLoadingState,
        },
      },
    });
    expect(getByTestId("account-container")).toBeTruthy();
    expect(getByText("Zabashtevich")).toBeTruthy();
    expect(getByRole("img")).toBeTruthy();
    expect(getByAltText("profile image").src).toContain(
      "https://firebasestorage.googleapis.com/v0/b/tmdb-api-63318.appspot.com/o/unnamed.jpg?alt=media&token=b405c3ee-ba51-4ffd-bc4f-f1cf91e544ae",
    );
    expect(getByText(/your profile activity/i)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
