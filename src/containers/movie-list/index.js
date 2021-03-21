import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { ListPosterSkeleton } from "../../components/skeleton";
import { MovieList } from "./../../components";

export default function MovieListContainer({ list, loading }) {
  const [scrollvalue, setScrollvalue] = useState(0);
  const [isListExist, setIsListExist] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsListExist(!!list && list.length > 0);
    }
  }, [loading, list]);

  return (
    <MovieList
      onScroll={(e) => setScrollvalue(e.target.scrollLeft)}
      scrollhide={!isListExist && 1}
    >
      <MovieList.Wrapper blured={scrollvalue !== 0 && 1}>
        {!loading &&
          isListExist &&
          list.map((item) => (
            <MovieListItem item={item} key={item.id} to={`/`} />
          ))}
        {!loading && !isListExist && (
          <MovieList.Error>We can not create movie list.</MovieList.Error>
        )}
      </MovieList.Wrapper>
    </MovieList>
  );
}

function MovieListItem({ item }) {
  const [loading, setLoading] = useState(true);
  const { direction } = useParams();

  return (
    <MovieList.Item
      to={`/details/${item.media_type || direction || "movie"}/${item.id}`}
    >
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
