import React from "react";

import { usePopupContext } from "./../../../context";
import { Gallery } from "../../../components";

export default function GalleryItems({ item, selected }) {
  const [, setPopupProps] = usePopupContext();
  return (
    <>
      {selected === "Posters" && (
        <Gallery.Poster
          slug={item.file_path}
          onClick={() => setPopupProps({ visible: true, type: "image", item })}
        />
      )}
      {selected === "Backdrops" && (
        <Gallery.Backdrop
          slug={item.file_path}
          onClick={() => setPopupProps({ visible: true, type: "image", item })}
        />
      )}
      {selected === "Videos" && (
        <Gallery.Video
          slug={item.key}
          onClick={() => setPopupProps({ visible: true, type: "video", item })}
        >
          <Gallery.Play />
        </Gallery.Video>
      )}
    </>
  );
}
