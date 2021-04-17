import React from "react";

import { useTrending } from "./../../hooks";
import { Bar } from "../../components";

export default function BarContainer() {
  const [data, dataLoading] = useTrending("movie", "week");

  return (
    <Bar>
      <Bar.Container>
        <Bar.Form>
          <Bar.Input />
          <Bar.Search />
          <Bar.Submit />
        </Bar.Form>
      </Bar.Container>
      <Bar.Header>
        <Bar.Wrapper>
          <Bar.Trending />
          <Bar.Title>Trending</Bar.Title>
        </Bar.Wrapper>
      </Bar.Header>
    </Bar>
  );
}
