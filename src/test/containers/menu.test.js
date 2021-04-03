import userData from "../../reducers/user-data";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";
import { MenuContainer } from "../../containers";
import { UserlistContext } from "../../context/userlist-context/context";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

function renderWithRedux(
  component,
  {
    contextState,
    initialState,
    store = createStore(combineReducers({ userData }), initialState),
  } = {},
) {
  return {
    ...render(
      <BrowserRouter>
        <UserlistContext.Provider value={contextState}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>{component}</Provider>
          </ThemeProvider>
        </UserlistContext.Provider>
      </BrowserRouter>,
    ),
    store,
  };
}

describe("Menu container", () => {
  it("render correctly while loading", () => {
    const loadingState = { userDataLoading: true, userlists: null };
    const defaultContextState = [{ type: null, userList: null }, console.log];
    const { getByTestId, getByText } = renderWithRedux(<MenuContainer />, {
      contextState: defaultContextState,
      initialState: { userData: { ...loadingState } },
    });
    expect(getByText("MENU")).toBeTruthy();
    expect(getByTestId("favorite").children).toHaveLength(0);
    expect(getByTestId("userlists").children).toHaveLength(0);
    expect(getByTestId("menu-container")).toHaveStyle({ left: `-380px` });
    expect(getByText("Create new list")).toBeTruthy();
  });
});
