import React, { useState } from "react";
import { createPortal } from "react-dom";

import { Gallery } from "../../components";
import { useGalleryContext } from "../../context";
import { calculateOffset } from "../../utils";

export default function GalleryContainer() {
  const [
    { offset, visible, images },
    { showGallery, closeGallery, setOffset },
  ] = useGalleryContext();

  function handleOffset(type) {
    calculateOffset(images, offset, type, setOffset);
  }

  const { start, end } = offset;

  return (
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
              <Gallery.Button
                onClick={() => {
                  handleOffset("previous");
                }}
                disabled={start === 0 && 1}
              >
                <Gallery.Arrow />
              </Gallery.Button>
              <GalleryMiniatures />
              <Gallery.Button
                onClick={() => handleOffset("next")}
                disabled={end === images.length && 1}
              >
                <Gallery.Arrow dir={"right"} />
              </Gallery.Button>
            </Gallery.Footer>
          </Gallery.Container>
        </Gallery.Backdrop>,
        document.getElementById("root"),
      )}
    </Gallery>
  );
}
