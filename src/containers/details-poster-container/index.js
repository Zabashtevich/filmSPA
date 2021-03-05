import React, { useEffect } from "react";
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
  const { direction, slug } = useParams();
  const [, setItem] = useItemContext();
  const [data, loading] = useFetch(direction, slug);

  useEffect(() => {
    if (!loading) {
      setItem(data);
    }
  }, [data, loading]);

  console.log(data);
  return (
    !loading && (
      <DetailsPoster>
        <DetailsPoster.Inner>
          <DetailsPoster.Wallpaper src={data.backdrop_path} />
        </DetailsPoster.Inner>
        <DetailsPoster.Column type={"poster"}>
          <PosterSkeleton visible={!loading} />
          <GalleryContainer />
          <TrailerContainer />
        </DetailsPoster.Column>
        <DetailsPoster.Column type={"content"}>
          <DetailsPosterRows data={data} />
          {/* <PosterDetailsRowsSkeleton visible={!loading} /> */}
        </DetailsPoster.Column>
        <DetailsPoster.Column type={"cast"}>
          <DetailsPoster.Subtitle>Cast:</DetailsPoster.Subtitle>
          <CreditsSkeleton visible={!loading} />
          {/* <DetailsPosterCredits data={data} /> */}
        </DetailsPoster.Column>
      </DetailsPoster>
    )
  );
}

{
  /* <DetailsPoster.Poster src={data.poster_path} /> */
}
