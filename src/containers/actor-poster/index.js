import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { ActorPoster } from "../../components";
import { useFetch } from "./../../hooks";
import { getKnownFor } from "../../utils";
import { CreditsContainer, MovieListContainer } from "./..";
import {
  ActorPosterContentSkeleton,
  ActorPosterSkeleton,
} from "../../components/skeleton";
import ActorPosterRows from "./items/rows";
import { useCreditsContext } from "../../context";

export default function ActorPosterContainer() {
  const [, setCreditsProps] = useCreditsContext();
  const [{ poster, contentDelay }, setDelay] = useState({
    poster: true,
    contentDelay: true,
  });

  const { slug } = useParams();
  const [data, dataLoading] = useFetch("actor", "person", slug);

  useEffect(() => {
    if (!dataLoading && !contentDelay) {
      setCreditsProps({
        loading: false,
        array: data?.combined_credits?.cast || [],
      });
    }
    return () => setCreditsProps({ loading: true, array: null });
  }, [dataLoading, contentDelay]);

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
        onExited={() => setDelay((prev) => ({ ...prev, contentDelay: false }))}
      >
        <ActorPosterContentSkeleton />
      </ActorPoster.Column>

      <ActorPoster.Column
        type="content"
        visible={!dataLoading && !contentDelay}
      >
        {!dataLoading && !contentDelay && (
          <>
            <ActorPoster.Title>{data.name}</ActorPoster.Title>
            <ActorPoster.Subtitle>Biography</ActorPoster.Subtitle>
            <ActorPoster.Biography>{data.biography}</ActorPoster.Biography>
            <ActorPoster.Subtitle>Known for</ActorPoster.Subtitle>
          </>
        )}
        <MovieListContainer
          list={
            (!contentDelay && getKnownFor(data?.combined_credits?.cast)) || []
          }
          loading={dataLoading}
        />
        <CreditsContainer />
      </ActorPoster.Column>
    </ActorPoster>
  );
}
