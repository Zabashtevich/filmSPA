import React from "react";
import { Gallery } from "../../../components";

export default function GalleryPopup() {
  return (
    <Gallery.Backdrop>
      <Gallery.Close />
      <Gallery.Backdrop>
        <Gallery.Container>
          <Gallery.Active />
          <Gallery.Wrapper>
            <Gallery.Button>
              <Gallery.Left />
            </Gallery.Button>
            <Gallery.Miniature />
            <Gallery.Button>
              <Gallery.Right />
            </Gallery.Button>
          </Gallery.Wrapper>
        </Gallery.Container>
      </Gallery.Backdrop>
    </Gallery.Backdrop>
  );
}
