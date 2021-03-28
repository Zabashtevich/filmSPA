import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { createStore } from "redux";
import userProfileReducer from "../../reducers/user-profile";

export default function renderWithRedux(
  component,
  {
    initialState,
    store = createStore(
      combineReducers({ userProfile: userProfileReducer }, initialState),
    ),
  } = {},
) {
  return { ...render(<Provider store={store}>{component}</Provider>), store };
}
