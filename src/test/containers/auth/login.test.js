import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router";
import { ThemeProvider } from "styled-components";
import theme from "./../../../theme/theme";
import { AuthContainer } from "./../../../containers";
import { ModalContext } from "../../../context/modal-context/context";
import { AuthContext } from "../../../context/auth-context/context";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

function renderComponent(mockAuthInterface, mockModalInterface) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={mockAuthInterface}>
          <ModalContext.Provider value={[null, mockModalInterface]}>
            <MemoryRouter
              initialEntries={[{ pathname: "/authentication/login" }]}
            >
              <Route component={AuthContainer} path="/authentication/:slug" />
            </MemoryRouter>
          </ModalContext.Provider>
        </AuthContext.Provider>
      </ThemeProvider>,
    ),
  };
}

describe("Auth container", () => {
  const authInterface = {
    login: jest.fn().mockReturnValue(() => Promise.resolve(123)),
    loadUserAvatar: jest.fn(),
    signup: jest.fn(),
  };

  const modalInterface = {
    showErrorModal: jest.fn(),
    showErrorList: jest.fn(),
  };

  it("correctly rendering login page with 'login' slug in path", () => {
    const { getByRole, getByPlaceholderText, getByText } = renderComponent(
      authInterface,
      modalInterface,
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

  it("correctly show error modal with missing user's data", async () => {
    const { getByText } = renderComponent(authInterface, modalInterface);

    expect(getByText(/LOGIN/)).toBeTruthy();
    await act(async () => {
      userEvent.click(getByText(/LOGIN/));
    });
    expect(modalInterface.showErrorList).toHaveBeenCalled();
    expect(modalInterface.showErrorList).toHaveBeenCalledTimes(1);
    expect(modalInterface.showErrorList).toHaveBeenCalledWith([
      "Email field can not be empty",
      "Password field can not be empty",
    ]);
  });

  it("correctly sumbit form with filled user's inputs", async () => {
    const authInterface = {
      login: jest.fn().mockResolvedValue("Mock resolved data"),
      loadUserAvatar: jest.fn(),
      signup: jest.fn(),
    };
    const { getByText, getByPlaceholderText } = renderComponent(
      authInterface,
      modalInterface,
    );
    act(() => {
      fireEvent.change(getByPlaceholderText(/Email/i), {
        target: { value: "vlados.zabashta@mail.ru" },
      });
      fireEvent.change(getByPlaceholderText(/Password/i), {
        target: { value: "12381238" },
      });
    });

    expect(getByPlaceholderText(/Email/i).value).toContain(
      "vlados.zabashta@mail.ru",
    );
    expect(getByPlaceholderText(/Password/i).value).toContain("12381238");

    await act(async () => {
      userEvent.click(getByText(/LOGIN/));
    });
    expect(authInterface.login).toHaveBeenLastCalledWith({
      password: "12381238",
      email: "vlados.zabashta@mail.ru",
    });
  });

  it("correctly handles signup errprs", async () => {
    const authInterface = {
      login: jest.fn().mockRejectedValue({ message: "Mock rejected data" }),
      loadUserAvatar: jest.fn(),
      signup: jest.fn(),
    };

    const { getByText, getByPlaceholderText } = renderComponent(
      authInterface,
      modalInterface,
    );
    act(() => {
      fireEvent.change(getByPlaceholderText(/Email/i), {
        target: { value: "vlados.zabashta@mail.ru" },
      });
      fireEvent.change(getByPlaceholderText(/Password/i), {
        target: { value: "12381238" },
      });
    });

    expect(getByPlaceholderText(/Email/i).value).toContain(
      "vlados.zabashta@mail.ru",
    );
    expect(getByPlaceholderText(/Password/i).value).toContain("12381238");

    await act(async () => {
      userEvent.click(getByText(/LOGIN/));
    });
    expect(modalInterface.showErrorModal).toHaveBeenLastCalledWith(
      "Mock rejected data",
    );
  });
});

//   it("correctly rendering signup page with signup slug in path", () => {
//     const { getByRole, getByPlaceholderText, getByText } = renderComponent(
//       authInterface,
//     );
//     expect(getByRole("form")).toBeTruthy();
//     expect(getByPlaceholderText(/email/i)).toBeTruthy();
//     expect(getByPlaceholderText(/password/i)).toBeTruthy();
//     expect(getByPlaceholderText(/name/i)).toBeTruthy();
//     expect(getByText(/sign up/i)).toBeTruthy();
//     expect(getByText(/register/i)).toBeTruthy();
//     expect(getByText(/back/i)).toBeTruthy();
//     expect(getByText(/Already have an account/i)).toBeTruthy();
//     expect(getByText(/Login here/i)).toBeTruthy();
//   });
// });

// describe("Auth login page", () => {
//   it("contains correctly working login", () => {});
// });
