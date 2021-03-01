import React, { useState } from "react";

import { Gallery } from "../../components";

export default function GalleryContainer({ images }) {
  const [popupVisible, setPopupVisible] = useState(false);
  console.log(images);
  return (
    <>
      <Gallery onClick={() => setPopupVisible((prev) => !prev)}>
        <Gallery.Icon />
      </Gallery>
      <Gallery.Backdrop visible={true}>
        <Gallery.Container>
          <Gallery.Close />
          <Gallery.Active
            src={
              "https://image.tmdb.org/t/p/original/gJdIomQQ7pDnLIpzMyXLKFlAj05.jpg"
            }
          />
          <Gallery.Wrapper>
            <Gallery.Button>
              <Gallery.Arrow />
            </Gallery.Button>
            {images.slice(0, 5).map((item) => (
              <Gallery.Miniature
                src={`https://image.tmdb.org/t/p/original${item.file_path}`}
              />
            ))}
            <Gallery.Button direction={"right"}>
              <Gallery.Arrow direction={"right"} />
            </Gallery.Button>
          </Gallery.Wrapper>
        </Gallery.Container>
      </Gallery.Backdrop>
    </>
  );
}
