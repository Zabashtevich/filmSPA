import React, { useState } from "react";

import { Trending } from "../../../components";

export default function TrendingItem({ item, direction }) {
  const [loading, setLoading] = useState(true);

  return (
    <Trending.Card to={`/details/${item.media_type || direction}/${item.id}`}>
      {!!item.vote_average && (
        <Trending.Average>{item.vote_average}</Trending.Average>
      )}
      <Trending.Poster
        slug={item.poster_path}
        onLoad={() => setLoading(false)}
      />
      <Trending.Inner loading={loading && 1}>
        <Trending.Wrapper>
          <Trending.Name>{item.title || item.name}</Trending.Name>
        </Trending.Wrapper>
      </Trending.Inner>
    </Trending.Card>
  );
}
