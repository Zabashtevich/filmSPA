import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetch } from "../../hooks";

import { DetailsPoster, Thumbnail } from "../../components";
import DetailsPosterRows from "./items/details-poster-rows";
import {
  CastListSkeleton,
  PosterDetailsRowsSkeleton,
  PosterSkeleton,
} from "../../components/skeleton";
import { useGalleryContext, useTrailerContext } from "../../context";
import {
  ThumbnailContainer,
  TrailerContainer,
  GalleryContainer,
  WidgetContainer,
} from "..";

export default function DetailsPosterContainer() {
  const [, { setVideos }] = useTrailerContext();
  const [, { setImages }] = useGalleryContext();

  const [{ posterDelay, rowsDelay, creditsDelay }, setDelay] = useState({
    posterDelay: true,
    rowsDelay: true,
    creditsDelay: true,
  });

  const { direction, slug } = useParams();
  const [data, loading] = useFetch(direction, slug);

  useEffect(() => {
    if (!loading) {
      setVideos(data?.videos?.results || []);
      setImages(data?.images?.backdrops || []);
    }
  }, [loading]);

  return (
    <DetailsPoster>
      <GalleryContainer />
      <TrailerContainer data={data} />
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
        <Thumbnail>
          <ThumbnailContainer type="gallery" />
          <ThumbnailContainer type="trailer" />
        </Thumbnail>
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
        <WidgetContainer data={data} />
      </DetailsPoster.Column>
    </DetailsPoster>
  );
}
