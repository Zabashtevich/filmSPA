import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Gallery } from "../../components";
import {
  GalleryActiveSkeleton,
  GalleryMiniatureSkeleton,
} from "./../../components/skeleton";
import { useGalleryContext } from "../../context";
import { calculateOffset } from "../../utils";

export default function GalleryContainer() {}

function GalleryPopup() {
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
      onClick={(event) => {
        event.stopPropagation();
        closeModal();
      }}
    >
      <Gallery.Close onClick={closeModal} />
      <Gallery.Container>
        <GalleryActiveSkeleton visible={process} />
        <Gallery.Active src={url} onLoad={finishProcess} />
        <Gallery.Wrapper>
          <Gallery.Button
            onClick={() => handleOffset("previous")}
            disabled={start === 0}
          >
            <Gallery.Left />
          </Gallery.Button>
          {images.slice(start, end).map(({ file_path }) => (
            <GalleryMiniature key={file_path} file_path={file_path} />
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

function GalleryMiniature({ file_path }) {
  const [{ url }, { setUrl }] = useGalleryContext();
  const [loading, setLoading] = useState(true);

  return (
    <Gallery.Inner>
      <GalleryMiniatureSkeleton visible={loading} />
      <Gallery.Miniature
        src={file_path}
        onClick={() => setUrl(file_path)}
        selected={url === file_path && 1}
        onLoad={() => setLoading(false)}
      />
    </Gallery.Inner>
  );
}
