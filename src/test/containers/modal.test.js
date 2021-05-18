import "@testing-library/jest-dom";
import { act, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "./../../theme/theme";
import ModalContainer from "../../containers/modal";
import { useModalContext } from "../../context";
import userEvent from "@testing-library/user-event";

jest.mock("./../../context", () => ({ useModalContext: jest.fn() }));

function renderComponent() {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <ModalContainer />
      </ThemeProvider>,
    ),
  };
}

describe("Modal container", () => {
  const closeModal = jest.fn();
  const confirmModal = jest.fn();

  it("not rendered when modal context empty", () => {
    useModalContext.mockReturnValue([
      { visible: false, type: null, message: null, list: null },
      { closeModal, confirmModal },
    ]);

    const { queryByTestId } = renderComponent();

    expect(queryByTestId(/modal-container/i)).toBeNull();
  });

  it("rendered with error type", async () => {
    useModalContext.mockReturnValue([
      {
        visible: true,
        type: "error",
        message: "Something gone wrong",
        list: null,
      },
      { closeModal, confirmModal },
    ]);

    const { getByTestId, getByText } = renderComponent();

    expect(closeModal).not.toHaveBeenCalled();
    expect(getByTestId(/modal-container/i)).toBeTruthy();
    expect(getByText(/something gone wrong/i)).toBeTruthy();
    expect(getByText(/error !/i)).toBeTruthy();

    await act(async () => {
      userEvent.click(getByTestId(/modal-overlay/i));
    });

    expect(closeModal).toHaveBeenCalled();
  });

  it("rendered with error type", async () => {
    useModalContext.mockReturnValue([
      {
        visible: true,
        type: "confirm",
        message: "Confirm modal",
        list: null,
      },
      { closeModal, confirmModal },
    ]);

    const { getByTestId, getByText } = renderComponent();

    expect(confirmModal).not.toHaveBeenCalled();
    expect(getByTestId(/modal-container/i)).toBeTruthy();
    expect(getByText(/confirm modal/i)).toBeTruthy();
    expect(getByText(/confirm !/i)).toBeTruthy();

    await act(async () => {
      userEvent.click(getByText(/^confirm$/i));
    });

    expect(confirmModal).toHaveBeenCalled();
  });
});
