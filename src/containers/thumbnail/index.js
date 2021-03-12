import React from "react";

import { Thumbnail } from "../../components";
import { useGalleryContext, useTrailerContext } from "../../context";

export default function ThumbnailContainer({ type }) {
  return (
    <>
      {type === "gallery" && <GalleryThumbnail />}
      {type === "trailer" && <TrailerThumbnail />}
    </>
  );
}

function GalleryThumbnail() {
  const [{ mounted }, { showModal }] = useGalleryContext();

  return (
    <Thumbnail.Wrapper visible={mounted} onClick={showModal}>
      <Thumbnail.Gallery />
    </Thumbnail.Wrapper>
  );
}

function TrailerThumbnail() {
  const [{ mounted }, { showModal }] = useTrailerContext();

  return (
    <Thumbnail.Wrapper visible={mounted} onClick={showModal}>
      <Thumbnail.Trailer />
    </Thumbnail.Wrapper>
  );
}
