import React, { useState } from "react";
import { useParams } from "react-router";

import { ActorPoster } from "../../components";
import { useFetch } from "./../../hooks";
import { getKnownFor } from "../../utils";
import { MovieListContainer } from "./..";
import {
  ActorPosterContentSkeleton,
  ActorPosterSkeleton,
} from "../../components/skeleton";
import ActorPosterRows from "./items/rows";

export default function ActorPosterContainer() {
  const [{ poster, content }, setDelay] = useState({
    poster: true,
    content: true,
  });
  const { slug } = useParams();
  const [data, dataLoading] = useFetch("person", slug);
  console.log(data);
  return (
    <ActorPoster>
      <ActorPoster.Column
        type="poster"
        visible={dataLoading}
        onExited={() => setDelay((prev) => ({ ...prev, poster: false }))}
      >
        <ActorPosterSkeleton />
      </ActorPoster.Column>

      <ActorPoster.Column type="poster" visible={!dataLoading && !poster}>
        <ActorPosterRows data={data} />
      </ActorPoster.Column>

      <ActorPoster.Column
        type="content"
        visible={dataLoading}
        onExited={() => setDelay((prev) => ({ ...prev, content: false }))}
      >
        <ActorPosterContentSkeleton />
      </ActorPoster.Column>

      <ActorPoster.Column type="content" visible={!dataLoading && !content}>
        {!dataLoading && !content && (
          <>
            <ActorPoster.Title>{data.name}</ActorPoster.Title>
            <ActorPoster.Subtitle>Biography</ActorPoster.Subtitle>
            <ActorPoster.Biography>{data.biography}</ActorPoster.Biography>
            <ActorPoster.Subtitle>Known for</ActorPoster.Subtitle>
          </>
        )}
        <MovieListContainer
          list={(!content && getKnownFor(data?.combined_credits?.cast)) || []}
          loading={dataLoading}
        />
      </ActorPoster.Column>
    </ActorPoster>
  );
}
