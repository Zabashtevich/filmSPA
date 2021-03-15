import React from "react";

import { Main } from "../../components";
import { PopularContainer, TrendingContainer } from "..";

export default function MainContainer() {
  return (
    <Main>
      <Main.Section>
        <PopularContainer
          type="tv"
          tabs={[
            { title: "popular", value: 0 },
            { title: "top rated", value: 1 },
            { title: "airing", value: 2 },
          ]}
        />
      </Main.Section>
      <Main.Section>
        <PopularContainer
          type="movie"
          tabs={[
            { title: "popular", value: 0 },
            { title: "top rated", value: 1 },
            { title: "upcoming", value: 2 },
          ]}
        />
      </Main.Section>
      <Main.Section>
        <PopularContainer type="person" />
      </Main.Section>
      <Main.Section>
        <TrendingContainer />
      </Main.Section>
    </Main>
  );
}
