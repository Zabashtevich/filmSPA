import React from "react";
import { createPortal } from "react-dom";

import { Gallery } from "../../components";
import { useGalleryContext } from "../../context";
import GalleryPopup from "./items/gallery-popup";

export default function GalleryContainer() {
  const [{ loading }, { showGallery }] = useGalleryContext();

  return (
    !loading && (
      <Gallery onClick={showGallery}>
        <Gallery.Icon />
        {createPortal(<GalleryPopup />, document.getElementById("root"))}
      </Gallery>
    )
  );
}
