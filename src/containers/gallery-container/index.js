import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { Gallery } from "../../components";
import { useGalleryContext, useItemContext } from "../../context";
import GalleryPopup from "./items/gallery-popup";

export default function GalleryContainer() {
  const [{ loading, item }] = useItemContext();
  const [{ imagesLoading }, { setImages, showModal }] = useGalleryContext();

  useEffect(() => {
    if (!loading) {
      setImages(item?.images?.backdrops || []);
    }
  }, [loading]);

  return (
    <Gallery visible={!imagesLoading} onClick={showModal}>
      <Gallery.Placeholder />
      {createPortal(<GalleryPopup />, document.getElementById("root"))}
    </Gallery>
  );
}
