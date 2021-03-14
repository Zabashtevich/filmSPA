import React from "react";

import { Main } from "../../components";
import { PopularContainer, TrendingContainer } from "..";

export default function MainContainer() {
  return (
    <Main>
      <Main.Section>
        <PopularContainer type="tv" tabs={["popular", "top rated", "airing"]} />
      </Main.Section>
      <Main.Section>
        <PopularContainer
          type="movie"
          tabs={["popular", "top rated", "upcoming"]}
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
