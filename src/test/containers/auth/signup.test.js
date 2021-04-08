import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router";
import { ThemeProvider } from "styled-components";
import theme from "./../../../theme/theme";
import { AuthContainer } from "./../../../containers";
import { ModalContext } from "../../../context/modal-context/context";
import { AuthContext } from "../../../context/auth-context/context";
import userEvent from "@testing-library/user-event";

function renderComponent(mockAuthInterface, mockModalInterface) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={mockAuthInterface}>
          <ModalContext.Provider value={[null, mockModalInterface]}>
            <MemoryRouter
              initialEntries={[{ pathname: "/authentication/signup" }]}
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

  it("correctly rendering login page with 'signup' slug in path", () => {
    const { getByRole, getByPlaceholderText, getByText } = renderComponent(
      authInterface,
      modalInterface,
    );

    expect(getByRole("form")).toBeTruthy();
    expect(getByText(/sign up/i)).toBeTruthy();
    expect(getByPlaceholderText("file")).toBeTruthy();
    expect(getByPlaceholderText("Email")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
    expect(getByPlaceholderText("Name")).toBeTruthy();
    expect(getByText(/register/i)).toBeTruthy();
    expect(getByText(/back/i)).toBeTruthy();
    expect(getByText(/already have an account[ ?]/i)).toBeTruthy();
    expect(getByText(/login here/i)).toBeTruthy();
  });

  it("correctly show error modal with unfilled form inputs", async () => {
    const { getByText } = renderComponent(authInterface, modalInterface);

    expect(getByText(/register/i)).toBeTruthy();
    await act(async () => {
      userEvent.click(getByText(/register/i));
    });
    expect(modalInterface.showErrorList).toHaveBeenCalled();
    expect(modalInterface.showErrorList).toHaveBeenCalledTimes(1);
    expect(modalInterface.showErrorList).toHaveBeenCalledWith([
      "Email field can not be empty",
      "Name field can not be empty",
      "Password field can not be empty",
    ]);
  });

  it("correctly sumbit form with filled form inputs", async () => {
    const authInterface = {
      login: jest.fn(),
      loadUserAvatar: jest.fn().mockResolvedValue("https/mock.url"),
      signup: jest.fn().mockResolvedValue("resolved mock sucess"),
    };
    const { getByText, getByPlaceholderText } = renderComponent(
      authInterface,
      modalInterface,
    );
    act(() => {
      userEvent.type(getByPlaceholderText(/email/i), "vlados.zabashta@mail.ru");
      userEvent.type(getByPlaceholderText(/name/i), "Zabashtevich");
      userEvent.type(getByPlaceholderText(/password/i), "12341234");
      userEvent.upload(getByPlaceholderText(/file/i), "dummyValue.something");
    });

    expect(getByPlaceholderText(/email/i).value).toContain(
      "vlados.zabashta@mail.ru",
    );
    expect(getByPlaceholderText(/name/i).value).toContain("Zabashtevich");
    expect(getByPlaceholderText(/password/i).value).toContain("12341234");
    expect(getByPlaceholderText(/file/i).files[0]).toContain(
      "dummyValue.something",
    );

    await act(async () => {
      userEvent.click(getByText(/register/i));
    });

    expect(authInterface.loadUserAvatar).toHaveBeenCalled();
    expect(authInterface.signup).toHaveBeenCalledWith({
      password: "12341234",
      email: "vlados.zabashta@mail.ru",
      name: "Zabashtevich",
      url: "https/mock.url",
    });
  });

  it("correctly handles signup errors", async () => {
    const authInterface = {
      login: jest.fn(),
      loadUserAvatar: jest
        .fn()
        .mockRejectedValue({ message: "Mock rejected data" }),
      signup: jest.fn(),
    };

    const { getByText, getByPlaceholderText } = renderComponent(
      authInterface,
      modalInterface,
    );

    act(() => {
      userEvent.type(getByPlaceholderText(/email/i), "vlados.zabashta@mail.ru");
      userEvent.type(getByPlaceholderText(/name/i), "Zabashtevich");
      userEvent.type(getByPlaceholderText(/password/i), "12381238");
    });

    expect(getByPlaceholderText(/Email/i).value).toContain(
      "vlados.zabashta@mail.ru",
    );
    expect(getByPlaceholderText(/Password/i).value).toContain("12381238");

    await act(async () => {
      userEvent.click(getByText(/register/i));
    });
    expect(modalInterface.showErrorModal).toHaveBeenLastCalledWith(
      "Mock rejected data",
    );
  });

  it("handles invalid email adress", async () => {
    const { getByRole, getByPlaceholderText, getByText } = renderComponent(
      authInterface,
      modalInterface,
    );

    await act(async () => {
      userEvent.type(getByPlaceholderText(/email/i), "vlados.zabashtamail.ru");
      userEvent.type(getByPlaceholderText(/name/i), "Zabashtevich");
      userEvent.type(getByPlaceholderText(/password/i), "12381238");
      userEvent.click(getByText(/register/i));
    });

    expect(modalInterface.showErrorList).toHaveBeenCalledWith([
      "Invalid email address",
    ]);
  });
});
