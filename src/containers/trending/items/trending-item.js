import React, { useState } from "react";

import { Trending } from "../../../components";

export default function TrendingItem({ item, direction }) {
  const [loading, setLoading] = useState(true);

  return (
    <Trending.Item
      key={item.id}
      to={`/details${item.media_type || direction}/${item.id}`}
      loading={loading && 1}
    >
      <Trending.Poster
        slug={item.poster_path}
        onLoad={() => setLoading(false)}
      />
      {!!item.vote_average && (
        <Trending.Average>{item.vote_average}</Trending.Average>
      )}
      <Trending.Wrapper>
        <Trending.Title>{item.title || item.name}</Trending.Title>
      </Trending.Wrapper>
    </Trending.Item>
  );
}
