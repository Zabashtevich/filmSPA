import React, { useState } from "react";

import { Gallery } from "../../components";
import { calculateOffset } from "../../utils";

export default function GalleryContainer({ images }) {
  const [{ start, end }, setGalleryOffset] = useState({ start: 0, end: 5 });
  const [active, setActive] = useState(null);

  function handleOffset(type) {
    calculateOffset(images, start, end, type, setGalleryOffset);
  }

  return (
    <Gallery>
      <Gallery.Icon />
      <Gallery.Backdrop>
        <Gallery.Container>
          <Gallery.Close />
          <Gallery.Active link={active || images[0].file_path} />
          <Gallery.Footer>
            <Gallery.Button
              onClick={() => handleOffset("previous")}
              disabled={start === 0 && 1}
            >
              <Gallery.Arrow />
            </Gallery.Button>
            {images.slice(start, end).map(({ file_path }) => (
              <Gallery.Inner
                key={file_path}
                onClick={() => setActive(file_path)}
                selected={file_path === active && 1}
              >
                <Gallery.Miniature link={file_path} />
              </Gallery.Inner>
            ))}
            <Gallery.Button
              onClick={() => handleOffset("next")}
              disabled={end === images.length && 1}
            >
              <Gallery.Arrow dir={"right"} />
            </Gallery.Button>
          </Gallery.Footer>
        </Gallery.Container>
      </Gallery.Backdrop>
    </Gallery>
  );
}
