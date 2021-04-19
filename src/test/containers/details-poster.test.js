import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";

import theme from "./../../theme/theme";
import { DetailsPosterContainer } from "../../containers";
import { MemoryRouter, Route } from "react-router-dom";
import { range } from "../../utils";

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
    spoken_languages: ["dummyEn", "dummyRu"],
    genres: ["dummyGenre1", "dummyGenre2"],
    tagline: "dummy tagline",
    credits: {
      crew: [
        { name: "dummy director", job: "director" },
        { name: "dummy story", job: "story" },
        { name: "dummy producer", job: "producer" },
        { name: "dummy productuin", job: "productuin" },
        { name: "dummy orinal music composer", job: "orinal music composer" },
        { name: "dummy editor", job: "editor" },
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
    expect(getByTestId(/details-cast-skeleton/i)).toBeTruthy();
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
});
