import "@testing-library/jest-dom";
import { act, fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "./../../../theme/theme";
import UserlistItem from "../../../containers/userlist/items/userlist-item";
import { useCreditsContext, useModalContext } from "../../../context";
import { useList } from "../../../hooks";
import userEvent from "@testing-library/user-event";

jest.mock("./../../../containers/credits", () => () => (
  <div>mocked credits</div>
));
jest.mock("./../../../hooks", () => ({ useList: jest.fn() }));
jest.mock("./../../../context", () => ({
  useModalContext: jest.fn(),
  useCreditsContext: jest.fn(),
}));

function renderComponent(props) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <UserlistItem {...props} />
      </ThemeProvider>,
    ),
  };
}

describe("Userlist item", () => {
  const setList = jest.fn();
  const showErrorModal = jest.fn();
  const showConfirmModal = jest.fn();
  const setCredits = jest.fn();
  const setBar = jest.fn();

  const props = {
    lists: {
      userlists: [
        {
          name: "dummy list name",
          id: 1,
          content: [{ id: 2, title: "dummy movie name" }],
        },
      ],
    },
    activeList: {
      name: "dummy list name",
      id: 1,
      content: [{ name: "dummy movie name", id: 2 }],
    },
    setBar,
  };

  it("render content", () => {
    useCreditsContext.mockReturnValue([, setCredits]);
    useModalContext.mockReturnValue([, { showErrorModal, showConfirmModal }]);
    useList.mockReturnValue([setList]);

    const { getByText, getByRole, getByTestId, queryByText } =
      renderComponent(props);

    expect(getByText(/your list dummy list name/i)).toBeTruthy();
    expect(getByRole("textbox")).toHaveValue("dummy list name");
    expect(getByTestId(/delete button/i)).toBeTruthy();
    expect(getByTestId(/edit button/i)).toBeTruthy();

    expect(useList).toHaveBeenCalledWith("userlists");
    expect(setCredits).toHaveBeenCalled();
    expect(setCredits).toHaveBeenCalledWith({
      loading: false,
      items: [{ name: "dummy movie name", id: 2 }],
    });
  });

  it("contains correctly working edit list logic", async () => {
    useCreditsContext.mockReturnValue([, setCredits]);
    useModalContext.mockReturnValue([, { showErrorModal, showConfirmModal }]);
    useList.mockReturnValue([setList]);

    const { getByRole, getByTestId, queryByText, getByText } =
      renderComponent(props);

    expect(showConfirmModal).not.toHaveBeenCalled();
    expect(showErrorModal).not.toHaveBeenCalled();
    expect(setList).not.toHaveBeenCalled();

    expect(queryByText(/confirm/i)).toBeNull();

    await act(async () => {
      userEvent.click(getByTestId(/edit button/i));
    });

    expect(getByText(/ok/i)).toBeTruthy();
    expect(getByText(/abort/i)).toBeTruthy();
    expect(getByRole("textbox")).toHaveValue("dummy list name");

    await act(async () => {
      fireEvent.change(getByRole("textbox"), {
        target: { value: "error" },
      });

      userEvent.click(getByText(/ok/i));
    });

    expect(getByRole("textbox")).toHaveValue("error");
    expect(showErrorModal).toHaveBeenCalled();
    expect(showErrorModal).toHaveBeenCalledTimes(1);

    await act(async () => {
      fireEvent.change(getByRole("textbox"), {
        target: { value: "new list name" },
      });

      userEvent.click(getByText(/ok/i));
    });

    expect(getByRole("textbox")).toHaveValue("new list name");
    expect(showErrorModal).toHaveBeenCalledTimes(1);
    expect(setList).toHaveBeenCalled();

    expect(queryByText(/confirm/i)).toBeNull();
  });

  it("contains correctly working delete button", async () => {
    useCreditsContext.mockReturnValue([, setCredits]);
    useModalContext.mockReturnValue([, { showErrorModal, showConfirmModal }]);
    useList.mockReturnValue([setList]);

    const { getByTestId } = renderComponent(props);

    expect(showConfirmModal).not.toHaveBeenCalled();
    expect(getByTestId(/delete button/i)).toBeTruthy();

    await act(async () => {
      userEvent.click(getByTestId(/delete button/i));
    });

    expect(showConfirmModal).toHaveBeenCalled();
  });
});
