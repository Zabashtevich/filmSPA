import React, { useState } from "react";
import { useParams } from "react-router";

import { ActorPoster } from "../../components";
import { useFetch } from "./../../hooks";
import { getKnownFor } from "../../utils";
import { CreditsContainer, MovieListContainer } from "./..";
import { ActorPosterSkeleton } from "../../components/skeleton";
import ActorPosterRows from "./items/rows";

export default function ActorPosterContainer() {
  const [{ poster }, setDelay] = useState({ poster: true });
  const { slug } = useParams();
  const [data, dataLoading] = useFetch("person", slug);

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
      <ActorPoster.Column type="content" visible={true}>
        {!dataLoading && (
          <>
            <ActorPoster.Title>{data.name}</ActorPoster.Title>
            <ActorPoster.Subtitle>Biography</ActorPoster.Subtitle>
            <ActorPoster.Biography>{data.biography}</ActorPoster.Biography>
            <ActorPoster.Subtitle>Known for</ActorPoster.Subtitle>
            <MovieListContainer
              list={getKnownFor(data?.combined_credits?.cast) || []}
            />
          </>
        )}
        {!dataLoading && (
          <CreditsContainer list={data?.combined_credits.cast || []} />
        )}
      </ActorPoster.Column>
    </ActorPoster>
  );
}
