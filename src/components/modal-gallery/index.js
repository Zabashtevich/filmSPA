import React from "react";

import { baseAuthorImageLink, basePhotoLink } from "../../constants/constants";
import {
  Container,
  Icon,
  Wrapper,
  Photo,
  Close,
  ListContainer,
  ListItem,
  Backdrop,
  CloseWrapper,
} from "./styles/modal-gallery";

export default function ModalGallery({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ModalGallery.Icon = function ModalGalleryIcon({ ...rest }) {
  return (
    <Wrapper {...rest}>
      <Icon src={`../assets/images/gallery-placeholder.png`} />
    </Wrapper>
  );
};

ModalGallery.Backdrop = function ModalGalleryBackdrop({ children, ...rest }) {
  return <Backdrop {...rest}>{children}</Backdrop>;
};

ModalGallery.Photo = function ModalGalleryPhoto({ children, src }) {
  return <Photo src={basePhotoLink + src}>{children}</Photo>;
};

ModalGallery.CloseIcon = function ModalGalleryCloseIcon({ ...rest }) {
  return (
    <CloseWrapper>
      <Close {...rest} />
    </CloseWrapper>
  );
};

ModalGallery.ListContainer = function ModalGalleryListContainer({ children }) {
  return <ListContainer>{children}</ListContainer>;
};

ModalGallery.ListItem = function ModalGalleryListItem({ src, ...rest }) {
  return <ListItem src={baseAuthorImageLink + src} {...rest} />;
};
