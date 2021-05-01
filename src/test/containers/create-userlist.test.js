import { act, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";

import { CreateUserlistContainer } from "../../containers";
import { useProcessContext } from "../../context";
import { useList } from "../../hooks";
import theme from "../../theme/theme";

jest.mock("./../../context", () => ({ useProcessContext: jest.fn() }));
jest.mock("./../../hooks", () => ({ useList: jest.fn() }));

function renderComponent(props) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <CreateUserlistContainer {...props} />
      </ThemeProvider>,
    ),
  };
}

describe("Create userlist container", () => {
  const setList = jest.fn();
  it("renders basic content", () => {
    useProcessContext.mockReturnValue([{ processing: false }]);
    useList.mockReturnValue([setList]);

    const { getByTestId, getByText, getByPlaceholderText } = renderComponent({
      loading: true,
      lists: {},
    });

    expect(getByTestId(/create-userlist-inner/i)).toBeTruthy();
    expect(getByText(/create new list/i)).toBeTruthy();
    expect(getByText(/confirm/i)).toBeTruthy();
    expect(getByPlaceholderText(/enter a name/i)).toBeTruthy();
    expect(getByText(/list name max length is 10 symbols/i)).toBeTruthy();
    expect(getByText(/list name min length is 5 symbols/i)).toBeTruthy();
    expect(getByText(/max amount of lists - 7/i)).toBeTruthy();
  });

  it("contains correctly working input", async () => {
    useProcessContext.mockReturnValue([{ processing: false }]);
    useList.mockReturnValue([setList]);

    const { getByPlaceholderText, getByDisplayValue } = renderComponent({
      loading: true,
      lists: {},
    });

    expect(getByPlaceholderText(/enter a name/i)).toBeTruthy();
    expect(getByPlaceholderText(/enter a name/i).textContent).toContain("");

    await act(async () => {
      fireEvent.change(getByPlaceholderText(/enter a name/i), {
        target: { value: "dummy input text" },
      });
    });

    expect(getByDisplayValue(/dummy input text/i)).toBeTruthy();
  });
});
