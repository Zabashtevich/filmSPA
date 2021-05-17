import { act, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import theme from "./../../theme/theme";
import { NavContainer } from "../../containers";
import userEvent from "@testing-library/user-event";

function renderComponent(props) {
  return {
    ...render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <NavContainer {...props} />
        </ThemeProvider>
      </BrowserRouter>,
    ),
  };
}

describe("Nav container", () => {
  const setBar = jest.fn();
  it("rendering without userlists items on loading", () => {
    const { getByTestId, getByText } = renderComponent({
      loading: true,
      lists: null,
      setBar,
      bar: { activeCategory: "createList", activeList: null },
    });

    expect(getByTestId(/nav-outer/i)).toBeTruthy();
    expect(getByText(/side menu/i)).toBeTruthy();
    expect(getByText(/create list/i)).toBeTruthy();
    expect(getByText(/your lists/i)).toBeTruthy();
    expect(getByText(/home/i)).toBeTruthy();
    expect(getByText(/account/i)).toBeTruthy();
  });

  it("renders userlists items after loading", () => {
    const { getByText } = renderComponent({
      loading: false,
      lists: {
        userlists: [
          { id: 1, name: "dummy userlist name 1" },
          { id: 2, name: "dummy userlist name 2" },
        ],
      },
      setBar,
      bar: { activeCategory: "createList", activeList: null },
    });

    expect(getByText(/dummy userlist name 1/i)).toBeTruthy();
    expect(getByText(/dummy userlist name 2/i)).toBeTruthy();
  });

  it("contains correctly working switch menu logic", async () => {
    const { getByText } = renderComponent({
      loading: false,
      lists: {
        userlists: [
          { id: 1, name: "dummy userlist name 1" },
          { id: 2, name: "dummy userlist name 2" },
        ],
      },
      setBar,
      bar: { activeCategory: "createList", activeList: null },
    });

    expect(setBar).not.toHaveBeenCalled();

    await act(async () => {
      userEvent.click(getByText(/favorites/i));
    });

    expect(setBar).toHaveBeenCalled();
    expect(setBar).toHaveBeenCalledTimes(1);
    expect(setBar).toHaveBeenCalledWith({
      activeCategory: "favorites",
      activeList: null,
    });

    await act(async () => {
      userEvent.click(getByText(/dummy userlist name 1/i));
    });

    expect(setBar).toHaveBeenCalled();
    expect(setBar).toHaveBeenCalledTimes(2);
    expect(setBar).toHaveBeenCalledWith({
      activeCategory: "userlists",
      activeList: 1,
    });

    await act(async () => {
      userEvent.click(getByText(/create list/i));
    });

    expect(setBar).toHaveBeenCalled();
    expect(setBar).toHaveBeenCalledTimes(3);
    expect(setBar).toHaveBeenCalledWith({
      activeCategory: "createList",
      activeList: null,
    });
  });
});
