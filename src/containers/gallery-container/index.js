import React, { useState } from "react";

import { Gallery } from "../../components";

export default function GalleryContainer({ images }) {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <>
      <Gallery onClick={() => setPopupVisible((prev) => !prev)}>
        <Gallery.Icon />
      </Gallery>
      <Gallery.Backdrop visible={true}>
        <Gallery.Container>
          <Gallery.Close />
          <Gallery.Active src={"haha"} />
          <Gallery.Wrapper>
            <Gallery.Button>
              <Gallery.Arrow />
            </Gallery.Button>
            <Gallery.Miniature src={"haha"} />
            <Gallery.Button>
              <Gallery.Arrow />
            </Gallery.Button>
          </Gallery.Wrapper>
        </Gallery.Container>
      </Gallery.Backdrop>
    </>
  );
}
