import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetch } from "../../hooks";

import { DetailsPoster } from "../../components";
import DetailsPosterRows from "./items/details-poster-rows";
import DetailsPosterCredits from "./items/details-poster-credits";
import { GalleryContainer, TrailerContainer } from "..";
import { useItemContext } from "../../context";
import {
  CreditsSkeleton,
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
  const [, { setItem, unsetItem }] = useItemContext();
  const [data, loading] = useFetch(direction, slug);

  useEffect(() => {
    if (!loading) {
      setItem(data);
    }
    return () => unsetItem();
  }, [data, loading]);

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
        <GalleryContainer />
        <TrailerContainer />
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
        <CreditsSkeleton visible={loading} />
      </DetailsPoster.Column>

      <DetailsPoster.Column type={"cast"} visible={!loading && !creditsDelay}>
        <DetailsPoster.Subtitle>Cast:</DetailsPoster.Subtitle>
        <DetailsPosterCredits data={data} />
      </DetailsPoster.Column>
    </DetailsPoster>
  );
}
