import { render } from "@testing-library/react";
import { ModalContainer } from "../../containers";
import { ModalContext } from "../../context/modal-context/context";
import modalReducer from "../../context/modal-context/reducer";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import theme from "./../../theme/theme";
import "jest-styled-components";

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
    const { findByTestId, findByText, findByRole } = renderComponent([
      errorState,
      modalInterface,
    ]);

    expect(await findByText("CLOSE")).toBeTruthy();
    expect(await findByText("ERROR !")).toBeTruthy();
    expect(await findByText("Error message")).toBeTruthy();
    expect(await findByTestId("modal-header")).toHaveAttribute("type");
    expect(await findByTestId("modal-header")).toHaveStyle(
      "background-color: #d45659",
    );
  });

  //   it("rendering with error list correct", () => {
  //     const errorState = {
  //       visible: true,
  //       message: "Error message",
  //       type: "error",
  //       list: null,
  //       callback: null,
  //     };
  //     const { findByTestId, findByText, findByRole } = render(
  //       <ModalContext.Provider value={[errorState, modalInterface]}>
  //         <ModalContainer />
  //       </ModalContext.Provider>,
  //     );

  //     expect(findByTestId("modal-container")).toBeTruthy();
  //     expect(findByText("Error message")).toBeTruthy();
  //     expect(findByText("ERROR !")).toBeTruthy();
  //     expect(findByRole("button")).toBeTruthy();
  //     expect(findByText("CLOSE")).toBeTruthy();
  //   });
});
