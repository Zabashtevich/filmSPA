import { render } from "@testing-library/react";
import { ModalContainer } from "../../../containers";
import { ModalContext } from "../../../context/modal-context/context";
import modalReducer from "../../../context/modal-context/reducer";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/theme";

function renderComponent(value) {
  return {
    ...render(
      <ModalContext.Provider value={value}>
        <ThemeProvider theme={theme}>
          <ModalContainer />
        </ThemeProvider>
      </ModalContext.Provider>,
    ),
  };
}

describe("Modal container", () => {
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

  const initialState = {
    visible: false,
    message: null,
    type: null,
    list: null,
    callback: null,
  };

  it("not rendering without reason", () => {
    const { queryByTestId } = renderComponent([initialState, modalInterface]);
    expect(queryByTestId("modal-container")).toBeFalsy();
  });

  it("reducer action SHOW_ERROR_MODAL correctly work", () => {
    expect(
      modalReducer(initialState, {
        type: "SHOW_ERROR_MODAL",
        payload: "Error message",
      }),
    ).toEqual({
      ...initialState,
      visible: true,
      message: "Error message",
      type: "error",
    });
  });

  it("rendering with error correct", async () => {
    const errorState = {
      visible: true,
      message: "Error message",
      type: "error",
      list: null,
      callback: null,
    };
    const { findByTestId, findByText } = renderComponent([
      errorState,
      modalInterface,
    ]);

    expect(await findByText("CLOSE")).toBeTruthy();
    expect(await findByText("ERROR !")).toBeTruthy();
    expect(await findByText("Error message")).toBeTruthy();
    expect(await findByTestId("modal-header")).toHaveAttribute("type");
  });

  it("reducer action SHOW_ERROR_LIST correctly work", () => {
    expect(
      modalReducer(initialState, {
        type: "SHOW_ERROR_LIST",
        payload: ["Something", "gone", "wrong"],
      }),
    ).toEqual({
      ...initialState,
      visible: true,
      message: null,
      type: "error",
      list: ["Something", "gone", "wrong"],
    });
  });

  it("rendering with error list correct", async () => {
    const errorState = {
      visible: true,
      message: null,
      type: "error",
      list: ["Something", "gone", "wrong"],
      callback: null,
    };
    const { findByTestId, findByText } = renderComponent([
      errorState,
      modalInterface,
    ]);

    expect(await findByTestId("modal-container")).toBeTruthy();
    expect(await findByText("Something")).toBeTruthy();
    expect(await findByText("gone")).toBeTruthy();
    expect(await findByText("wrong")).toBeTruthy();
    expect(await findByText("ERROR !")).toBeTruthy();
    expect(await findByText("CLOSE")).toBeTruthy();
  });

  it("reducer action SHOW_CONFIRM_MODAL correctly work", () => {
    const callback = jest.fn();

    expect(
      modalReducer(initialState, {
        type: "SHOW_CONFIRM_MODAL",
        payload: { message: "Confirm message", func: callback },
      }),
    ).toEqual({
      ...initialState,
      visible: true,
      message: "Confirm message",
      type: "confirm",
      list: null,
      callback,
    });
  });

  it("render confirm type modal correctly", async () => {
    const callback = jest.fn();

    const confirmState = {
      visible: true,
      message: "Confirm message",
      type: "confirm",
      list: null,
      callback,
    };
    const { findByTestId, findByText } = renderComponent([
      confirmState,
      modalInterface,
    ]);

    expect(await findByTestId("modal-container")).toBeTruthy();
    expect(await findByText("Confirm message")).toBeTruthy();
    expect(await findByText("CONFIRM !")).toBeTruthy();
    expect(await findByText("CANCEL")).toBeTruthy();
    expect(await findByText("CONFIRM")).toBeTruthy();
  });
});
