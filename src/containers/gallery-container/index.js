import React, { useState } from "react";

import { Gallery } from "../../components";
import { calculateOffset } from "../../utils";

export default function GalleryContainer({ images }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [{ start, end }, setGalleryOffset] = useState({ start: 0, end: 5 });
  const [{ loading, link }, setActive] = useState({
    loading: true,
    link: images[0].file_path,
  });

  function handleOffset(type) {
    calculateOffset(images, start, end, type, setGalleryOffset);
  }

  return (
    <Gallery onClick={() => setPopupVisible(true)}>
      <Gallery.Icon />
      <Gallery.Backdrop visible={popupVisible}>
        <Gallery.Container>
          <Gallery.Close
            onClick={(e) => {
              e.stopPropagation();
              setPopupVisible(false);
            }}
          />
          <Gallery.Active link={link} loading={loading} setActive={setActive} />
          <Gallery.Footer>
            <Gallery.Button
              onClick={(e) => {
                e.stopPropagation();
                handleOffset("previous");
              }}
              disabled={start === 0 && 1}
            >
              <Gallery.Arrow />
            </Gallery.Button>
            {images.slice(start, end).map(({ file_path }) => (
              <Gallery.Inner
                key={file_path}
                onClick={() => setActive({ link: file_path, loading: true })}
              >
                <Gallery.Miniature
                  link={file_path}
                  selected={file_path === link && 1}
                />
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
