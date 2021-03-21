import React, { useState } from "react";
import { useParams } from "react-router";
import { useFetch } from "../../hooks";

import { DetailsPoster } from "../../components";
import DetailsPosterRows from "./items/details-poster-rows";
import {
  CastListSkeleton,
  PosterDetailsRowsSkeleton,
  PosterSkeleton,
} from "../../components/skeleton";

export default function DetailsPosterContainer() {
  const [{ posterDelay, rowsDelay, creditsDelay }, setDelay] = useState({
    posterDelay: true,
    rowsDelay: true,
    creditsDelay: true,
  });

  const { direction, slug } = useParams();
  const [data, loading] = useFetch(direction, slug);

  return (
    <DetailsPoster>
      <DetailsPoster.Inner visible={!loading && !posterDelay}>
        <DetailsPoster.Wallpaper src={data?.backdrop_path} />
      </DetailsPoster.Inner>

      <DetailsPoster.Column
        type={"poster"}
        visible={loading}
        onExited={() => setDelay((prev) => ({ ...prev, posterDelay: false }))}
      >
        <PosterSkeleton />
      </DetailsPoster.Column>

      <DetailsPoster.Column type={"poster"} visible={!loading && !posterDelay}>
        <DetailsPoster.Poster src={data?.poster_path} />
      </DetailsPoster.Column>

      <DetailsPoster.Column
        type={"content"}
        visible={loading}
        onExited={() => setDelay((prev) => ({ ...prev, rowsDelay: false }))}
      >
        <PosterDetailsRowsSkeleton visible={loading} />
      </DetailsPoster.Column>

      <DetailsPoster.Column type={"content"} visible={!loading && !rowsDelay}>
        <DetailsPosterRows data={data} />
      </DetailsPoster.Column>

      <DetailsPoster.Column
        type={"cast"}
        visible={loading}
        onExited={() => setDelay((prev) => ({ ...prev, creditsDelay: false }))}
      >
        <DetailsPoster.Subtitle>Cast:</DetailsPoster.Subtitle>
        <CastListSkeleton visible={loading} />
      </DetailsPoster.Column>

      <DetailsPoster.Column type={"cast"} visible={!loading && !creditsDelay}>
        <DetailsPoster.Subtitle>Cast:</DetailsPoster.Subtitle>
        {!loading &&
          data.credits.cast.slice(0, 10).map(({ name, id }) => (
            <DetailsPoster.Link key={id} to={`/actor/${id}`}>
              {name}
            </DetailsPoster.Link>
          ))}
      </DetailsPoster.Column>
    </DetailsPoster>
  );
}
