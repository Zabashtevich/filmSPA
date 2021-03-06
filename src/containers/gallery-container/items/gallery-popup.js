import React from "react";

import { Gallery } from "../../../components";
import { GalleryActiveSkeleton } from "../../../components/skeleton";
import { useGalleryContext } from "../../../context";
import { calculateOffset } from "../../../utils";
import GalleryMiniature from "./gallery-miniature";

export default function GalleryPopup() {
  const [
    { images, visible, url, offset, process },
    { closeModal, setOffset, finishProcess },
  ] = useGalleryContext();

  const { start, end } = offset;

  function handleOffset(type) {
    setOffset(calculateOffset(images, offset, type));
  }

  return (
    <Gallery.Backdrop
      visible={visible}
      onClick={(e) => {
        e.stopPropagation();
        closeModal();
      }}
    >
      <Gallery.Close onClick={closeModal} />
      <Gallery.Container>
        <GalleryActiveSkeleton visible={process} />
        <Gallery.Active src={url} onLoad={finishProcess} />
        <Gallery.Wrapper onClick={(e) => e.stopPropagation()}>
          <Gallery.Button
            onClick={() => handleOffset("previous")}
            disabled={start === 0}
          >
            <Gallery.Left />
          </Gallery.Button>
          {images.slice(start, end).map(({ id, file_path }) => (
            <GalleryMiniature key={id} file_path={file_path} />
          ))}
          <Gallery.Button
            onClick={() => handleOffset("next")}
            disabled={end === images.length}
          >
            <Gallery.Right />
          </Gallery.Button>
        </Gallery.Wrapper>
      </Gallery.Container>
    </Gallery.Backdrop>
  );
}
