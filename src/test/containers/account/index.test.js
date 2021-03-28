import { AccountContainer } from "../../../containers";
import userProfile from "../../../reducers/user-profile";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { createStore } from "redux";

export default function renderWithRedux(
  component,
  {
    initialState,
    store = createStore(combineReducers({ userProfile }, initialState)),
  } = {},
) {
  return { ...render(<Provider store={store}>{component}</Provider>), store };
}

describe("Account container", () => {
  it("render correctly while loading", () => {
    const { getByTestId, queryByTestId, queryByAltText } = renderWithRedux(
      <AccountContainer />,
      userProfile,
      {
        initialState: { profile: null, profileLoading: true },
      },
    );
    expect(getByTestId("account-container")).toBeTruthy();
    expect(queryByTestId("account-column")).toBeNull();
    expect(queryByAltText("profile image")).toBeNull();
  });
});
