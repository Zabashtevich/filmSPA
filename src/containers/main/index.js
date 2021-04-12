import React from "react";

import { Main } from "../../components";
import {
  ModalContainer,
  PopularContainer,
  SliderContainer,
  TrendingContainer,
} from "..";

export default function MainContainer() {
  return (
    <Main>
      <ModalContainer />
      <SliderContainer />
      <Main.Section>
        <PopularContainer
          tabs={{
            type: "tv",
            array: [
              { title: "popular", value: "popular" },
              { title: "top rated", value: "top_rated" },
              { title: "airing", value: "airing" },
            ],
          }}
        />
      </Main.Section>
      <Main.Section>
        <PopularContainer
          tabs={{
            type: "movie",
            array: [
              { title: "popular", value: "popular" },
              { title: "top rated", value: "top_rated" },
              { title: "upcoming", value: "upcoming" },
            ],
          }}
        />
      </Main.Section>
      <Main.Section>
        <PopularContainer
          tabs={{
            type: "person",
            array: [{ title: "popular", value: "popular" }],
          }}
        />
      </Main.Section>
      <Main.Section>
        <TrendingContainer />
      </Main.Section>
    </Main>
  );
}
