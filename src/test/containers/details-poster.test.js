import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { MemoryRouter, Route } from "react-router-dom";

import theme from "./../../theme/theme";
import { DetailsPosterContainer } from "../../containers";
import { range } from "../../utils";

jest.mock("./../../containers/widget", () => () => <div />);

function renderComponent(mockedProps) {
  return {
    ...render(
      <MemoryRouter initialEntries={[{ pathname: "/details/movie/123" }]}>
        <ThemeProvider theme={theme}>
          <Route
            path="/details/:direction/:slug"
            component={() => <DetailsPosterContainer {...mockedProps} />}
          />
        </ThemeProvider>
      </MemoryRouter>,
    ),
  };
}

describe("Details poster container", () => {
  const mockedData = {
    backdrop_path: "/backdropsrc",
    poster_path: "/postersrc",
    title: "dummy title",
    overview: "dummy overview",
    release_date: "2100-10-10",
    spoken_languages: [{ name: "dummyEn" }, { name: "dummyRu" }],
    genres: [{ name: "dummyGenre1" }, { name: "dummyGenre2" }],
    tagline: "dummy tagline",
    credits: {
      crew: [
        { name: "dummy director", job: "Director" },
        { name: "dummy story", job: "Story" },
        { name: "dummy producer", job: "Producer" },
        { name: "dummy productuin", job: "Production" },
        { name: "dummy orinal music composer", job: "Original Music Composer" },
        { name: "dummy production design", job: "Production Design" },
        { name: "dummy editor", job: "Editor" },
      ],
      cast: range(1, 10).map((item) => ({
        id: item,
        name: `dummy name ${item}`,
      })),
    },
    budget: 100,
    revenue: 200,
    runtime: 120,
  };
  it("displays skeleton while loading", () => {
    const {
      getByTestId,
      queryByTestId,
      queryByRole,
      queryByText,
      getAllByTestId,
    } = renderComponent({
      data: null,
      loading: true,
    });

    expect(queryByTestId(/details-wallpaper/i)).toBeNull();
    expect(queryByTestId(/^details-poster$/i)).toBeNull();
    expect(queryByRole("link")).toBeNull();
    expect(queryByText(/genres/i)).toBeNull();
    expect(queryByText(/language/i)).toBeNull();
    expect(queryByText(/tagline/i)).toBeNull();

    expect(getByTestId(/details-poster-skeleton/i)).toBeTruthy();
    expect(getByTestId(/details-rows-skeleton/i)).toBeTruthy();
    expect(getAllByTestId(/details-cast-skeleton/i)).toBeTruthy();
  });

  it("renders poster column and wallpaper after loading", () => {
    const { getByTestId, queryByTestId } = renderComponent({
      data: mockedData,
      loading: false,
    });

    expect(queryByTestId(/details-poster-skeleton/i)).toBeNull();
    expect(getByTestId(/details-wallpaper/i)).toBeTruthy();
    expect(getByTestId(/details-wallpaper/i)).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/original/backdropsrc",
    );

    expect(getByTestId(/details-poster/i)).toBeTruthy();
    expect(getByTestId(/details-poster/i)).toHaveAttribute(
      "src",
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/postersrc",
    );
  });

  it("renders content column after loading", () => {
    const { getByText, queryByTestId } = renderComponent({
      data: mockedData,
      loading: false,
    });

    expect(queryByTestId(/details-rows-skeleton/i)).toBeNull();

    expect(getByText(/dummy title/i)).toBeTruthy();
    expect(getByText(/dummy overview/i)).toBeTruthy();
    expect(getByText(/about movie/i)).toBeTruthy();
    expect(getByText(/2100/i)).toBeTruthy();
    expect(getByText(/dummy title/i)).toBeTruthy();
    expect(getByText(/dummyEn, dummyRu/i)).toBeTruthy();
    expect(getByText(/dummyGenre1, dummyGenre2/i)).toBeTruthy();
    expect(getByText(/dummy tagline/i)).toBeTruthy();
    expect(getByText(/dummy director/i)).toBeTruthy();
    expect(getByText(/dummy story/i)).toBeTruthy();
    expect(getByText(/dummy producer/i)).toBeTruthy();
    expect(getByText(/dummy production design/i)).toBeTruthy();
    expect(getByText(/dummy orinal music composer/i)).toBeTruthy();
    expect(getByText(/dummy editor/i)).toBeTruthy();
    expect(getByText(/100 \$/i)).toBeTruthy();
    expect(getByText(/200 \$/i)).toBeTruthy();
    expect(getByText(/120/i)).toBeTruthy();
  });

  it("render cast column after loading", () => {
    const { getAllByRole, queryByTestId } = renderComponent({
      data: mockedData,
      loading: false,
    });

    expect(queryByTestId(/details-cast-skeleton/i)).toBeNull();

    const links = getAllByRole("link");
    expect(links).toHaveLength(10);

    range(1, 10).map((item) => {
      expect(links[item - 1]).toHaveAttribute("href", `/actor/${item}`);
      expect(links[item - 1]).toHaveTextContent(`dummy name ${item}`);
    });
  });
});
