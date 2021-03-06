import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { Gallery } from "../../components";
import { orinalImageSize, w200miniature } from "../../constants/constants";
import { useGalleryContext, useItemContext } from "../../context";

export default function GalleryContainer() {
  const [{ loading, item }] = useItemContext();
  const [
    { imagesLoading, visible, images, url, offset },
    { setImages, showModal, closeModal, setUrl },
  ] = useGalleryContext();

  useEffect(() => {
    if (!loading) {
      setImages(item?.images?.backdrops || []);
    }
  }, []);

  const { start, end } = offset;
  return (
    <Gallery visible={!imagesLoading} onClick={showModal}>
      <Gallery.Placeholder />
      {createPortal(
        <Gallery.Backdrop visible={visible}>
          <Gallery.Close onClick={closeModal} />
          <Gallery.Container onClick={(e) => e.stopPropagation()}>
            <Gallery.Active src={`${orinalImageSize + url}`} />
            <Gallery.Wrapper>
              <Gallery.Button>
                <Gallery.Left />
              </Gallery.Button>
              {!imagesLoading &&
                images
                  .slice(start, end)
                  .map(({ id, file_path }) => (
                    <Gallery.Miniature
                      src={`${w200miniature + file_path}`}
                      onClick={() => setUrl(file_path)}
                      selected={url === file_path && 1}
                    />
                  ))}
              <Gallery.Button>
                <Gallery.Right />
              </Gallery.Button>
            </Gallery.Wrapper>
          </Gallery.Container>
        </Gallery.Backdrop>,
        document.getElementById("root"),
      )}
    </Gallery>
  );
}
