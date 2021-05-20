import { MemoryRouter, Route } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import PrivateRoute from "./../../helpers/private-routes";
import userData from "./../../reducers/user-data";

function renderWithRedux({
  initialState,
  store = createStore(combineReducers({ userData }), initialState),
}) {
  return {
    ...render(
      <MemoryRouter initialEntries={[{ pathname: "/dummy" }]}>
        <Provider store={store}>
          <Route path="/" component={() => <div>home page</div>} exact />
          <PrivateRoute path="/dummy" exact>
            <div>dummy page</div>
          </PrivateRoute>
        </Provider>
      </MemoryRouter>,
    ),
  };
}

describe("Private route", () => {
  it("is not rederecting user while reducer is loading", () => {
    const { getByText } = renderWithRedux({
      initialState: { userData: { loggedIn: false, userDataLoading: true } },
    });

    expect(getByText(/dummy page/i)).toBeTruthy();
  });

  it("rederecting user after getting empty user profile", () => {
    const { queryByText, getByText } = renderWithRedux({
      initialState: { userData: { loggedIn: false, userDataLoading: false } },
    });

    expect(queryByText(/dummy page/i)).toBeNull();
    expect(getByText(/home page/i)).toBeTruthy();
  });

  it("is not rederecting user after getting user profile", () => {
    const { queryByText, getByText } = renderWithRedux({
      initialState: { userData: { loggedIn: true, userDataLoading: false } },
    });

    expect(getByText(/dummy page/i)).toBeTruthy();
    expect(queryByText(/home page/i)).toBeNull();
  });
});
