import React from "react";

import { Container, ImagePlaceholder, Wrapper } from "./styles/modal-gallery";

export default function ModalGallery({ children }) {
  return <Container>{children}</Container>;
}

ModalGallery.ImagePlaceholder = function ModalGalleryImagePlaceholder() {
  return (
    <Wrapper>
      <ImagePlaceholder src={`../assets/images/gallery-placeholder.png`} />
    </Wrapper>
  );
};
