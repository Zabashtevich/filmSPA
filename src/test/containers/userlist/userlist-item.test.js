import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "./../../../theme/theme";
import UserlistItem from "../../../containers/userlist/items/userlist-item";
import { useCreditsContext, useModalContext } from "../../../context";
import { useList } from "../../../hooks";

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

  it("render content", () => {
    useCreditsContext.mockReturnValue([, setCredits]);
    useModalContext.mockReturnValue([, { showErrorModal, showConfirmModal }]);
    useList.mockReturnValue([setList]);

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
    const { getByText } = renderComponent(props);
  });
});
