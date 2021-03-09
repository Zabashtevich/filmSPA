import React, { useState } from "react";

import { MovieList } from "./../../components";

export default function MovieList({ list }) {
  const isListExist = !!list && list.length > 0;
  return (
    <MovieList>
      <MovieList.Wrapper>
        {isListExist && list.map((item) => <MovieListItem item={item} />)}
        {isListExist && (
          <MovieList.Error>We can not create movie list.</MovieList.Error>
        )}
      </MovieList.Wrapper>
    </MovieList>
  );
}

function MovieListItem({ item }) {
  const [loading, setLoading] = useState(true);

  return (
    <MovieList.Item>
      <MovieList.Poster onLoad={() => setLoading(false)} />
      <MovieList.Title></MovieList.Title>
    </MovieList.Item>
  );
}
