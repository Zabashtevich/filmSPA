import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router";
import { ThemeProvider } from "styled-components";
import theme from "./../../../theme/theme";
import { AuthContainer } from "./../../../containers";
import { ModalContext } from "../../../context/modal-context/context";
import { useLogin } from "../../../hooks";
import userEvent from "@testing-library/user-event";

function renderComponent(initialPath) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <ModalContext.Provider value={[, { showModal: () => {} }]}>
          <MemoryRouter initialEntries={[{ pathname: initialPath }]}>
            <Route component={AuthContainer} path="/authentication/:slug" />
          </MemoryRouter>
        </ModalContext.Provider>
      </ThemeProvider>,
    ),
  };
}

describe("Auth container", () => {
  it("correctly rendering login page with login slug in path", () => {
    const { getByRole, getByPlaceholderText, getByText } = renderComponent(
      "/authentication/login",
    );
    expect(getByRole("form")).toBeTruthy();
    expect(getByPlaceholderText(/Email/i)).toBeTruthy();
    expect(getByPlaceholderText(/Password/i)).toBeTruthy();
    expect(getByText(/Login/)).toBeTruthy();
    expect(getByText(/LOGIN/)).toBeTruthy();
    expect(getByText(/back/i)).toBeTruthy();
    expect(getByText(/do not have an account/i)).toBeTruthy();
    expect(getByText(/create it here/i)).toBeTruthy();
  });

  it("correctly rendering signup page with signup slug in path", () => {
    const { getByRole, getByPlaceholderText, getByText } = renderComponent(
      "/authentication/signup",
    );
    expect(getByRole("form")).toBeTruthy();
    expect(getByPlaceholderText(/email/i)).toBeTruthy();
    expect(getByPlaceholderText(/password/i)).toBeTruthy();
    expect(getByPlaceholderText(/name/i)).toBeTruthy();
    expect(getByText(/sign up/i)).toBeTruthy();
    expect(getByText(/register/i)).toBeTruthy();
    expect(getByText(/back/i)).toBeTruthy();
    expect(getByText(/Already have an account/i)).toBeTruthy();
    expect(getByText(/Login here/i)).toBeTruthy();
  });
});
