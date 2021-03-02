import React, { useState } from "react";

import { Gallery } from "../../components";
import { calculateOffset } from "../../utils";

export default function GalleryContainer({ images }) {
  const [{ start, end }, setGalleryOffset] = useState({ start: 0, end: 5 });

  function handleOffset(type) {
    calculateOffset(images, start, end, type, setGalleryOffset);
  }

  return (
    <Gallery>
      <Gallery.Icon />
      <Gallery.Backdrop>
        <Gallery.Container>
          <Gallery.Close />
          <Gallery.Active
            src={
              "https://image.tmdb.org/t/p/original/gJdIomQQ7pDnLIpzMyXLKFlAj05.jpg"
            }
          />
          <Gallery.Footer>
            <Gallery.Button onClick={() => handleOffset("previous")}>
              <Gallery.ArrowLeft />
            </Gallery.Button>
            <Gallery.Wrapper>
              {images.slice(start, end).map((item) => (
                <Gallery.Inner>
                  <Gallery.Miniature
                    src={`https://image.tmdb.org/t/p/original${item.file_path}`}
                  />
                </Gallery.Inner>
              ))}
            </Gallery.Wrapper>
            <Gallery.Button
              direction={"right"}
              onClick={() => () => handleOffset("next")}
            >
              <Gallery.ArrowRight />
            </Gallery.Button>
          </Gallery.Footer>
        </Gallery.Container>
      </Gallery.Backdrop>
    </Gallery>
  );
}
