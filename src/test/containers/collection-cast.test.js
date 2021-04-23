import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { range } from "../../utils";

import { CollectionCastContainer } from "./../../containers";
import theme from "./../../theme/theme";

function renderComponent(props) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <CollectionCastContainer {...props} />
      </ThemeProvider>,
    ),
  };
}

describe("Collection cast container", () => {
  it("displays skeleton items on loading", () => {
    const { getAllByTestId, getByText } = renderComponent({
      loading: true,
      details: null,
    });

    expect(getAllByTestId(/collection-cast-skeleton/i)).toHaveLength(30);
    expect(getByText(/actor list:/i)).toBeTruthy();
    expect(getByText(/crew list:/i)).toBeTruthy();
  });

  it("render full content after loading", () => {
    const mockedData = {
      cast: range(1, 15).map((item) => ({
        id: item,
        profile_path: `/dummyactorposter${item}`,
        name: `dummy actor name ${item}`,
        character: `dummy character ${item}`,
      })),
      crew: range(1, 15).map((item) => ({
        id: item,
        profile_path: `/dummycrewposter${item}`,
        name: `dummy crew name ${item}`,
        department: `dummy department ${item}`,
      })),
    };
    const { getByText, getAllByTestId } = renderComponent({
      loading: false,
      details: mockedData,
    });

    const actorPosters = getAllByTestId(/actor-poster/i);
    const crewPosters = getAllByTestId(/crew-poster/i);

    expect(getAllByTestId(/collection-cast-actor/i)).toHaveLength(15);
    expect(getAllByTestId(/collection-cast-crew/i)).toHaveLength(15);
    expect(actorPosters).toHaveLength(15);
    expect(crewPosters).toHaveLength(15);

    range(1, 15).map((item) => {
      expect(getByText(`dummy actor name ${item}`));
      expect(getByText(`dummy character ${item}`));
      expect(actorPosters[item - 1]).toHaveAttribute(
        `src`,
        `https://image.tmdb.org/t/p/w200/dummyactorposter${item}`,
      );

      expect(getByText(`dummy crew name ${item}`));
      expect(getByText(`dummy department ${item}`));
      expect(crewPosters[item - 1]).toHaveAttribute(
        `src`,
        `https://image.tmdb.org/t/p/w200/dummycrewposter${item}`,
      );
    });
  });
});
