import React from "react";

import { Main } from "../../components";
import { PopularContainer, SliderContainer, TrendingContainer } from "..";

export default function MainContainer() {
  return (
    <Main>
      <SliderContainer />
      <Main.Section>
        <PopularContainer
          type="tv"
          tabs={[
            { title: "popular", value: "popular" },
            { title: "top rated", value: "top_rated" },
            { title: "airing", value: "airing" },
          ]}
        />
      </Main.Section>
      <Main.Section>
        <PopularContainer
          type="movie"
          tabs={[
            { title: "popular", value: "popular" },
            { title: "top rated", value: "top_rated" },
            { title: "upcoming", value: "upcoming" },
          ]}
        />
      </Main.Section>
      <Main.Section>
        <PopularContainer
          type="person"
          tabs={[{ title: "popular", value: "popular" }]}
        />
      </Main.Section>
      <Main.Section>
        <TrendingContainer />
      </Main.Section>
    </Main>
  );
}
