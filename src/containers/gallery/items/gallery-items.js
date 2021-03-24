import React from "react";

import { Gallery } from "../../../components";

export default function GalleryItems({ item, selected }) {
  console.log(item);
  return (
    <>
      {selected === "Posters" && <Gallery.Poster slug={item.file_path} />}
      {selected === "Backdrops" && <Gallery.Backdrop slug={item.file_path} />}
      {selected === "Videos" && (
        <Gallery.Video slug={item.key}>
          <Gallery.Play />
        </Gallery.Video>
      )}
    </>
  );
}
