import React, { useEffect, useState } from "react";

import { ListPosterSkeleton } from "../../components/skeleton";
import { MovieList } from "./../../components";

export default function MovieListContainer({ list, loading }) {
  const [scrollvalue, setScrollvalue] = useState(0);
  const [isListExist, setIsListExist] = useState(false);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!loading) {
      setIsListExist(!!list && list.length > 0);
      setMovies(list);
    }
  }, [loading, list]);

  return (
    <MovieList
      onScroll={(e) => setScrollvalue(e.target.scrollLeft)}
      scroll={isListExist && 1}
    >
      <MovieList.Wrapper disabled={scrollvalue !== 0 && 1}>
        {!loading &&
          isListExist &&
          list.map((item) => <MovieListItem item={item} key={item.id} />)}
        {!loading && !isListExist && (
          <MovieList.Error>We can not create movie list.</MovieList.Error>
        )}
      </MovieList.Wrapper>
    </MovieList>
  );
}

function MovieListItem({ item }) {
  const [loading, setLoading] = useState(true);

  return (
    <MovieList.Item to={`/details/${item.media_type}/${item.id}`}>
      <MovieList.Inner>
        <ListPosterSkeleton visible={loading} />
        {item.backdrop_path && (
          <MovieList.Poster
            onLoad={() => setLoading(false)}
            src={item.backdrop_path}
          />
        )}

        {!item.backdrop_path && (
          <MovieList.Placeholder onLoad={() => setLoading(false)} />
        )}
      </MovieList.Inner>
      <MovieList.Title>
        {item.title || item.name || item.original_title}
      </MovieList.Title>
    </MovieList.Item>
  );
}