import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Gallery } from "../../components";
import {
  GalleryActiveSkeleton,
  GalleryMiniatureSkeleton,
} from "./../../components/skeleton";
import { useGalleryContext, useItemContext } from "../../context";
import { calculateOffset } from "../../utils";

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

function GalleryPopup() {
  const [
    { images, visible, url, offset, process },
    { closeModal, setOffset, finishProcess },
  ] = useGalleryContext();

  const { start, end } = offset;
  console.log(start, end);
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
