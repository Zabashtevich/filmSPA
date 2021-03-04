import React from "react";
import { useParams } from "react-router";
import { useFetch } from "../../hooks";

import { DetailsPoster } from "../../components";
import DetailsPosterRows from "./items/details-poster-rows";
import DetailsPosterCredits from "./items/details-poster-credits";
import { GalleryContainer, TrailerContainer } from "..";

export default function DetailsPosterContainer() {
  const { direction, slug } = useParams();
  const [data, loading] = useFetch(direction, slug);

  return (
    !loading && (
      <DetailsPoster>
        <DetailsPoster.Inner>
          <DetailsPoster.Wallpaper src={data.backdrop_path} />
        </DetailsPoster.Inner>
        <DetailsPoster.Column type={"poster"}>
          <DetailsPoster.Poster src={data.poster_path} />
          <GalleryContainer />
          <TrailerContainer />
        </DetailsPoster.Column>
        <DetailsPoster.Column type={"content"}>
          <DetailsPosterRows data={data} />
        </DetailsPoster.Column>
        <DetailsPoster.Column type={"cast"}>
          <DetailsPosterCredits data={data} />
        </DetailsPoster.Column>
      </DetailsPoster>
    )
  );
}
