import React, { useEffect } from "react";

import { Thumbnail } from "../../components";
import { useGalleryContext, useItemContext } from "../../context";

export default function ThumbnailContainer({ type }) {
  return (
    <>
      {type === "gallery" && <GalleryThumbnail />}
      {type === "trailer" && <TrailerThumbnail />}
    </>
  );
}

function GalleryThumbnail() {
  const [{ loading, item }] = useItemContext();
  const [{ imagesLoading }, { setImages, showModal }] = useGalleryContext();

  useEffect(() => {
    if (!loading) {
      setImages(item?.images?.backdrops || []);
    }
  }, [loading]);

  return (
    <Thumbnail visible={!imagesLoading} onClick={showModal}>
      <Thumbnail.Gallery />
    </Thumbnail>
  );
}

function TrailerThumbnail() {
  const [{ loading, item }] = useItemContext();

  return (
    <Thumbnail>
      <Thumbnail.Trailer />
    </Thumbnail>
  );
}
