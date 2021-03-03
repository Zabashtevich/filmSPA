import React from "react";
import { Gallery } from "../../../components";
import { useGalleryContext } from "../../../context";

export default function GalleryMiniatures() {
  const [{ offset, url }] = useGalleryContext();

  return images.slice(offset.start, offset.end).map(() => (
    <Gallery.Inner>
      <Gallery.Miniature path={file_path} url={url} />
    </Gallery.Inner>
  ));
}
