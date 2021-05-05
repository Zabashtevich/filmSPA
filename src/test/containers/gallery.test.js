import { act, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import theme from "./../../theme/theme";
import { GalleryContainer } from "../../containers";
import { usePaginContext, usePopupContext } from "../../context";
import { range } from "../../utils";

jest.mock("./../../containers/pagin", () => () => <div />);

jest.mock("./../../context", () => ({
  __esModule: true,
  usePaginContext: jest.fn(),
  usePopupContext: jest.fn(),
}));

function renderComponent(props) {
  return {
    ...render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GalleryContainer {...props} />
        </ThemeProvider>
      </BrowserRouter>,
    ),
  };
}

describe("Gallery container", () => {
  const setPopup = jest.fn();
  const setPagin = jest.fn();
  const mockedData = {
    title: "dummy title",
    poster_path: "/dummyposterpath",
    images: {
      backdrops: range(1, 4).map((item) => ({
        file_path: `/dummybackdrop${item}`,
      })),
      posters: range(1, 5).map((item) => ({
        file_path: `/dummyposter${item}`,
      })),
    },
    videos: {
      results: range(1, 6).map((item) => ({
        key: `/dummyvideo${item}`,
      })),
    },
  };

  it("displays skeletons on loading", () => {
    usePaginContext.mockReturnValue([{ active: 1 }, setPagin]);
    const { getByTestId, getAllByTestId } = renderComponent({
      data: null,
      loading: true,
    });

    expect(getByTestId(/gallery-header-skeleton/i)).toBeTruthy();
    expect(getAllByTestId(/gallery-menu-skeleton/i)).toHaveLength(3);
    expect(getAllByTestId(/gallery-poster-skeleton/i)).toHaveLength(20);
  });

  it("renders full content after loading is done", () => {
    usePaginContext.mockReturnValue([{ active: 1 }, setPagin]);
    usePopupContext.mockReturnValue([, setPopup]);

    const { getByText, getAllByTestId, getByTestId } = renderComponent({
      data: mockedData,
      loading: false,
      slug: "dummyslug",
      direction: "dummydirection",
    });

    expect(getByText(/back to main/i)).toBeTruthy();
    expect(getByText(/dummy title/i)).toBeTruthy();
    expect(getByText(/back to main/i)).toBeTruthy();
    expect(getByTestId(/gallery-header-poster/i)).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w200/dummyposterpath",
    );
    expect(getByTestId(/gallery-back/i)).toHaveAttribute(
      "href",
      "/details/dummydirection/dummyslug",
    );

    expect(getByText(/menu/i)).toBeTruthy();
    expect(getByText(/videos/i)).toBeTruthy();
    expect(getByText(/^6$/i)).toBeTruthy();
    expect(getByText(/backdrops/i)).toBeTruthy();
    expect(getByText(/^4$/i)).toBeTruthy();
    expect(getByText(/posters/i)).toBeTruthy();
    expect(getByText(/^5$/i)).toBeTruthy();

    const posters = getAllByTestId(/gallery-poster/i);
    expect(posters).toHaveLength(5);

    range(1, 5).map((item) => {
      expect(posters[item - 1]).toHaveAttribute(
        "src",
        `https://image.tmdb.org/t/p/w200/dummyposter${item}`,
      );
    });
  });

  it("contains a menu switcher logic", async () => {
    usePaginContext.mockReturnValue([{ active: 1 }, setPagin]);
    usePopupContext.mockReturnValue([, setPopup]);

    const { getByText, getAllByTestId, debug } = renderComponent({
      data: mockedData,
      loading: false,
      slug: "dummyslug",
      direction: "dummydirection",
    });

    const menuItems = getAllByTestId(/gallery-menu-item/i);

    expect(getAllByTestId(/gallery-poster/i)).toHaveLength(5);
    expect(menuItems[0]).toHaveStyle("background-color: rgba(0, 0, 0, 0.05);");

    await act(async () => {
      userEvent.click(getByText(/videos/i));
    });

    const videos = getAllByTestId(/gallery-video/i);
    expect(videos).toHaveLength(6);
    range(1, 6).map((item) => {
      expect(videos[item - 1]).toHaveStyle(
        `background-image: url(https://i.ytimg.com/vi//dummyvideo${item}/hqdefault.jpg)`,
      );
    });
    expect(menuItems[1]).toHaveStyle("background-color: rgba(0,0,0,0.05)");

    await act(async () => {
      userEvent.click(getByText(/backdrops/i));
    });

    const backdrops = getAllByTestId(/gallery-backdrop/i);
    expect(backdrops).toHaveLength(4);
    range(1, 4).map((item) => {
      expect(backdrops[item - 1]).toHaveAttribute(
        "src",
        `https://image.tmdb.org/t/p/w300/dummybackdrop${item}`,
      );
    });
    expect(menuItems[2]).toHaveStyle("background-color: rgba(0,0,0,0.05)");
  });

  it("calls setPagin func after getting data from server", () => {
    usePaginContext.mockReturnValue([{ active: 1 }, setPagin]);
    usePopupContext.mockReturnValue([, setPopup]);

    const {} = renderComponent({
      data: mockedData,
      loading: false,
      slug: "dummyslug",
      direction: "dummydirection",
    });

    expect(setPagin).toHaveBeenCalled();
  });

  it("calls setPopup on item click", async () => {
    usePaginContext.mockReturnValue([{ active: 1 }, setPagin]);
    usePopupContext.mockReturnValue([, setPopup]);

    const { getAllByTestId, getByText } = renderComponent({
      data: mockedData,
      loading: false,
      slug: "dummyslug",
      direction: "dummydirection",
    });

    expect(setPopup).not.toHaveBeenCalled();

    const posters = getAllByTestId(/gallery-poster/i);
    await act(async () => {
      userEvent.click(posters[0]);
    });

    expect(setPopup).toHaveBeenCalled();
    expect(setPopup).toHaveBeenCalledTimes(1);
    expect(setPopup).toHaveBeenLastCalledWith({
      visible: true,
      type: "image",
      item: { file_path: "/dummyposter1" },
    });

    await act(async () => {
      userEvent.click(posters[1]);
    });

    expect(setPopup).toHaveBeenCalled();
    expect(setPopup).toHaveBeenCalledTimes(2);
    expect(setPopup).toHaveBeenLastCalledWith({
      visible: true,
      type: "image",
      item: { file_path: "/dummyposter2" },
    });

    await act(async () => {
      userEvent.click(getByText(/videos/i));
    });

    const videos = getAllByTestId(/gallery-video/i);

    await act(async () => {
      userEvent.click(videos[0]);
    });

    expect(setPopup).toHaveBeenCalled();
    expect(setPopup).toHaveBeenCalledTimes(3);
    expect(setPopup).toHaveBeenLastCalledWith({
      visible: true,
      type: "video",
      item: { key: "/dummyvideo1" },
    });

    await act(async () => {
      userEvent.click(videos[1]);
    });

    expect(setPopup).toHaveBeenCalled();
    expect(setPopup).toHaveBeenCalledTimes(4);
    expect(setPopup).toHaveBeenLastCalledWith({
      visible: true,
      type: "video",
      item: { key: "/dummyvideo2" },
    });

    await act(async () => {
      userEvent.click(getByText(/backdrops/i));
    });

    const backdrops = getAllByTestId(/gallery-backdrop/i);

    await act(async () => {
      userEvent.click(backdrops[0]);
    });

    expect(setPopup).toHaveBeenCalled();
    expect(setPopup).toHaveBeenCalledTimes(5);
    expect(setPopup).toHaveBeenLastCalledWith({
      visible: true,
      type: "image",
      item: { file_path: "/dummybackdrop1" },
    });

    await act(async () => {
      userEvent.click(backdrops[1]);
    });

    expect(setPopup).toHaveBeenCalled();
    expect(setPopup).toHaveBeenCalledTimes(6);
    expect(setPopup).toHaveBeenLastCalledWith({
      visible: true,
      type: "image",
      item: { file_path: "/dummybackdrop2" },
    });
  });
});
