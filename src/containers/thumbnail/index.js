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
    <Thumbnail visible={mounted} onClick={showModal}>
      <Thumbnail.Gallery />
    </Thumbnail>
  );
}

function TrailerThumbnail() {
  const [{ mounted }, { showModal }] = useTrailerContext();

  return (
    <Thumbnail visible={mounted} onClick={showModal}>
      <Thumbnail.Trailer />
    </Thumbnail>
  );
}
