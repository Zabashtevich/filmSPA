import "@testing-library/jest-dom";
import { act, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { PopupContainer } from "../../containers";
import { usePopupContext } from "../../context";
import theme from "./../../theme/theme";

jest.mock("./../../context", () => ({ usePopupContext: jest.fn() }));

function renderComponent() {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <PopupContainer />
      </ThemeProvider>,
    ),
  };
}

describe("Popup container", () => {
  const setPopupProps = jest.fn();

  it("not rendered when popup context is empty", () => {
    usePopupContext.mockReturnValue([
      { visible: false, type: null, item: null },
      setPopupProps,
    ]);

    const { queryByTestId } = renderComponent();

    expect(queryByTestId(/popup-container/i)).toBeNull();
    expect(document.body).not.toHaveStyle("overflow: hidden");
  });

  it("renders video", () => {
    usePopupContext.mockReturnValue([
      {
        visible: true,
        type: "video",
        item: { key: "youtubekey" },
      },
      setPopupProps,
    ]);

    const { getByTestId } = renderComponent();

    expect(getByTestId(/popup-container/i)).toBeTruthy();
    expect(getByTestId(/youtube-iframe/i)).toBeTruthy();
    expect(getByTestId(/youtube-iframe/i)).toHaveAttribute(
      "src",
      `https://www.youtube.com/embed/youtubekey`,
    );
  });

  it("renders image", () => {
    usePopupContext.mockReturnValue([
      {
        visible: true,
        type: "image",
        item: { file_path: "/dummysrc" },
      },
      setPopupProps,
    ]);

    const { getByTestId } = renderComponent();

    expect(getByTestId(/popup-container/i)).toBeTruthy();
    expect(getByTestId(/popup-img/i)).toHaveAttribute(
      "src",
      `https://image.tmdb.org/t/p/original/dummysrc`,
    );
  });
});
