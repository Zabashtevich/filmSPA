import React from "react";
import { createPortal } from "react-dom";

import { Gallery } from "../../components";
import { useGalleryContext } from "../../context";
import { calculateOffset } from "../../utils";

export default function GalleryContainer() {
  const [
    { offset, visible, images, url, loading },
    { showGallery, closeGallery, setOffset, setUrl },
  ] = useGalleryContext();

  function handleOffset(type) {
    calculateOffset(images, offset, type, setOffset);
  }
  const { start, end } = offset;
  return (
    !loading && (
      <Gallery onClick={showGallery}>
        <Gallery.Icon />
        {createPortal(
          <Gallery.Backdrop visible={visible}>
            <Gallery.Container>
              <Gallery.Close
                onClick={(e) => {
                  e.stopPropagation();
                  closeGallery();
                }}
              />
              <Gallery.Active />
              <Gallery.Footer>
                <Gallery.Left
                  disabled={start === 0 && 1}
                  onClick={() => {
                    handleOffset("previous");
                  }}
                />
                {images.slice(start, end).map(({ file_path }) => (
                  <Gallery.Inner
                    onClick={() => setUrl(file_path)}
                    key={file_path}
                  >
                    <Gallery.Miniature path={file_path} url={url} />
                  </Gallery.Inner>
                ))}
                <Gallery.Right
                  onClick={() => handleOffset("next")}
                  disabled={end === images.length && 1}
                />
              </Gallery.Footer>
            </Gallery.Container>
          </Gallery.Backdrop>,
          document.getElementById("root"),
        )}
      </Gallery>
    )
  );
}
