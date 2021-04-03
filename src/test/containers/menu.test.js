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
import userEvent from "@testing-library/user-event";

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
  const setUserlistState = jest.fn();

  it("render correctly while loading", () => {
    const loadingState = { userDataLoading: true, userlists: null };
    const defaultContextState = [
      { type: null, userList: null },
      setUserlistState,
    ];

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

  it("render correctly after loading userData reducer", () => {
    const afterLoadingState = {
      userDataLoading: false,
      userlists: [
        { name: "first", id: 1 },
        { name: "second", id: 2 },
      ],
    };

    const defaultContextState = [
      { type: null, userList: null },
      setUserlistState,
    ];

    const { getByTestId, getByText } = renderWithRedux(<MenuContainer />, {
      contextState: defaultContextState,
      initialState: { userData: { ...afterLoadingState } },
    });

    expect(getByTestId("favorite").children).toHaveLength(1);
    expect(getByTestId("userlists").children).toHaveLength(2);
    expect(getByTestId("menu-container")).toHaveStyle({ left: `0` });
    expect(getByText("first")).toBeTruthy();
    expect(getByText("second")).toBeTruthy();
  });

  it("includes correct working logic", async () => {
    const afterLoadingState = {
      userDataLoading: false,
      userlists: [
        { name: "first", id: 1 },
        { name: "second", id: 2 },
      ],
    };

    const defaultContextState = [
      { type: null, userList: null },
      setUserlistState,
    ];

    const { getByTestId, getByText, findByTestId } = renderWithRedux(
      <MenuContainer />,
      {
        contextState: defaultContextState,
        initialState: { userData: { ...afterLoadingState } },
      },
    );

    userEvent.click(getByTestId("favorite"));
    expect(setUserlistState).toHaveBeenCalledTimes(1);
    expect(setUserlistState).toHaveBeenCalledWith({
      type: "favorite",
      userlist: null,
    });
    userEvent.click(getByText("first"));
    expect(setUserlistState).toHaveBeenCalledWith({
      type: "userlist",
      userlist: 1,
    });
    userEvent.click(getByText("second"));
    expect(setUserlistState).toHaveBeenCalledWith({
      type: "userlist",
      userlist: 2,
    });
    userEvent.click(getByText("Create new list"));
    expect(setUserlistState).toHaveBeenCalledWith({
      type: "createList",
      userlist: null,
    });
    userEvent.click(getByTestId("arrow"));
    expect(getByTestId("menu-container")).toHaveStyle({ left: `-380px` });
    userEvent.click(getByTestId("arrow"));
    expect(getByTestId("menu-container")).toHaveStyle({ left: `0` });
  });
});
