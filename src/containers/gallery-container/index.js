import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { Gallery } from "../../components";
import { useGalleryContext, useItemContext } from "../../context";
import GalleryPopup from "./items/gallery-popup";

export default function GalleryContainer() {
  const [{ data, dataLoading }] = useItemContext();
  const [{ loading }, { setImages, showModal }] = useGalleryContext();

  useEffect(() => {
    if (!dataLoading && data?.length !== 0) {
      setImages(data);
    }
  }, [dataLoading, data]);

  return (
    !loading && (
      <Gallery onClick={showModal}>
        <Gallery.Icon />
        {createPortal(<GalleryPopup />, document.getElementById("root"))}
      </Gallery>
    )
  );
}
