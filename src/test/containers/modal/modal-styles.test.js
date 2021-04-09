import ReactDOM from "react-dom";
import { act, screen } from "@testing-library/react";
import { ModalContainer } from "../../../containers";
import { ModalContext } from "../../../context/modal-context/context";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/theme";

function renderComponentInDom(value) {
  act(() => {
    ReactDOM.render(
      <ModalContext.Provider value={value}>
        <ThemeProvider theme={theme}>
          <ModalContainer />
        </ThemeProvider>
      </ModalContext.Provider>,
      document.getElementById("modal-root"),
    );
  });
}

describe("Modal container styles", () => {
  const closeModal = jest.fn();
  const showErrorModal = jest.fn();
  const showErrorList = jest.fn();
  const confirmModal = jest.fn();
  const showConfirmModal = jest.fn();

  const modalInterface = {
    closeModal,
    showErrorModal,
    showErrorList,
    confirmModal,
    showConfirmModal,
  };
  it("rendering correct with error type of modal", async () => {
    const errorState = {
      visible: true,
      message: "Something gone wrong",
      type: "error",
      list: null,
      callback: null,
    };
    renderComponentInDom([errorState, modalInterface]);
    const container = document.querySelector(
      'div[data-testid="modal-container"]',
    );
    const overlay = document.querySelector('div[data-testid="modal-overlay"]');
    const header = document.querySelector('div[data-testid="modal-header"]');
    const cancel = screen.getByText("CLOSE");

    expect(container).toBeInTheDocument();
    expect(overlay).toBeInTheDocument();
    expect(header).toBeInTheDocument();

    expect(header).toHaveStyle("background-color: #d45659");
    expect(cancel).toHaveStyle("background-color: #d45659");
  });

  it("rendering correct with confirm type of modal", async () => {
    const callback = jest.fn();
    const confirmState = {
      visible: true,
      message: "Something gone wrong",
      type: "confirm",
      list: null,
      callback,
    };
    renderComponentInDom([confirmState, modalInterface]);
    const container = document.querySelector(
      'div[data-testid="modal-container"]',
    );
    const overlay = document.querySelector('div[data-testid="modal-overlay"]');
    const header = document.querySelector('div[data-testid="modal-header"]');
    const confirm = screen.getByText("CONFIRM");

    expect(container).toBeInTheDocument();
    expect(overlay).toBeInTheDocument();
    expect(header).toBeInTheDocument();

    expect(header).toHaveStyle("background-color: rgb(248, 148, 6)");
    expect(confirm).toHaveStyle("background-color: white");
  });
});
