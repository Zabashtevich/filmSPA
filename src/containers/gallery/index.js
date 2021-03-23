import React, { useEffect } from "react";
import { useParams } from "react-router";

import { Gallery } from "../../components";
import { useFetch } from "./../../hooks";

export default function GalleryContainer() {
  const { slug, direction } = useParams();

  const [data, dataLoading] = useFetch(direction, slug);
  console.log(data);
  return (
    !dataLoading && (
      <Gallery>
        <Gallery.Header>
          <Gallery.Wrapper>
            <Gallery.Folder slug={data.poster_path ?? null} />
            <Gallery.Information>
              <Gallery.Title>
                {data.title || data.original_title || data.name}
              </Gallery.Title>
              <Gallery.Back to={`/details/${direction}/${slug}`}>
                <Gallery.Icon />
                Back to main
              </Gallery.Back>
            </Gallery.Information>
          </Gallery.Wrapper>
        </Gallery.Header>
        <Gallery.Column>
          <Gallery.Menu>
            <Gallery.Value>
              <Gallery.Subtitle></Gallery.Subtitle>
              <Gallery.Amount></Gallery.Amount>
            </Gallery.Value>
          </Gallery.Menu>
        </Gallery.Column>
        <Gallery.Column>
          <Gallery.Backdrop />
          <Gallery.Poster />
        </Gallery.Column>
      </Gallery>
    )
  );
}
