import React from "react";

import {
  Container,
  Icon,
  Wrapper,
  Content,
  Photo,
  Close,
  ListContainer,
  ListItem,
  Backdrop,
} from "./styles/modal-gallery";

export default function ModalGallery({ children }) {
  return <Container>{children}</Container>;
}

ModalGallery.Icon = function ModalGalleryIcon() {
  return (
    <Wrapper>
      <Icon src={`../assets/images/gallery-placeholder.png`} />
    </Wrapper>
  );
};

ModalGallery.Backdrop = function ModalGalleryBackdrop({ children }) {
  return <Backdrop>{children}</Backdrop>;
};

ModalGallery.Content = function ModalGalleryContent({ children }) {
  return <Content>{children}</Content>;
};

ModalGallery.Photo = function ModalGalleryPhoto({ src }) {
  return <Photo src={src} />;
};

ModalGallery.CloseIcon = function ModalGalleryCloseIcon() {
  return <Close />;
};

ModalGallery.ListContainer = function ModalGalleryListContainer({ children }) {
  return <ListContainer>{children}</ListContainer>;
};

ModalGallery.ListItem = function ModalGalleryListItem({ src }) {
  return <ListItem src={src} />;
};
