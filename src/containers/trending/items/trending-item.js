import React from "react";

import { Trending } from "../../../components";

export default function TrendingItem({ item }) {
  return (
    <Trending.Card>
      <Trending.Average>{item.vote_average}</Trending.Average>
      <Trending.Poster slug={item.poster_path} />
      <Trending.Wrapper>
        <Trending.Name>{item.title}</Trending.Name>
      </Trending.Wrapper>
    </Trending.Card>
  );
}
