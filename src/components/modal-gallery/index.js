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

export default function ModalGallery({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ModalGallery.Icon = function ModalGalleryIcon() {
  return (
    <Wrapper>
      <Icon src={`../assets/images/gallery-placeholder.png`} />
    </Wrapper>
  );
};

ModalGallery.Backdrop = function ModalGalleryBackdrop({ children, ...rest }) {
  return <Backdrop {...rest}>{children}</Backdrop>;
};

ModalGallery.Content = function ModalGalleryContent({ children }) {
  return <Content>{children}</Content>;
};

ModalGallery.Photo = function ModalGalleryPhoto({ src }) {
  return <Photo src={src} />;
};

ModalGallery.CloseIcon = function ModalGalleryCloseIcon({ ...rest }) {
  return <Close {...rest} />;
};

ModalGallery.ListContainer = function ModalGalleryListContainer({ children }) {
  return <ListContainer>{children}</ListContainer>;
};

ModalGallery.ListItem = function ModalGalleryListItem({ src }) {
  return <ListItem src={src} />;
};
