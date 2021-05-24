import React from "react";

import { usePopupContext } from "./../../../context";
import { Gallery } from "../../../components";

export default function GalleryItems({ item, selected }) {
  const [, setPopupProps] = usePopupContext();
  return (
    <>
      {selected === "Posters" && (
        <Gallery.Poster
          data-testid="gallery-poster"
          slug={item.file_path}
          onClick={() => setPopupProps({ visible: true, type: "image", item })}
          alt={"gallery poster"}
        />
      )}
      {selected === "Backdrops" && (
        <Gallery.Backdrop
          data-testid="gallery-backdrop"
          slug={item.file_path}
          onClick={() => setPopupProps({ visible: true, type: "image", item })}
          alt={"gallery backdrop"}
        />
      )}
      {selected === "Videos" && (
        <Gallery.Video
          data-testid="gallery-video"
          slug={item.key}
          onClick={() => setPopupProps({ visible: true, type: "video", item })}
        >
          <Gallery.Play />
        </Gallery.Video>
      )}
    </>
  );
}
